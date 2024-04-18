import Banner from "../components/Banner/Banner";
import Base from "./Base"
import Botao from "../components/Botao/Botao";
import ListContainer from "../components/ListContainer/ListContainer";
import MedalhaCard from "../components/MedalhaCard/MedalhaCard";

const Gameficacao = () => {

  return (
    <Base>
    <h1>GAMEFICACAO</h1>
    <div className="adTexto">
        <h3>Descubra o turismo de uma maneira nova com o nosso aplicativo!</h3>
        <p>Explore os pontos turísticos incríveis da cidade e colecione medalhas digitais ao longo do caminho. Com nossa funcionalidade de gamificação, cada lugar que você visita se torna uma conquista única. Tire uma foto, marque sua presença no aplicativo e ganhe suas medalhas. Quanto mais lugares você visitar, mais medalhas você ganha!</p>
        <h3>Baixe agora e comece a sua jornada de turismo com uma dose extra de diversão e recompensas!</h3>
    </div>
    <div><Botao texto="Baixe o app"/></div>
    <div className="containermedalhas">
        <h2>Medalhas disponiveis</h2>
    </div>
    <ListContainer>
      <MedalhaCard src=""/>
      <MedalhaCard src=""/>
      <MedalhaCard src=""/>
      <MedalhaCard src=""/>
      <MedalhaCard src=""/>
      <MedalhaCard src=""/>
      <MedalhaCard src=""/>
      <MedalhaCard src=""/>
    </ListContainer>
    <div><Botao texto="Baixe o app"/></div>
    </Base>
  )
}

export default Gameficacao;