import { MembroArticle } from "./Style"

const MembroCard = ({nome, imagem, descricao}) => {
  return(
    <li>
      <MembroArticle>
        <figure>
            <img src={`${process.env.PUBLIC_URL}${imagem}`} />
        </figure>
        <h3>{nome}</h3>
        <p>{descricao}</p>
      </MembroArticle>
    </li>
  )
}

export default AboutCard;
