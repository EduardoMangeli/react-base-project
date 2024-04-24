import { Link } from "react-router-dom";
import { Top } from "./Style"; 

const Header = () => (
  <Top>
    <div className="div-logo">
      <img src={"./imagens/dosimagem.png"} alt="Logo" className="logo" />
      <div className="links-container">
    </div>
    </div>
    <div class="retangulo"></div>
    <div className="div-botoes">
        <Link to="/">Home</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/conta">Conta</Link>
    </div>
    <div class="linha"></div>
  </Top>
);


export default Header;