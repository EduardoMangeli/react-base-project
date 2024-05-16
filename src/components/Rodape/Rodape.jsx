import { Bottom } from "./Style";
import { Link } from "react-router-dom";
import { RiInstagramLine } from "react-icons/ri";
import { FaWhatsapp , FaFacebook } from "react-icons/fa";

const Rodape = function(){
    return (
        <Bottom>
            <div className="colunaNav">

                <div className="container">
                    <h3>Navegação</h3>
                    
                    <div className="columns">
                        <div className="left-column">
                            <Link to="/">Home</Link>
                            <Link to="/passeios">Passeios</Link>
                            <Link to="/gameficacao">Gameficação</Link>
                            <Link to="/mapa">Mapa</Link>
                            <Link to="/about">Sobre Nós</Link>
                        </div>
                        <div className="right-column">
                            <Link to="/anuncie">Anuncie</Link>
                            <Link to="/guia">Seja um Guia</Link>
                            <Link to="/contato">Entre em Contato</Link>
                            <Link to="/termos">Termos de Uso</Link>
                            <Link to="/privacidade">Política de Privacidade</Link>
                        </div>
                    </div>
                    
                </div>
                <div className="redes">
                    <h3>Nossas Redes</h3>
                    <a className="sociais" href="https://www.instagram.com/riocasaseprediosantigos/" target="_blank" rel="noopener noreferrer">
                        <RiInstagramLine size={25} className="socialicons"/>
                        <span className="link-text">Instagram</span>
                    </a>
                    <a className="sociais" href="https://www.facebook.com/riocasaseprediosantigos/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={25} className="socialicons"/>
                        <span className="link-text">Facebook</span>
                    </a>
                    <a className="sociais" href="https://wa.me/+5521999929790" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={25} className="socialicons"/>
                        <span className="link-text">Whatsapp</span>
                    </a>
                </div>
            </div>
            <small>© {new Date().getFullYear()} Passeio Carioca</small>

        

        </Bottom>
    )
}

export default Rodape;