import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import ListContainer from "../components/ListContainer/ListContainer";
import PasseioCard from "../components/PasseioCard/PasseioCard";
import Rodape from "../components/Rodape/Rodape";
import Base from "./Base"

const Passeios = () => {

    return (
        <Base>
        <Banner></Banner>
        <div><Botao /></div>
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
        <Botao></Botao>
        </Base>
    )
  }
  
  export default Passeios;