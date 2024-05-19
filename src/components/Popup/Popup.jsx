import React from "react";
import PopUpStyle from "./Style";

import { useTranslation } from 'react-i18next';

import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Popup = (props) => {
    const { t } = useTranslation();

    return (props.trigger) ? (
        <PopUpStyle>
                <div className="popup-container">
                    <div className="popup-inner">
                        <button className="close-btn" onClick={() => props.setTrigger(false)}>&times;</button>
                        <img className="logo" src="imagens/PasseioCariocaLogoBranco.svg" alt="Logo"/>
                        <div className="popup-text">
                            <h1>{t('Plataformas Disponíveis')}</h1>
                        </div>
                        <div className="botoesPlataformas">
                            <a href="https://www.apple.com/br/app-store/" target="_blank" rel="noopener noreferrer">
                                <button className="botao"><FaApple size={25}/> App Store</button>
                            </a>
                            <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
                                <button className="botao"><FaGooglePlay size={25}/> Google Play</button>
                            </a>
                        </div>
                    </div>
                </div>
        </PopUpStyle>
    ) : "";
};

export default Popup;