import Base from "./Base"
import Botao from "../components/Botao/Botao";
import Banner from "../components/Banner/Banner";
import HomeCard from "../components/HomeCard/HomeCard";
import PasseioDestaque from "../components/PasseiosDestaque/PasseioDestaque";
import SectionsApp from  "../components/SectionsApp/SectionsApp"; 

const Home = () => {

  return (
    <Base>
      <HomeCard
      titulo="Baixe o Passeio Carioca !!"
      texto="No Passeio Carioca, cada passo é uma nova descoberta e cada descoberta merece reconhecimento. À medida que você explora os encantos do Rio e completa os circuitos ao realizar checkins, você ganha medalhas exclusivas. Essas medalhas não são apenas símbolos de suas aventuras, mas também chaves que podem desbloquear recompensas únicas e ofertas especiais. Quanto mais você explora, mais você ganha. Pronto para começar sua coleção?"/>

      <h2>Passeios em destaque</h2>
      <PasseioDestaque/>

      <h2>Conheca o app</h2>
      <SectionsApp 
      titulo="Passeios guiados"
      texto="Explore a cidade com nossos passeios guiados personalizados. Nossos guias turísticos experientes o levarão a uma jornada única, compartilhando histórias fascinantes e segredos bem guardados dos pontos turísticos mais icônicos da cidade."
      imagem="imagens/passeios/raphael-souza-4y0N7sIPaTc-unsplash.jpg"
      align="right"/>

      <SectionsApp 
      titulo="Gameficação"
      texto="Transforme sua experiência de turismo em uma aventura emocionante! Explore os pontos turísticos incríveis da cidade e colecione medalhas digitais ao longo do caminho. Com nossa funcionalidade de gamificação, cada lugar que você visita se torna uma conquista única. Tire uma foto, marque sua presença no aplicativo e ganhe suas medalhas. Quanto mais lugares você visitar, mais medalhas você ganha!"
      imagem="imagens/old-computer-3.jpg"
      align="left"/>

      <SectionsApp 
      titulo="Mapa Geolocalizado"
      texto="Descubra a cidade como nunca antes com nosso mapa geolocalizado. Explore pontos de interesse ao redor de você e mergulhe na história de cada local. Clique nos pins do mapa para ler sobre a história do local, curiosidades interessantes e dicas exclusivas de nossos especialistas locais."
      imagem="imagens/old-computer-4.jpg"
      align="right"/>

      <div><Botao texto="Baixe o app" /></div>
    </Base>
  )
}

export default Home;