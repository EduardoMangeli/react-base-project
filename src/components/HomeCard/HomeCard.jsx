import { HomePageHead } from "./Style";
import Botao from "../Botao/Botao";

import '../../utils/i18n'
import { useTranslation } from "react-i18next";

import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const HomeCard = ({titulo, texto, pl}) => {
  const { t } = useTranslation();

    return(
      <HomePageHead>
      <div className="container">
        <div className="text-container">
          <h1 className="titulo">{titulo}</h1>
          <h3 className="subtitulo">{texto}</h3>
          <div className="textoplataformas"> <h5>{pl}</h5> </div>
          <span className="botoesPlataformas">
            <a href="https://www.apple.com/br/app-store/" target="_blank" rel="noopener noreferrer">
              <button className="botao"><FaApple size={25}/> App Store</button>
            </a>
            <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
              <button className="botao"><FaGooglePlay size={25}/> Google Play</button>
            </a>
          </span>
        </div>
        <div className="img-container">
          <img src="imagens/PasseioCariocaLogoBranco.svg" alt="Logo"/> 
        </div>
      </div>
    </HomePageHead>
    )
  }
  
  export default HomeCard;