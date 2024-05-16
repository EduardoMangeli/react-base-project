import { useTranslation } from 'react-i18next';
import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import Base from "./Base"
import { Link } from "react-router-dom";
import { StyleAnun } from "../components/Anunciante/StyeAnunciante";

const Contato = () => {
    const { t } = useTranslation();
    return (
        <Base>
            <Banner titulo={t("Contato")} imagem={""}/>
            <div className="adTexto">
                <h1>{t('Fale Conosco')}</h1> 
                <p>{t('Temos um compromisso em oferecer o melhor atendimento e garantir que sua experiência explorando o Rio de Janeiro seja inesquecível. Se você tem dúvidas, sugestões ou precisa de mais informações, não hesite em nos contactar. Nossa equipe está pronta para ajudá-lo a descobrir todas as maravilhas que o Rio tem a oferecer.')}</p>
            </div>
            <div>
                <Botao texto={t("Entre em contato")} isWhatsApp={true} numeroCelular={"+5521999929790"} mensagem={"Olá! Vim do site e gostaria de tirar uma dúvida."}></Botao>
            </div>
        </Base>
    
    )
}

export default Contato;