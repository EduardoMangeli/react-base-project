import Base from "./Base";
import GraficoCode from "../components/Grafico/Grafico";

// AQUI IMPORTA OS DADOS DO JSON
import dadosSolicitacoes from "../data/solicitacoes.json";
import  AcoesCard  from "../components/AcoesCard/AcoesCard";

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


  return (
    <Base>
      <h3>Dashboard |</h3>
      <div class="retanguloCinza">
        <div class="retanguloBranco1Home">
          <h4>Ações Recentes:</h4>
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
        <div className="container-234">
          <div class="retanguloBranco2Home">
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
            <div class="retanguloBranco3Home">
              <h4>Usuários:</h4>
            </div>
            <div class="retanguloBranco4Home">
              <h4>Autenticação e Autorização:</h4>
            </div>
          </div>
        </div>
        <div class="retanguloBranco5Home">
          <h4>Notificações:</h4>
        </div>
      </div>
    </Base>
  );
};

export default Home