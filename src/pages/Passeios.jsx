import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import ListContainer from "../components/ListContainer/ListContainer";
import PasseioCard from "../components/PasseioCard/PasseioCard";
import Rodape from "../components/Rodape/Rodape";
import Base from "./Base"

const Passeios = () => {

    return (
        <Base>
        <Banner titulo={"Passeios"} imagem={"url da imagem"}/>
        <div><Botao texto="Baixe o app"/></div>
        <ListContainer>
            <PasseioCard></PasseioCard>
            <PasseioCard></PasseioCard>
            <PasseioCard></PasseioCard>
            <PasseioCard></PasseioCard>
            <PasseioCard></PasseioCard>
            <PasseioCard></PasseioCard>
            <PasseioCard></PasseioCard>
            <PasseioCard></PasseioCard>
        </ListContainer>
        <Botao texto="Baixe o app"></Botao>
        </Base>
    )
  }
  
  export default Passeios;