import { MedalhaArticle } from "./Style"

const MedalhaCard = ({nome, imagem}) => {

  return(
    <MedalhaArticle>
      <div className="medalha"> 
        <img src={`${process.env.PUBLIC_URL}${imagem}`} />
      </div>
      <div className="medalha-name">
        <h3>{nome}</h3>
      </div>
    </MedalhaArticle>
  )
}

export default MedalhaCard;