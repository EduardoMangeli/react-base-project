import { HomePageHead } from "./Style";
import Botao from "../Botao/Botao";

const HomeCard = ({titulo, texto}) => {

    return(
      <HomePageHead>
      <div className="container">
        <div className="text-container">
          <h1>{titulo}</h1>
          <p>{texto}</p>
          <div><Botao texto="Baixe o app" /></div>
        </div>
        <div className="img-container">
          <img src="imagens/PasseioCariocaLogoBranco.svg" alt="Logo"/> 
        </div>
      </div>
    </HomePageHead>
    )
  }
  
  export default HomeCard;