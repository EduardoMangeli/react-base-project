import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <Link to="/">Home</Link>
    <Link to="/clinica">Dosimetria Clinica</Link>
    <Link to="/atletas">Atletas</Link>
    <Link to="/modelagem">Modelagem Computacional</Link>
    <Link to="/radiosinoviortese">Radiosinoviortese</Link>
    
    { window.sessionStorage.getItem('accessToken')
    ? <Link to="/logout">Logout</Link>
    : <Link to="/login">Login</Link>
    }
    
  </Top>
)

export default Header;