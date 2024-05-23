import { Link } from "react-router-dom";
import { Top } from "./Style"; 

const Header = () => (
  <Top>
    <div className="div-logo">
      <img src={`${process.env.PUBLIC_URL}imagens/dosimagem.png`} alt="Logo" class="logo" />
      <div className="links-container">
    </div>
    </div>
    <div className="retangulo"></div>
    <div className="div-botoes">
        <Link to="/">Home</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/conta">Conta</Link>
    </div>
    <div className="linha"></div>
  </Top>
);


export default Header;