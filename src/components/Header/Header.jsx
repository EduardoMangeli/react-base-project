import { Link } from "react-router-dom";
import { Top, MenuStyled, MenuContent, MenuIcon, MenuButton } from "./Style";
import { slide as Menu } from 'react-burger-menu'
import { MdOutlineTranslate } from 'react-icons/md';

import { useTranslation } from 'react-i18next';

import { useState, useEffect, useRef, useContext } from "react";

const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  ADVERTISE: "/anuncie",
  GUIDE: "/guia",
};

const Header = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('pt')
  const [menuVisible, setMenuVisible] = useState(false)
  const toggleMenu = () => setMenuVisible(!menuVisible)
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getLanguageName = (locale) => {
    switch (locale) {
      case 'en': return 'English';
      case 'pt': return 'Português';
      default: return '';
    }
  };

  const changeLanguage = value => {
    i18n.changeLanguage(value)
    .then( () => {
      setCurrentLanguage(value);
    })
  }

  return (
    <Top>
    <div id="outer-container">
      <Menu outerContainerId={ "outer-container" } right noOverlay>
        <Link to={ROUTES.HOME}>Home</Link>
        {/*<Link to="/passeios">Passeios</Link>
        <Link to="/gameficacao">Gameficação</Link>
        <Link to="/mapa">Mapa</Link>*/}
        <Link to={ROUTES.ABOUT}>Sobre Nós</Link>
        <Link to={ROUTES.ADVERTISE}>Anuncie</Link>
        <Link to={ROUTES.GUIDE}>Seja um Guia</Link>  
      </Menu>
    </div>
    <div className="divGeral">
      <Link to={ROUTES.HOME} className="containerLogo">
        <img src="imagens/PasseioCariocaLogoBranco.svg" alt="Passeio Carioca" />
        <h3>Passeio<br/>Carioca</h3>
      </Link>
      <div className="links">
        <Link to={ROUTES.HOME} className="linkpages">Home</Link>
        {/*<Link to="/passeios">Passeios</Link>
        <Link to="/gameficacao">Gameficação</Link>
        <Link to="/mapa">Mapa</Link>*/}
        <Link to={ROUTES.ABOUT}className="linkpages">Sobre Nós</Link>
        <Link to={ROUTES.ADVERTISE} className="linkpages">Anuncie</Link>
        <Link to={ROUTES.GUIDE} className="linkpages">Seja um Guia</Link>
      </div>

      <div ref={menuRef}>
        <MenuButton id="menu-btn" type="checkbox" checked={menuVisible} onChange={toggleMenu}/>
        <MenuStyled>
          <MenuIcon htmlFor="menu-btn">
            <MdOutlineTranslate />
          </MenuIcon>
          <span>{getLanguageName(i18n.language)}</span>
        </MenuStyled>
        <MenuContent isVisible= {menuVisible}>
          <div className="botoes">
            <button className="botaoLng" onClick={() => changeLanguage('pt')}>Português</button>
            <button className="botaoLng" onClick={() => changeLanguage('en')}>English</button>
          </div>
        </MenuContent>
      </div>
    </div>
  </Top>
  )
}

export default Header;
