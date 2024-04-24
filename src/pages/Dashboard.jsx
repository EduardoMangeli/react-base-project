import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import Secao from "../components/Secao/Secao";
import SolicitacaoCard from "../components/SolicitacaoCard/SolicitacaoCard";
import dadosSolicitacoes from "../data/solicitacoes.json";
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
    <Base>
      <h1>
        Dashboard
      </h1>

      <Secao nome="Solicitações"
             info="../../public/imagens/icons/info.png"
             acessar="../../public/imagens/icons/info.png"
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

          {dadosSolicitacoes.map(
              (solicitacao) => (
                <SolicitacaoCard
                    id={solicitacao.id}
                    cliente={solicitacao.cliente}
                    data={solicitacao.date}
                />
                )
            )}
        </>
      }/>

        <Secao nome="Calibrações" conteudo={
        <div>
          <table>
            <th>ID</th>
            <th>Calibração</th>
            <th>User Name</th>
            <th>Isotopia</th>
            <th>Data de Solicitação</th>

            <tr>
              <td>1</td>
              <td>Calibração 1</td>
              <td>João</td>
              <td>123</td>
              <td>01/01/2021</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Calibração 2</td>
              <td>João</td>
              <td>123</td>
              <td>01/01/2021</td>
            </tr>
          </table>

          <button>Voltar</button>
          <button>Avançar</button>
        </div>
        }/>

    <Secao nome="Informações" conteudo={
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
    }/>

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