import { PasseioDestaque, CardPasseio } from "./Style"

import { register } from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react'

const PasseiosDestaque= () => {

  const passeiosDestaque = [
    {id: '1', imagem: 'imagens/passeios/fujidudez-pdjyHZBwG7s-unsplash.jpg'},
    {id: '2', imagem: 'imagens/passeios/nathana-reboucas-tx8TZernPi8-unsplash.jpg'},
    {id: '3', imagem: 'imagens/passeios/mauro-lima-eOhs5ZoJLW4-unsplash.jpg'},
    {id: '4', imagem: 'imagens/passeios/thales-botelho-de-sousa-9e0dAX1bUsA-unsplash.jpg'},
  ]

  return(
    <PasseioDestaque>
      <Swiper 
      spaceBetween={10}
      slidesPerView={2}
      pagination= {{clickable: true}}
      navigation>
        {passeiosDestaque.map((e) =>(
            <SwiperSlide key={e.id}> 
              <CardPasseio
                src={e.imagem}
                alt="Imagem do destaque"
                className="slide-item"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </PasseioDestaque>
  )
}

export default PasseiosDestaque;
