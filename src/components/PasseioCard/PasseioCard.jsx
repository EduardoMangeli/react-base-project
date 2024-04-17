import { PasseioArticle } from "./Style"

const PasseioCard = (props) => {

  return(
  <PasseioArticle>
    <figure>
    <date>15/05</date>
      <img src={props.src} />
      <figcaption dangerouslySetInnerHTML={{__html:props.agradecimento}}/>
        
    </figure>
    <h3>Título</h3>
    <ul>
        <li>Local: Av. Rio Branco</li>
        <li>Hora: 13:00</li>
        <li>Valor: R$150,00</li>
    </ul>
  </PasseioArticle>
  )
}

export default PasseioCard;