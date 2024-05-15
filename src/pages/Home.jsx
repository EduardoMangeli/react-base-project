import Base from "./Base";
import GraficoCode from "../components/Grafico/Grafico";
import { useState } from "react";

// AQUI IMPORTA OS DADOS DO JSON
import dadosSolicitacoes from "../data/solicitacoes.json";
import  AcoesCard  from "../components/AcoesCard/AcoesCard";
import UsuariosCard from "../components/UsuariosCard/UsuarioCard";
import dadosUsuarios from "../data/usuarios.json";

export const Home = () => {
  /* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */

// AQUI VOCE CRIA O ESTADO QUE ARMAZENA OS DADOS 
const [solicitacoes , setSolicitacoes] = useState(dadosSolicitacoes);
const[usuarios, setUsuarios] = useState(dadosUsuarios);


  return (
    <Base>
      <h3>Dashboard |</h3>
      <div class="dashboardFundo">
        <div class="acoeRecentesContainer">
          <h4>Ações Recentes:</h4>
          <div class="linhaAcoes">
          {solicitacoes.map(
                                     (solicitacao) => (
                                         <AcoesCard
                                             key={solicitacao.id}
                                               id={solicitacao.id}
                                               status={solicitacao.status}
                                               tempo={solicitacao.tempo}
                                         />
                                     )
                                 )}
                                
                                 </div>
        </div>
        <div className="container-234">
          <div class="servicosContainer">
            <div className="grafico-area">
              <form id="servicos-options">
                <label for="formulario">Serviços:</label>
                <select id="form-style" name="formulario">
                  <option value="dosimetriaClinica">Dosimetria Clinica</option>
                  <option value="dosimetriaPreClinica">Dosimetria Pré Clinica</option>
                  <option value="radiosinoviortese">Radiosinoviortese</option>
                  <option value="segmentacao">Segementação</option>
                </select>
              </form>
              <GraficoCode></GraficoCode>
            </div>
          </div>
          <div className="container-34">
            <div class="usuarioContainer">
              <h4>Usuários:</h4>
              <div class="linhaUsuarios">
          {usuarios.map(
                                     (usuarios) => (
                                         <UsuariosCard
                                             key={usuarios.id}
                                               id={usuarios.id}
                                               Descrição={usuarios.Descrição}
                                               Cargo={usuarios.Cargo}
                                         />
                                     )
                                 )}
                                
                                 </div>
            </div>
            <div class="autenticacaoContainer">
              <h4>Autenticação e Autorização:</h4>
            </div>
          </div>
        </div>
        <div class="notificacaoContainer">
          <h4>Notificações:</h4>
        </div>
      </div>
    </Base>
  );
};

export default Home