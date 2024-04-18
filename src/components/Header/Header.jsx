import { Link } from "react-router-dom";
import { Top } from "./Style";

// Preciso de um botão hamburgue

const Header = () => (
  <Top>

      <button className="hamburguer">☰</button>
    <Link to="/dashboard">Home</Link>
    <Link to="/servicos">Serviços</Link>
    <Link to="/perfil">Conta</Link>
    
    { window.sessionStorage.getItem('accessToken')
    ? <Link to="/logout">Logout</Link>
    : <Link to="/login">Login</Link>
    }
    
  </Top>
)

export default Header;