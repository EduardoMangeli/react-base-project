import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import Botao from "../components/Botao/Botao";
import Banner from "../components/Banner/Banner";

const Home = () => {

  /* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */
  

  return (
    <Base>
    <Banner/>
      <h1>
     Passeio Carioca
     <div><Botao texto="Baixe o app"/></div>
      </h1>
      <h2>Conheca o app!</h2>

      <div className="adTexto">
        <p>O Aplicativo Passeio Carioca colocará a história dos imóveis do Rio de Janeiro na palma da sua mão. 
        Que a cidade maravilhosa atrai milhões de turistas com suas belezas naturais todo mundo sabe, mas você sabia que o Rio também se destaca no cenário arquitetônico?
        Com casas e prédios dos mais diversos estilos e personalidades, a cidade reúne tesouros arquitetônicos que merecem uma visita física ou virtual.
        E pensando nisso, Rafael Bokor e Renato Bellini se uniram para criar um aplicativo que indicará, por geolocalização, os imóveis, além de estátuas, bares e restaurantes, de interesse turístico e histórico para quem deseja conhecer um novo Rio.
        Passeios guiados serão vendidos por meio do aplicativo que também incluirá uma gameficaçao com medalhas e premiação para os usuários.
        Passeio Carioca, um aplicativo gratuito para Android e IOS, que está em fase final de desenvolvimento e chegará às App Stores nas próximas semanas.
        É o Rio, suas construções e  histórias, na palma da sua mão a qualquer momento.</p>
      </div>

      <div id="adPasseio">
        <h2>Passeios</h2>
        <p>Texto explicativo Passeios...</p>
      </div>

      <div id="adGameficacao">
        <h2>Gameficacao</h2>
        <p>Texto explicativo Gameficacao...</p>
      </div>

      <div id="adMapa">
        <h2>Mapa</h2>
        <p>Texto explicativo Mapa...</p>
      </div>

      </Base>
  )
}

export default Home;