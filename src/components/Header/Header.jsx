import { Link } from "react-router-dom";
import { Top } from "./Style"; 
import { Imagem } from "./Style"; 

const Header = () => (
  <Top>
    <div className="header-container">
      <img src={"/imagens/Dosimagem azul.643f996138318fd20aa8.png"} alt="Logo" className="logo" />
      <div className="links-container">
      </div>
    </div>
    <br/>
    <div>
        <Link to="/">Home</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/conta">Conta</Link>
    </div>
  </Top>
);


export default Header;