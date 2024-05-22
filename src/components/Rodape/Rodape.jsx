import { Bottom } from "./Style";
import { Link } from "react-router-dom";
import { RiInstagramLine } from "react-icons/ri";
import { FaWhatsapp , FaFacebook } from "react-icons/fa";

const Rodape = function(){
    return (
        <Bottom>
            <div className="colunaNav">
                

                <div className="links-pages"> 
                    <Link to="/" className="containerLogo">
                        <img src="imagens/PasseioCariocaLogoBranco.svg" alt="Passeio Carioca" />
                        <h3 className="nomeEmpresa">Passeio<br/>Carioca</h3>
                    </Link>                 
                    <div className="explore">
                        <h3>Explore</h3>
                        <Link to="/">Home</Link>
                        <Link to="/passeios">Passeios</Link>
                        <Link to="/gameficacao">Gameficação</Link>
                        <Link to="/mapa">Mapa</Link>
                        <Link to="/about">Sobre Nós</Link>
                    </div>
                    <div className="contatos">
                        <h3>Contatos</h3>
                        <Link to="/anuncie">Anuncie</Link>
                        <Link to="/guia">Seja um Guia</Link>
                        <Link to="/contato">Fale conosco</Link>
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
                
            </div>
            <hr className="divider" />
            <div className="footerEnd">
                <small>© {new Date().getFullYear()} Passeio Carioca</small>
                <div className="bottomLinks">
                    <Link to="/termos"><small>Termos de Uso</small></Link>
                    <Link to="/privacidade"><small>Política de Privacidade</small></Link>
                </div>
                
            </div>
            

        

        </Bottom>
    )
}

export default Rodape;