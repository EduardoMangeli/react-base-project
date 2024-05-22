import { useState } from "react";
import Base from "./Base";
import GraficoCode from "../components/Grafico/Grafico";
import ServicesBar from "../components/ServicesBar/ServicesBar.jsx";
import AcoesCard from "../components/AcoesCard/AcoesCard";
import UsuariosCard from "../components/UsuariosCard/UsuarioCard";
import AutenticaçãoCard from "../components/AutenticaçãoCard/AutenticaçãoCard";
import NotificacaoCard from "../components/NotificacaoCard/NotificacaoCard";

import dadosSolicitacoes from "../data/solicitacoes.json";
import dadosUsuarios from "../data/usuarios.json";
import dadosAutenticação from "../data/autenticacao.json";
import dadosNotificacao from "../data/notificacao.json";

export const Home = () => {
  // Estado para armazenar os dados
  const [solicitacoes, setSolicitacoes] = useState(dadosSolicitacoes);
  const [usuarios, setUsuarios] = useState(dadosUsuarios);
  const [autenticacao, setAutenticação] = useState(dadosAutenticação);
  const [notificacao, setNotificacao] = useState(dadosNotificacao);
  const [selectedService, setSelectedService] = useState('Dosimetria Clínica');

  return (
    <Base>
      <h3>Dashboard |</h3>
      <div className="dashboardFundo">
        <div className="acoeRecentesContainer">
          <h4>Ações Recentes:</h4>
          <div className="linhaAcoes">
            {solicitacoes.map((solicitacao) => (
              <AcoesCard
                key={solicitacao.id}
                id={solicitacao.id}
                status={solicitacao.status}
                tempo={solicitacao.tempo}
              />
            ))}
          </div>
        </div>
        
        <div className="container-234">
          <div className="servicosContainer">
            <div className="grafico-area">
              <form id="servicos-options">
                <label htmlFor="formulario">Serviços:</label>
                <select id="form-style" name="formulario">
                  <option value="dosimetriaClinica">Dosimetria Clinica</option>
                  <option value="dosimetriaPreClinica">Dosimetria Pré Clinica</option>
                  <option value="radiosinoviortese">Radiosinoviortese</option>
                  <option value="segmentacao">Segmentação</option>
                </select>
              </form>
              <GraficoCode />
            </div>
          </div>

          <div className="container-34">
            <div className="usuarioContainer">
              <h4>Usuários:</h4>
              <div className="linhaUsuarios">
                {usuarios.map((usuario) => (
                  <UsuariosCard
                    key={usuario.id}
                    id={usuario.id}
                    Descrição={usuario.Descrição}
                    Cargo={usuario.Cargo}
                  />
                ))}
              </div>
            </div>

            <div className="autenticacaoContainer">
              <h4>Autenticação e Autorização:</h4>
              <div className="linhaAutenticação">
                {autenticacao.map((autenticacao) => (
                  <AutenticaçãoCard
                    key={autenticacao.id}
                    id={autenticacao.id}
                    Descrição={autenticacao.Descrição}
                    Cargo={autenticacao.Membros}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="notificacaoContainer">
          <h4>Notificações:</h4>
          <ServicesBar onServiceChange={setSelectedService} />
          <div className="linhaNotificacao">
            {notificacao.map((notificacao) => (
              <NotificacaoCard
                key={notificacao.id}
                id={notificacao.id}
                Descrição={notificacao.Descrição}
                Cargo={notificacao.Cargo}
              />
            ))}
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;
