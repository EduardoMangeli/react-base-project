import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import ListContainer from "../components/ListContainer/ListContainer";
import PasseioCard from "../components/PasseioCard/PasseioCard";
import Rodape from "../components/Rodape/Rodape";
import Base from "./Base"
import passeio from "../data/passeios.json"
import { useTranslation } from "react-i18next";

const Passeios = () => {
    const { t } = useTranslation();

    return (
        <Base>
        <Banner titulo={t('Passeios')} imagem={"url da imagem"}/>
        <div><Botao texto= {t('Baixe o app')}/></div>
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
        <div><Botao texto={t('Saiba Mais')}/></div>
        </Base>
    )
  }
  
  export default Passeios;