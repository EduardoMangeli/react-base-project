import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import MeuBotao from "../components/MeuBotao/MeuBotao";

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
     Aplicação React Base
      </h1>
      <p> Essa é uma aplicação de exemplo feita durante a aula.</p>
      <MeuBotao />
    </Base>
  )
}

export default Home