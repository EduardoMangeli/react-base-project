import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import ListContainer from "../components/ListContainer/ListContainer";
import PasseioCard from "../components/PasseioCard/PasseioCard";
import Rodape from "../components/Rodape/Rodape";
import Base from "./Base"
import passeio from "../data/passeios.json"

import { useTranslation } from "react-i18next";

import Popup from "../components/Popup/Popup";
import { useState } from "react";

const Passeios = () => {
    const { t } = useTranslation();

    const[buttonPopup, setButtonPopup] = useState(false);

    return (
        <Base>
        <Banner titulo={t('Passeios')} imagem={"url da imagem"}/>

        <div onClick={()=> setButtonPopup(true)}><Botao texto={t("Baixe o app")}/></div>
            <Popup trigger={buttonPopup} position="center" modal setTrigger={setButtonPopup}>
            </Popup>

        <ListContainer>
            {passeio.map(
                (e, index) => (
                <PasseioCard 
                    key={index}
                    nome={e.nome}
                    imagem={e.imagem}
                    dia={e.dia}
                    mes={e.mes}
                    local={e.local}
                    hora={e.hora}
                    valor={e.valor}
                />
                )
                )
                }
        </ListContainer>

        <div onClick={()=> setButtonPopup(true)}><Botao texto={t("Saiba Mais")}/></div>
            <Popup trigger={buttonPopup} position="center" modal setTrigger={setButtonPopup}>
            </Popup>

        </Base>
    )
  }
  
  export default Passeios;