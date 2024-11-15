import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Bloco from "../components/BlocoDBF/Bloco";
import Cards from "../components/Cards/Cards"

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
      <div className="HeaderA">
        <Bloco />
      </div>
      <div className="Card">
        <Cards />
      </div>
      
    </Base>
  )
}

export default Home
