import { useEffect, useState } from "react";
import Base from "./Base"
import { getAll, getElenco } from "../services/AtletasBotafogo";
import AtletaCard from "../components/AtletaCard/AtletaCard";
import ListContainer from "../components/ListContainer/ListContainer";
import Tabela from "../components/Tabela/Tabela";
import dadosSolicitacoes from "../data/solicitacoes.json";
import FilterButton from "../components/FilterButton/FilterButton";
import Busca from "../components/Busca/Busca";

const Atletas = () => {

    // Array com as possíveis opções da filtragem
    const tipos = [
        "Clinic Doscimetries",
        "Preclinic Doscimetries",
        "Radiosynoviorthesis",
        "Segmentation"
    ]

    // Array com os nomes das colunas da tabela
    const colunas = [
        "ID",
        "Código",
        "Nome da Análise",
        "Usuário",
        "Atividade Injetada",
        "Calibração",
        "Status",
        "Imagem do Paciente",
        "Relatório",
        "Criado em",
        "Tipo"
    ]

    // Array com os nomes das propriedades das solicitações
    const propriedades = [
        "id",
        "codigo",
        "analise",
        "cliente",
        "atividade",
        "calibracao",
        "status",
        "imagem",
        "relatorio",
        "date",
        "tipo"
    ]

    // Criação de um estado para armazenar o tipo de consulta
    const [tipoConsulta, setTipoConsulta] = useState(tipos)

    // Criação de um estado para armazenar as solicitações
    const [solicitacoes , setSolicitacoes] = useState(dadosSolicitacoes);

    // Criação de um estado que define a opção de busca
    const [opcao, setOpcao] = useState(colunas[0])

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

    const alterarOpcao = (index) => {
        console.log("opção alterada")
        setOpcao(colunas[index])
    }

    const pesquisar = (e) => {
        let i = colunas.indexOf(opcao)
        if (e !== "") {
            setSolicitacoes(solicitacoes.filter(
                (ele) => String(ele[propriedades[i]]).includes(e)
            ));
        } else {
            filtrar()
        }
    }

  return (
      <Base titulo="Serviços">
          <div style={{display: 'flex', padding: 20, justifyContent: "space-between"}}>
              <div style={{display: 'flex', gap: 10}}>
                  {tipos.map((tipo, indexo) => (
                      <FilterButton
                          key={indexo}
                          isActive={tipoConsulta.includes(tipo)}
                          onClick={() => adicionarTipoConsulta(tipo)}
                          text={tipo}
                      />
                  ))}
              </div>

              <Busca
                opcoes={
                  <>
                    {colunas.map((coluna, index) => (
                        <button key={index} onClick={() => alterarOpcao(colunas.indexOf(coluna))}>{coluna}</button>
                    ))}
                  </>
                }
                opcao={opcao}
                onClick={filtrar}
                onChance={(e) => pesquisar(e.target.value)}
              />
          </div>

          <Tabela
              tipo="servico"
            linha={
                <>

          {solicitacoes.map(
              (solicitacao, index) => (
                  <tr key={index}>
                      <td>{solicitacao.id}</td>
                      <td>{solicitacao.codigo}</td>
                      <td>{solicitacao.analise}</td>
                      <td>{solicitacao.cliente}</td>
                      <td>{solicitacao.atividade}</td>
                      <td>{solicitacao.calibracao} <a href=""><i></i></a></td>
                      <td><span className="nao-visto">{solicitacao.status}</span></td>
                      <td>{solicitacao.imagem} <a href=""><i></i></a></td>
                      <td> {solicitacao.relatorio} <a href=""><i></i></a></td>
                      <td>{solicitacao.date}</td>
                      <td>{solicitacao.tipo}</td>
                  </tr>
              ))}

                </>
        }/>

      </Base>
  )
}

export default Atletas;