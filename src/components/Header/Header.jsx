import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <Link to="/">Inicio</Link>
    <Link to="/Ídolos">Ídolos</Link>
    <Link to="/atletas">Atletas</Link>
    
    { window.sessionStorage.getItem('accessToken')
    ? <Link to="/logout">Sair</Link>
    : <Link to="/login">Login</Link>
    }
    
  </Top>
)

export default Header;