import { HomePageHead } from "./Style";
import Botao from "../Botao/Botao";

import '../../utils/i18n'
import { useTranslation } from "react-i18next";

const HomeCard = ({titulo, texto}) => {
  const { t } = useTranslation();

    return(
      <HomePageHead>
      <div className="container">
        <div className="text-container">
          <h1>{titulo}</h1>
          <h3>{texto}</h3>
          <div><Botao texto={t("Baixe o app")} /></div>
        </div>
        <div className="img-container">
          <img src="imagens/PasseioCariocaLogoBranco.svg" alt="Logo"/> 
        </div>
      </div>
    </HomePageHead>
    )
  }
  
  export default HomeCard;