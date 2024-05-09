import { PasseioArticle } from "./Style"

const PasseioCard = ({nome, local, data, hora, descricao, guia, valor, imagem}) => {

  return(
    <PasseioArticle>
      <figure>
      <h2>{data}</h2>
        <img src={`${process.env.PUBLIC_URL}${imagem}`}/>
      </figure>
      <h3>{nome}</h3>
      <ul>
          <li>{local}</li>
          <li>{hora}</li>
          <li>{valor}</li>
      </ul>
    </PasseioArticle>
  )
}

export default PasseioCard;