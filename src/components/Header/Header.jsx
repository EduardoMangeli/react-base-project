import { Link } from "react-router-dom";
import { Top } from "./Style";

const logo = "/imagens/icons/logo.png";
const Header = () => (
  <Top>

      <div id='nav1'>
          <button className="hamburguer">☰</button>
          <img src={logo}/>
      </div>

      <div id='nav2'>
          <Link to="/dashboard">Home</Link>
          <Link to="/servicos">Serviços</Link>
          { window.sessionStorage.getItem('accessToken')
              ? <Link to="/perfil">Conta</Link>
              : <Link to="/login">Login</Link>
          }
      </div>

  </Top>
)

export default Header;