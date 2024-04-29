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
      <h1>BEM VINDO, NOME GENERICO PEDRO</h1>
      <p></p>
      <h2> VOCÊ TEM 7 PENDÊNCIAS!</h2>
      <MeuBotao />
    </Base>
  )
}

export default Home