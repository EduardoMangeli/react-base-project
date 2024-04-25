import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <Link to="/">Home</Link>
    <Link to="/clinica">Dosimetria Clinica</Link>
    <Link to="/modelagem">Modelagem Computacional</Link>
    <Link to="/radiosinoviortese">Radiosinoviortese</Link>
    <Link to="/segmentacaoequantificacao">Segmentacao e Quantificacao</Link>
    <Link to="/dosimetriapreclinica">Dosimetria Pre Clinica</Link>
    
    { window.sessionStorage.getItem('accessToken')
    ? <Link to="/logout">Logout</Link>
    : <Link to="/login">Login</Link>
    }
    
  </Top>
)

export default Header;
