import { PasseioArticle } from "./Style"
import PasseioRedirect from "../PasseioRedirect/PasseioRedirect";

const PasseioCard = ({nome, local, dia, mes, hora, key, descricao, guia, valor, imagem, passeioId}) => {
  /*const handleCardClick = (event) => {
    const cardElement = event.target.closest(".passeio-card");
    if (cardElement) {
      const key = cardElement.dataset.key;
      window.location.href = `/passeio/${key}`;
    }
  }; */
  
  return(
    <PasseioArticle>
      <div className="cardPasseio" onClick={() => window.location.href = `/#/passeios/${passeioId}`}>
        <figure>
        <h2>
          <span id="dia">{dia}</span>
          <span id="mes">{mes}</span>
        </h2>
          <img src={`${process.env.PUBLIC_URL}${imagem}`}/>
        </figure>
        <h3>{nome}</h3>
        <ul>
            <li>{local}</li>
            <li><span>Hora: </span>{hora}</li>
            <li>{valor}</li>
        </ul>
      </div>
    </PasseioArticle>
  )
}

export default PasseioCard;