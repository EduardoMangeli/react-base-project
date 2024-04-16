import { Link } from "react-router-dom";
import { Top } from "./Style";

/*{ window.sessionStorage.getItem('accessToken')
    ? <Link to="/logout">Logout</Link>
    : <Link to="/login">Login</Link>
    }*/

const Header = () => (
  <Top>
    <Link to="/">Home</Link>
    <Link to="/passeios">Passeios</Link>
    <Link to="/gameficacao">Gameficação</Link>
    <Link to="/mapa">Mapa</Link>
    <Link to="/about">Sobre Nós</Link>
    <Link to="/contato">Contato</Link>
    <Link to="/anuncie">Anuncie</Link>
    <Link to="/guia">Seja um Guia</Link>  
  </Top>
)

export default Header;