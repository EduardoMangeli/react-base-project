import Base from "./Base"
import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import Mapa from "../components/Mapa/Mapa";
import { StyleMapa } from "../components/Mapa/StylePage";
import { useState } from "react";
import pontosInteresse from "../data/pontosInteresse.json";
import { useTranslation } from "react-i18next";
import Popup from "../components/Popup/Popup";

const PageMapa = () => {
  const { t } = useTranslation();
  
  const [zonaSelecionada, setZonaSelecionada] = useState("Sul");
  const [pontos, setPontos] = useState(pontosInteresse);

  const filtrarPorZona = (zona = null) => {
    setZonaSelecionada(zona);
    setPontos(zona ? pontosInteresse.filter((ponto) => ponto.zona === zona) : pontosInteresse);
  }; 

  const[buttonPopup, setButtonPopup] = useState(false);

  return (
    <Base>

      <Banner titulo={t("Mapa")} imagem={"imagens/heroHome.png"} />

      <StyleMapa>
        <div className="Texto">
          <div className="titulo-mapa">
            <h3>{t('Explore o Rio de Janeiro com ele na palma da sua mão')}</h3>
          </div>

          <div className="texto-mapa">
            <p>
              {t('Se você quer conhecer um pouco mais da história do Rio caminhando por suas ruas, vielas e avenidas, você chegou ao lugar certo!')}
            </p>

            <p>{t('Aqui você encontra informações sobre mais de 1200 pontos culturais da cidade para programar a sua visita. Você pode estudá-los antes de sair de casa, ou então, se estiver caminhando pela rua e se deparar com algum edifício histórico ou ponto relevante da cidade, clicar no ícone e saber mais sobre ele.')}
            </p>

            <p>{t('A função de “geolocalização” está disponível, portanto, conseguirá interagir com alguns dos pontos registrado no aplicativo Passeio Carioca, você terá todas as informações disponíveis.')} </p>
          </div>
        </div>

        <div className="Foto-Mapa">
          <img src="imagens/FotoMapaCelular-PasseioCarioca.png"/>
        </div>

      </StyleMapa>
      
      <div className="titulo-mapa">
          <h3>{t('Aqui alguns dos pontos que pode encontrar no app')}</h3>
        </div>
        
      {/*<div className="botao-filtro">
        <button onClick={() => filtrarPorZona()}>Todos</button>
        <button onClick={() => filtrarPorZona("Centro")}>Centro</button>
        <button onClick={() => filtrarPorZona("Norte")}>Norte</button>
        <button onClick={() => filtrarPorZona("Sul")}>Sul</button>
        <button onClick={() => filtrarPorZona("Oeste")}>Oeste</button>
      </div>*/}

      <div className="containerMapa">
         <Mapa pontos={pontos} />
      </div>

      <div className="titulo-baixar-app">
          <h3>{t('Conheca mais sobre os pontos no App Passeio Carioca')}</h3>
      </div>

      <div  className="botoes" onClick={()=> setButtonPopup(true)}><Botao texto={t("Baixe o app")}/></div>
        <Popup trigger={buttonPopup} position="center" modal setTrigger={setButtonPopup}>
        </Popup>

    </Base>
  );
};

export default PageMapa;
