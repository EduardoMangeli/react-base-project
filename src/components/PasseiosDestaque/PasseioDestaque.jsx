import { PasseioDestaque, CardPasseio, Titulo, ProxSaida } from "./Style"

import { register } from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from "react";

const PasseiosDestaque= () => {

  const passeiosDestaque = [
    {id: '1', imagem: 'imagens/passeios/fujidudez-pdjyHZBwG7s-unsplash.jpg', titulo:'tiulo1', proxsaida:'11/11/1111'},
    {id: '2', imagem: 'imagens/passeios/nathana-reboucas-tx8TZernPi8-unsplash.jpg', titulo:'titulo2', proxsaida:'22/22/2222'},
    {id: '3', imagem: 'imagens/passeios/mauro-lima-eOhs5ZoJLW4-unsplash.jpg', titulo:'titulo3', proxsaida:'33/33/3333'},
    {id: '4', imagem: 'imagens/passeios/thales-botelho-de-sousa-9e0dAX1bUsA-unsplash.jpg', titulo:'titulo4', proxsaida:'44/44/4444'},
  ]
  const [ShowText, setShowText]= useState(false)
  return(
    <PasseioDestaque>
      <Swiper 
      spaceBetween={10}
      slidesPerView={2}
      loop={true}
      autoplay={false}>
        {passeiosDestaque.map((e) =>(
            <SwiperSlide key={e.id}> 
              <CardPasseio
                className="slide-item"
              >
                <Titulo
                mostrar={ShowText? ShowText.toString(): undefined}
                >
                  {e.titulo}/</Titulo>
                <ProxSaida mostrar={ShowText? ShowText.toString(): undefined}>{e.proxsaida}</ProxSaida>
                <img 
                onMouseOver={() => setShowText(true)}
                onMouseLeave={() =>setShowText(false)}
                src={e.imagem}/>
              </CardPasseio>
              
            </SwiperSlide>
          ))}
      </Swiper>
    </PasseioDestaque>
  )
}

export default PasseiosDestaque;
