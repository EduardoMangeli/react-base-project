import { Section } from "./Style";
import Mapa from "../Mapa/Mapa";
import { useState } from "react";
import pontosInteresse from "../../data/pontosInteresse.json";
import { useTranslation } from "react-i18next";

const SectionMapa = () => {

    const { t } = useTranslation();

    const [pontos, setPontos] = useState(pontosInteresse);

    return (
        <Section>
            <main className="mapa">
                <section className="text">
                    <h2 className="section-title">{t('Mapa Geolocalizado')}</h2>
                    <h3 className="section-subtitle">{t('Explore o Rio de Janeiro com ele na palma da sua mão')}</h3>
                    <div className="section-text">
                        <p>
                            {t('Se você quer conhecer um pouco mais da história do Rio caminhando por suas ruas, vielas e avenidas, você chegou ao lugar certo! Aqui você encontra informações sobre mais de 1200 pontos culturais da cidade para programar a sua visita. A função de “geolocalização” está disponível, portanto, conseguirá interagir com alguns dos pontos registrado no aplicativo Passeio Carioca, você terá todas as informações disponíveis.')} 
                            </p>
                    </div>
                </section>
            </main>
        </Section>
    )
}

export default SectionMapa;