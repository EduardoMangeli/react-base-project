import Banner from "../components/Banner/Banner";
import Base from "./Base"

const Gameficacao = () => {

  return (
    <Base>
    <div className="container">
      <h1>
        Gameficacao, Se DIVIRTA passeando!!
      </h1>
    </div>
    <div className="adTexto">
        <h3>Descubra o turismo de uma maneira nova com o nosso aplicativo!</h3>
        <p>Explore os pontos turísticos incríveis da cidade e colecione medalhas digitais ao longo do caminho. Com nossa funcionalidade de gamificação, cada lugar que você visita se torna uma conquista única. Tire uma foto, marque sua presença no aplicativo e ganhe suas medalhas. Quanto mais lugares você visitar, mais medalhas você ganha!</p>
        <h3>Baixe agora e comece a sua jornada de turismo com uma dose extra de diversão e recompensas!</h3>
    </div>
    <div className="containerbutao">
        <button>Baixe o App</button>
    </div>
    <div className="containermedalhas">
        <h4>Medalhas disponiveis</h4>
    </div>
    </Base>
  )
}

export default Gameficacao;