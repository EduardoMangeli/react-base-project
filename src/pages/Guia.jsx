import { useTranslation } from 'react-i18next';
import Banner from '../components/Banner/Banner';
import Botao from "../components/Botao/Botao";
import Base from './Base';  // Importa o componente Base que já inclui Header, Rodape, etc.

const Guia = () => {
    const { t } = useTranslation();
    return (
        <Base>  {/* Utiliza Base como um componente de ordem superior que envolve o conteúdo da página */}
            <Banner titulo={t("Guia Turístico")}/>
            <div className="adTexto">
                <h3>{t('Junte-se a nos como guia parceiro')}</h3>
                <p>{t('Você é um guia turístico apaixonado por compartilhar os segredos e maravilhas da nossa cidade? Junte-se a nós e torne-se um parceiro em nossa plataforma de turismo! Junte-se a nós e faça parte de uma comunidade de guias apaixonados por turismo, compartilhando seu conhecimento e entusiasmo com viajantes de todo o mundo! Registre-se agora e comece a transformar sua paixão em uma experiência única de turismo!')}</p>
            </div>
            <div><Botao texto={t("Entre em contato")} rota= "https://wa.me/+5521999929790"></Botao></div>
        </Base>
    );
}

export default Guia;
