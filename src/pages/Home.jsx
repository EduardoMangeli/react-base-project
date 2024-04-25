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
      <h3>Dashboard |</h3>
      <div class="retanguloCinza">
        <div class="retanguloBranco1Home"></div>
        <div className="container-234">
          <div class="retanguloBranco2Home"></div>
          <div className="container-34">
            <div class="retanguloBranco3Home"></div>
            <div class="retanguloBranco4Home"></div>
        </div>
        </div>
        <div class="retanguloBranco5Home"></div>
      </div>
    </Base>
  )
}

export default Home