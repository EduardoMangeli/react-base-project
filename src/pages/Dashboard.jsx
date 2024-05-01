import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import Secao from "../components/Secao/Secao";
import SolicitacaoCard from "../components/SolicitacaoCard/SolicitacaoCard";
import dadosSolicitacoes from "../data/solicitacoes.json";
import dadosCalibracoes from "../data/calibracoes.json";
import Tabela from "../components/Tabela/Tabela";
const Dashboard = () => {

  /* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */


  return (
    <Base titulo="Dashboard">

      <Secao nome="Solicitações"
             pai={"/servicos"}
             navbar={
                <>
                    <button>Clinic Dosimetries</button>
                    <button>Preclinic Dosimetris</button>
                    <button>Radiosynoviorthesis</button>
                    <button>Segmentation</button>
                </>
                 }
             conteudo={
        <>

          {dadosSolicitacoes.slice(0,5).map(
              (solicitacao) => (
                <SolicitacaoCard
                    id={solicitacao.id}
                    cliente={solicitacao.cliente}
                    data={solicitacao.date}
                    link={"/servico/"+solicitacao.id}
                />
                )
            )}
        </>
      }/>

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
                                                <tr>
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