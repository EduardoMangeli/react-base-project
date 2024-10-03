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
     Botafogo é bairro :0
     <p>Titulos Internacionais do Mengão: 
     Mundial interclubes - 1981,
     Taça Libertadores da América - 1981, 2019 e 2022 (invicto),
     Copa Mercosul - 1999,
     Copa Ouro Sul-americana - 1996 (invicto) e
     Recopa Sul-Americana - 2020.
     </p>
     <p>Titulos Nacionais e Interestaduais do Mengão:
     Campeonato Brasileiro (8 títulos) - 1980, 1982, 1983, 1987, 1992, 2009, 2019 e 2020,
     Copa do Brasil - 1990 (invicto), 2006, 2013 e 2022,
     Supercopa do Brasil - 2020 e 2021,
     Torneio Rio-São Paulo - 1940 e 1961,
     Copa dos Campeões Regionais - 2001,
     Copa dos Campeões Mundiais - 1997 (invicto),
     Taça dos Campeões Estaduais - 1956,
     Taça dos Campeões Brasileiros - 1992 e
     Torneio do Povo - 1972.
     </p>
      </h1>
    </Base>
  )
}

export default Home