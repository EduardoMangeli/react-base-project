import Base from "./Base"
import Secao from "../components/Secao/Secao";
import SolicitacaoCard from "../components/SolicitacaoCard/SolicitacaoCard";
import dadosSolicitacoes from "../data/solicitacoes.json";
import dadosCalibracoes from "../data/calibracoes.json";
import Tabela from "../components/Tabela/Tabela";
import {useEffect, useState} from "react";
import Botao from "../components/FilterButton/Botao";
const Dashboard = () => {
    // Array com as possíveis opções da filtragem
    const tipos = [
        "Clinic Doscimetries",
        "Preclinic Doscimetries",
        "Radiosynoviorthesis",
        "Segmentation"
    ]

    // Criação de um estado para armazenar o tipo de consulta
    const [tipoConsulta, setTipoConsulta] = useState(tipos)

    // Criação de um estado para armazenar as solicitações
    const [solicitacoes , setSolicitacoes] = useState(dadosSolicitacoes);

    // Função que adiciona o filtro
    const adicionarTipoConsulta = (tipo) => {
        if(!tipoConsulta.includes(tipo)){
            setTipoConsulta([...tipoConsulta, tipo])
        } else {
            setTipoConsulta(tipoConsulta.filter((ele) => ele !== tipo))
        }
    }

    useEffect(() => {
        filtrar();
    }, [tipoConsulta]);

    // Filtragem dos dados a partir do tipo de consulta
    const filtrar = () => {
        setSolicitacoes(dadosSolicitacoes.filter(
            (ele) => tipoConsulta.includes(ele.tipo)
        ));
    }

  return (
      <Base titulo="Dashboard">
          <Secao nome="Solicitações"
                 pai={"/servicos"}
                 navbar={
                     tipos.map((tipo, indexo) => (
                         <Botao
                             key={indexo}
                             isActive={tipoConsulta.includes(tipo)}
                             onClick={() => adicionarTipoConsulta(tipo)}
                             text={tipo}
                         />
                     ))
                 }
                 conteudo={
                     <>
                         {solicitacoes.slice(0, 5).map(
                             (solicitacao) => (
                                 <SolicitacaoCard
                                     key={solicitacao.id}
                                     id={solicitacao.id}
                                     cliente={solicitacao.cliente}
                                     data={solicitacao.date}
                                     link={"/servico/" + solicitacao.id}
                                 />
                             )
                         )}
                     </>
                 }
          />

          <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              <div style={{width: '49.9%'}}>
                  <Secao
                      pai="/calibracoes"
                      nome="Calibrações"
                      conteudo={
                          <div>
                              <Tabela
                                  tipo="calibracao"
                                  linha={
                                      <>
                                          {dadosCalibracoes.map(
                                              (calibracao) => (
                                                  <tr key={calibracao.id}>
                                                      <td>{calibracao.id}</td>
                                                      <td>{calibracao.nome}</td>
                                                      <td>{calibracao.usuario}</td>
                                                      <td>{calibracao.isotopo}</td>
                                                      <td>{calibracao.imagem}</td>
                                                      <td>{calibracao.date}</td>
                                                  </tr>
                                              ))}
                                      </>
                                  }
                              />

                              <button>Voltar</button>
                              <button>Avançar</button>
                          </div>
                      }
                  />
              </div>
              <div style={{width: '49.9%'}}>
                  <Secao
                      pai={"/servicos"}
                      nome="Informações"
                      conteudo={
                          <div>
                              <div>
                                  <h3>Clinic Doscimetries</h3>
                                  <p><span>34</span> Pedidos Abertos</p>
                                  <p><span>134</span> Pedidos Fechados</p>
                              </div>

                              <div>
                                  <button>Voltar</button>
                                  <button>Avançar</button>
                              </div>
                          </div>
                      }
                  />
              </div>
          </div>


          <Secao nome="Atualizações" conteudo={
              <div>
                  <div>
                      <div>
                          <p>012312310312</p>
                          <p>Alterado: Clinica dosimetria</p>
                          <p>Tempo: 6 minutos</p>
                      </div>

                      <div>
                          <p>012312310312</p>
                          <p>Alterado: Clinica dosimetria</p>
                          <p>Tempo: 6 minutos</p>
                      </div>
                  </div>
              </div>
          }/>

      </Base>
  )
}

export default Dashboard