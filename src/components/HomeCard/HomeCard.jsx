import { HomePageHead } from "./Style";
import Botao from "../Botao/Botao";

import Popup from "../../components/Popup/Popup";
import { useState } from 'react';

import '../../utils/i18n'
import { useTranslation } from "react-i18next";

const HomeCard = ({titulo, texto}) => {
  const { t } = useTranslation();

  const[buttonPopup, setButtonPopup] = useState(false);

    return(
      <HomePageHead>
      <div className="container">
        <div className="text-container">
          <h1 className="titulo">{titulo}</h1>
          <h3 className="subtitulo">{texto}</h3>
          <div onClick={()=> setButtonPopup(true)}><Botao texto={t("Baixe o app")}/></div>
              <Popup trigger={buttonPopup} position="center" modal setTrigger={setButtonPopup}>
              </Popup>
        </div>
        <div className="img-container">
          <img src="imagens/PasseioCariocaLogoBranco.svg" alt="Logo"/> 
        </div>
      </div>
    </HomePageHead>
    )
  }
  
  export default HomeCard;