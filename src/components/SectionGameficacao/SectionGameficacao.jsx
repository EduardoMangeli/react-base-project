import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import MedalhaCard from "../MedalhaCard/MedalhaCard";
import medalha from "../../data/medalhas.json"
import { useTranslation } from "react-i18next";
import { Section } from "./Style";

const SectionGameficacao = () => {

    const { t } = useTranslation();

    return (
        <Section>
            <main className="gameficacao">
                <section className="text">
                    <h2 className="section-title">
                        {t('Gameficação')}
                    </h2>
                    <h3 className="section-subtitle">
                        {t('Descubra o turismo de uma maneira nova com o nosso aplicativo!')}
                    </h3>
                    <div className="section-text">
                        <p>
                            {t('Explore os pontos turísticos incríveis da cidade e colecione medalhas digitais ao longo do caminho. Com nossa funcionalidade de gamificação, cada lugar que você visita se torna uma conquista única. Tire uma foto, marque sua presença no aplicativo e ganhe suas medalhas. Quanto mais lugares você visitar, mais medalhas você ganha!')}
                        </p>
                    </div>
                </section>
                <Swiper 
                    modules={[EffectCards, Navigation]}
                    effect={'cards'}
                    grabCursor={true}
                    navigation
                    className="cardSwiper"
                    >
                    {medalha.map((e, index) =>(
                        <SwiperSlide key={index}> 
                        <MedalhaCard 
                            nome={e.nome}
                            imagem={e.imagem}
                        />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </main>
        </Section>
    )
}

export default SectionGameficacao;
    