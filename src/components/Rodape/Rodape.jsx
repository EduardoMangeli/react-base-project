import { Bottom } from "./Style";
import { Link } from "react-router-dom";

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
                            <Link to="/termos">Termos de Uso</Link>
                            <Link to="/privacidade">Política de Privacidade</Link>
                        </div>
                    </div>
                    
                </div>
                <div className="redes">
                    <h3>Nossas Redes</h3>
                    <a className="sociais" href="https://www.instagram.com/riocasaseprediosantigos/">
                        <img src="imagens/socials/instagram-fill.svg" alt="Instagram" height="25" />
                        <span className="link-text">Instagram</span>
                    </a>
                    <a className="sociais" href="https://www.facebook.com/riocasaseprediosantigos/">
                        <img src="imagens/socials/facebook-fill.svg" alt="Facebook" height="25" />
                        <span className="link-text">Facebook</span>
                    </a>
                    <a className="sociais" href="https://wa.me/1234567890">
                        <img src="imagens/socials/whatsapp-fill.svg" alt="WhatsApp" height="25" />
                        <span className="link-text">Whatsapp</span>
                    </a>
                </div>
            </div>
            <small>© {new Date().getFullYear()} Passeio Carioca</small>

        

        </Bottom>
    )
}

export default Rodape;