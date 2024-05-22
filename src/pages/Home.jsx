import Base from "./Base"
import Botao from "../components/Botao/Botao";
import HomeCard from "../components/HomeCard/HomeCard";
import PasseiosDestaque from "../components/PasseiosDestaque/PasseiosDestaque";
import SectionsApp from  "../components/SectionsApp/SectionsApp"; 
import passeio from "../data/passeios.json"

import { register } from 'swiper/element/bundle'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import Popup from "../components/Popup/Popup";
import { useState } from 'react';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper/modules";

import '../utils/i18n'
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const[buttonPopup, setButtonPopup] = useState(false);

  return (
    <Base>
      <HomeCard
      titulo={t('Baixe o App Passeio Carioca !!')}
      texto={t('O melhor app de passeios do Rio de Janeiro!')}
      pl={t('Plataformas Disponíveis')}/>

      {/*<h2 className="texto-destaque">{t('Passeios da Passeio Carioca')}</h2>
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
        </Swiper>*/}

      <h2 className="texto-destaque">{t('Conheça a Passeio Carioca')}</h2>
      <SectionsApp 
      titulo={t("Passeios guiados")}
      texto={t("Explore a cidade com nossos passeios guiados personalizados. Nossos guias turísticos experientes o levarão a uma jornada única, compartilhando histórias fascinantes e segredos bem guardados dos pontos turísticos mais icônicos da cidade.")}
      imagem="imagens/passeios/raphael-souza-4y0N7sIPaTc-unsplash.jpg"
      align="right"
      link={"/passeios"}/>

      <SectionsApp 
      titulo={t("Gameficação")}
      texto={t("Transforme sua experiência de turismo em uma aventura emocionante! Explore os pontos turísticos incríveis da cidade e colecione medalhas digitais ao longo do caminho. Com nossa funcionalidade de gamificação, cada lugar que você visita se torna uma conquista única. Tire uma foto, marque sua presença no aplicativo e ganhe suas medalhas. Quanto mais lugares você visitar, mais medalhas você ganha!")}
      imagem="imagens/old-computer-3.jpg"
      align="left"
      link={"/gameficacao"}/>

      <SectionsApp 
      titulo={t("Mapa Geolocalizado")}
      texto={t("Descubra a cidade como nunca antes com nosso mapa geolocalizado. Explore pontos de interesse ao redor de você e mergulhe na história de cada local. Clique nos pins do mapa para ler sobre a história do local, curiosidades interessantes e dicas exclusivas de nossos especialistas locais.")}
      imagem="imagens/FotoMapaApp-PasseioCarioca.png"
      align="right"
      link={"/mapa"}/>

      <div onClick={()=> setButtonPopup(true)}><Botao texto={t("Baixe o app")}/></div>
        <Popup trigger={buttonPopup} position="center" modal setTrigger={setButtonPopup}>
        </Popup>
    </Base>
  )
}

export default Home;