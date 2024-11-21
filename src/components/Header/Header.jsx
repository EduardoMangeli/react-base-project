import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <Link to="/">Home</Link>
    <Link to="/fotos">Fotos</Link>
    <Link to="/atletas">Atletas</Link>
    <Link to="/Nova-pagina">Nova pag.</Link>
    <Link to ="/SobreNos">SobreNos</Link>
    
    { window.sessionStorage.getItem('accessToken')
    ? <Link to="/logout">Logout</Link>
    : <Link to="/login">Login</Link>
    }
    
  </Top>
)

export default Header;