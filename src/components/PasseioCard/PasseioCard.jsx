import { PasseioArticle } from "./Style"

const PasseioCard = ({nome, local, dia, mes, hora, descricao, guia, valor, imagem}) => {

  return(
    <PasseioArticle>
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
    </PasseioArticle>
  )
}

export default PasseioCard;