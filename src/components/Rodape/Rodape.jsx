import { Bottom } from "./Style";
import { Link } from "react-router-dom";

const Rodape = function(){
    return (
        <Bottom>
            <div className="colunaNav">
                <h3>Navegação</h3>
                <Link to="/">Home</Link>
                <Link to="/passeios">Passeios</Link>
                <Link to="/gameficacao">Gameficação</Link>
                <Link to="/mapa">Mapa</Link>
                <Link to="/about">Sobre Nós</Link>
                <Link to="/anuncie">Anuncie</Link>
                <Link to="/guia">Seja um Guia</Link>
            </div>
            <div className="redes">
                <h3>Nossas Redes</h3>
                <a className="sociais" href="https://www.instagram.com/riocasaseprediosantigos/">
                <img src="imagens/socials/instagram-fill.svg" alt="Instagram" height={25} />Instagram
                </a>
                <a className="sociais" href="https://www.instagram.com/riocasaseprediosantigos/">
                <img src="imagens/socials/facebook-fill.svg" alt="Instagram" height={25} />Facebook
                </a>
                <a className="sociais" href="https://www.instagram.com/riocasaseprediosantigos/">
                <img src="imagens/socials/whatsapp-fill.svg" alt="Instagram" height={25} />Whatsapp
                </a>
            </div>
        </Bottom>
    )
}

export default Rodape;