import { MedalhaArticle } from "./Style"

const MedalhaCard = ({nome, imagem}) => {

  return(
    <MedalhaArticle>
    <figure>
        <img src={`${process.env.PUBLIC_URL}${imagem}`} />
    </figure>
    <h3>{nome}</h3>
    </MedalhaArticle>
  )
}

export default MedalhaCard;