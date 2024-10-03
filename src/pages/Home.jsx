import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";

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
    <h1>
      Botafogo de Futebol e Regatas 
    </h1>
    <h2 style={{ textAlign: 'center' }}>
      Hino do time:
    </h2>
    <div className="centralizado">
      <p>
    Botafogo, Botafogo<br />
    Campeão desde 1910<br />
    Foste herói em cada jogo<br />
    Botafogo, por isso é que tu és<br />
    E hás de ser nosso imenso prazer<br />
    Tradições aos milhões tens também<br />
    Tu és o glorioso, não podes perder<br />
    Perder pra ninguém
        
    Em outros esportes, tua fibra está presente<br />
    Honrando as cores do Brasil de nossa gente<br />
    Na estrada dos louros, um facho de luz<br />
    Tua estrela solitária te conduz
        
    Botafogo, Botafogo<br />
    Campeão desde 1910<br />
    Foste herói em cada jogo<br />
    Botafogo, por isso é que tu és<br />
    E hás de ser nosso imenso prazer<br />
    Tradições aos milhões tens também<br />
    Tu és o glorioso, não podes perder<br />
    Perder pra ninguém
        
    Em outros esportes, tua fibra está presente<br />
    Honrando as cores do Brasil de nossa gente<br />
    Na estrada dos louros, um facho de luz<br />
    Tua estrela solitária te conduz
        
    Botafogo, Botafogo<br />
    Campeão desde 1910<br />
    Foste herói em cada jogo<br />
    Botafogo, por isso é que tu és<br />
    E hás de ser nosso imenso prazer<br />
    Tradições aos milhões tens também<br />
    Tu és o glorioso, não podes perder<br />
    Perder pra ninguém<br />
    Em outros esportes, tua fibra está presente<br />
    Honrando as cores do Brasil de nossa gente<br />
    Na estrada dos louros, um facho de luz<br />
    Tua estrela solitária te conduz.
      </p>
    </div>
    </Base>
  );
}

export default Home