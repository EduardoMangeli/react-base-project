import { Bottom } from "./Style";
import { Link } from "react-router-dom";
import { RiInstagramLine } from "react-icons/ri";
import { FaWhatsapp , FaFacebook } from "react-icons/fa";

const Rodape = function(){
    return (
        <Bottom>
            <div className="colunaNav">
                    <Link to="/" className="containerLogo">
                        <img src="imagens/PasseioCariocaLogoBranco.svg" alt="Passeio Carioca" />
                        <h3 className="nomeEmpresa">Passeio<br/>Carioca</h3>
                    </Link>  
                    <hr className="dividerLogo" />               
                    <div className="explore">                        
                        <div className="linksColumn">
                            <h3>Explore</h3>
                            <Link to="/">Home</Link>
                            <Link to="/passeios">Passeios</Link>
                            <Link to="/gameficacao">Gameficação</Link>
                            <Link to="/mapa">Mapa</Link>
                            <Link to="/about">Sobre Nós</Link>
                        </div>
                    </div>
                    <div className="contatos">
                        <div className="linksColumn">
                            <h3>Contatos</h3>
                            <Link to="/anuncie">Anuncie</Link>
                            <Link to="/guia">Seja um Guia</Link>
                            <Link to="/contato">Fale conosco</Link>
                        </div>
                    </div>
                    
                </div>
                <div className="redes">
                        <div className="linksColumn">
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