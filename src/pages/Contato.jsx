import { useTranslation } from 'react-i18next';
import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import Base from "./Base"

const Contato = () => {
    const { t } = useTranslation();
    return (
        <Base>
            <Banner titulo={t("Contato")} imagem={"imagens/heroHome.png"}/>
            <div className="adTexto">
                <h1>{t('Fale Conosco')}</h1> 
                <p>{t('Temos um compromisso em oferecer o melhor atendimento e garantir que sua experiência explorando o Rio de Janeiro seja inesquecível. Se você tem dúvidas, sugestões ou precisa de mais informações, não hesite em nos contactar. Nossa equipe está pronta para ajudá-lo a descobrir todas as maravilhas que o Rio tem a oferecer.')}</p>
            </div>
            <div className="botoes">
                <Botao texto={t("Entre em contato")} isWhatsApp={true} numeroCelular={"+55(21)99992-9790"} mensagem={"Olá! Estou visitando o site e gostaria de mais informações sobre os serviços oferecidos."}></Botao>
            </div>
        </Base>
    
    )
}

export default Contato;