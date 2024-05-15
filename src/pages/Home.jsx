import Base from "./Base"
import Botao from "../components/Botao/Botao";
import HomeCard from "../components/HomeCard/HomeCard";
import PasseiosDestaque from "../components/PasseiosDestaque/PasseiosDestaque";
import SectionsApp from  "../components/SectionsApp/SectionsApp"; 
import passeio from "../data/passeios.json"

import { register } from 'swiper/element/bundle'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper/modules";

const Home = () => {
  const passeiosDestaque = [
    {id: '1', imagem: 'imagens/passeios/fujidudez-pdjyHZBwG7s-unsplash.jpg', titulo:'tiulo1', proxsaida:'11/11/1111'},
    {id: '2', imagem: 'imagens/passeios/nathana-reboucas-tx8TZernPi8-unsplash.jpg', titulo:'titulo2', proxsaida:'22/22/2222'},
    {id: '3', imagem: 'imagens/passeios/mauro-lima-eOhs5ZoJLW4-unsplash.jpg', titulo:'titulo3', proxsaida:'33/33/3333'},
    {id: '4', imagem: 'imagens/passeios/thales-botelho-de-sousa-9e0dAX1bUsA-unsplash.jpg', titulo:'titulo4', proxsaida:'44/44/4444'},
]

  return (
    <Base>
      <HomeCard
      titulo="Baixe o Passeio Carioca !!"
      texto="No Passeio Carioca, cada passo é uma nova descoberta e cada descoberta merece reconhecimento. À medida que você explora os encantos do Rio e completa os circuitos ao realizar checkins, você ganha medalhas exclusivas. Essas medalhas não são apenas símbolos de suas aventuras, mas também chaves que podem desbloquear recompensas únicas e ofertas especiais. Quanto mais você explora, mais você ganha. Pronto para começar sua coleção?"/>

      <h2>Passeios da Passeio Carioca</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        slidesPerView={2}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={true}>
        {passeio.map(
          (e) => (
            <SwiperSlide> 
              <PasseiosDestaque 
                  key={e.id}
                  imagem={e.imagem}
                  titulo={e.nome}
                  local={e.local}
              />
            </SwiperSlide>
          ))}
     </Swiper>

      <h2>Conheça o App Passeio Carioca</h2>
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
      imagem="imagens/FotoMapaApp-PasseioCarioca.png"
      align="right"/>

      <div><Botao texto="Baixe o app" /></div>
    </Base>
  )
}

export default Home;