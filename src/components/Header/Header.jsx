import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <div className="containerLogo">
      <img src="imagens/PasseioCariocaLogoBranco.svg" />
      <h3>Passeio Carioca</h3>
    </div>
    <Link to="/">Home</Link>
    <Link to="/passeios">Passeios</Link>
    <Link to="/gameficacao">Gameficação</Link>
    <Link to="/mapa">Mapa</Link>
    <Link to="/about">Sobre Nós</Link>
    {/*<Link to="/contato">Contato</Link>*/}
    <Link to="/anuncie">Anuncie</Link>
    <Link to="/guia">Seja um Guia</Link>  
  </Top>
)

export default Header;