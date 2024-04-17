import { MedalhaArticle } from "./Style"

const MedalhaCard = (props) => {

  return(
    <MedalhaArticle>
    <figure>
        <img src={props.src} />
        <figcaption dangerouslySetInnerHTML={{__html:props.agradecimento}}/>
    </figure>

    <h3>Medalha</h3>
    </MedalhaArticle>
  )
}

export default MedalhaCard;