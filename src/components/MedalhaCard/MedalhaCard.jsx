import { MedalhaArticle } from "./Style"

const MedalhaCard = ({nome, imagem}) => {

  return(
    <MedalhaArticle>
    <img src={`${process.env.PUBLIC_URL}${imagem}`} />
    <h3>{nome}</h3>
    </MedalhaArticle>
  )
}

export default MedalhaCard;