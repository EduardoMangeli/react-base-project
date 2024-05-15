import { Link } from "react-router-dom";
import { Top } from "./Style";
import { slide as Menu } from 'react-burger-menu'

import i18n from "../../utils/i18n";
import { useState } from "react";

const Header = () => {
  const [currentLanguage, setCurrentLanguage] = useState('pt')

  const changeLanguage = value => {
    i18n.changeLanguage(value)
    .then( () => {setCurrentLanguage(value)})
  }

  return (
    <Top>
    <div id="outer-container">
      <Menu outerContainerId={ "outer-container" } right noOverlay>
        <Link to="/">Home</Link>
        <Link to="/passeios">Passeios</Link>
        <Link to="/gameficacao">Gameficação</Link>
        <Link to="/mapa">Mapa</Link>
        <Link to="/about">Sobre Nós</Link>
        <Link to="/anuncie">Anuncie</Link>
        <Link to="/guia">Seja um Guia</Link>  
      </Menu>
    </div>

    <Link to="/" className="containerLogo">
      <img src="imagens/PasseioCariocaLogoBranco.svg" alt="Passeio Carioca" />
      <h3>Passeio Carioca</h3>
    </Link>
    <div className="botoes">
      <button className="botaoLng" onClick={() => changeLanguage('pt')} style={{ textDecoration: currentLanguage === 'pt' ? 'underline' : 'none' }}>
        PT
      </button>
      /
      <button className="botaoLng" onClick={() => changeLanguage('en')} style={{ textDecoration: currentLanguage === 'en' ? 'underline' : 'none' }}>
        EN
      </button>
    </div>
      <Link to="/" className="linkpages">Home</Link>
      <Link to="/passeios" className="linkpages">Passeios</Link>
      <Link to="/gameficacao" className="linkpages">Gameficação</Link>
      <Link to="/mapa" className="linkpages">Mapa</Link>
      <Link to="/about" className="linkpages">Sobre Nós</Link>
      <Link to="/anuncie" className="linkpages">Anuncie</Link>
      <Link to="/guia" className="linkpages">Seja um Guia</Link>
  </Top>
  )
}

export default Header;