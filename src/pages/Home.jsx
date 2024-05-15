import Base from "./Base";
import GraficoCode from "../components/Grafico/Grafico";
import { useState } from "react";
import ServicesBar from "../components/ServicesBar/ServicesBar.jsx";

// AQUI IMPORTA OS DADOS DO JSON
import dadosSolicitacoes from "../data/solicitacoes.json";
import  AcoesCard  from "../components/AcoesCard/AcoesCard";
import UsuariosCard from "../components/UsuariosCard/UsuarioCard";
import dadosUsuarios from "../data/usuarios.json";
import AutenticaçãoCard from "../components/AutenticaçãoCard/AutenticaçãoCard";
import dadosAutenticação from "../data/autenticacao.json";
import NotificacaoCard from "../components/NotificacaoCard/NotificacaoCard";
import dadosNotificacao from "../data/notificacao.json";

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
const[autenticacao, setAutenticação] = useState(dadosAutenticação)
const[notificacao, setNotificacao] = useState(dadosNotificacao)
const [selectedService, setSelectedService] = useState('Dosimetria Clínica');


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
              <div class="linhaAutenticação">
              {autenticacao.map(
                                     (autenticacao) => (
                                         <AutenticaçãoCard
                                             key={autenticacao.id}
                                               id={autenticacao.id}
                                               Descrição={autenticacao.Descrição}
                                               Cargo={autenticacao.Membros}
                                         />
                                     )
                                 )}
                                
                                 </div>
            </div>
          </div>
        </div>
        <div class="notificacaoContainer">
          <h4>Notificações:</h4>
          <ServicesBar onServiceChange={setSelectedService} />
          <div class="linhaNotificacao">
          {notificacao.map(
                                     (notificacao) => (
                                         <NotificacaoCard
                                             key={notificacao.id}
                                               id={notificacao.id}
                                               Descrição={notificacao.Descrição}
                                               Cargo={notificacao.Cargo}
                                         />
                                     )
                                 )}
                                
                                 </div>
        </div>
      </div>
    </Base>
  );
};

export default Home