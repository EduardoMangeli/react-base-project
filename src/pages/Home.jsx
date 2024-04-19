import Base from "./Base"
import Botao from "../components/Botao/Botao";
import Banner from "../components/Banner/Banner";

const Home = () => {

  return (
    <Base>
    <Banner/>
      <h1>
     Passeio Carioca
     <div><Botao texto="Baixe o app"/></div>
      </h1>
      <h2>Conheca o app!</h2>

      <div className="adTexto">
        <p>No Passeio Carioca, cada passo é uma nova descoberta e cada descoberta merece reconhecimento. À medida que você explora os encantos do Rio e completa os circuitos ao realizar checkins, você ganha medalhas exclusivas. Essas medalhas não são apenas símbolos de suas aventuras, mas também chaves que podem desbloquear recompensas únicas e ofertas especiais. Quanto mais você explora, mais você ganha. Pronto para começar sua coleção?</p>
      </div>

      <div id="adPasseio">
        <h2>Passeios</h2>
        <p>Texto explicativo Passeios...</p>
        <img src=""/>
      </div>

      <div id="adGameficacao">
        <h2>Gameficacao</h2>
        <p>Texto explicativo Gameficacao...</p>
        <img src=""/>
      </div>

      <div id="adMapa">
        <h2>Mapa</h2>
        <p>Texto explicativo Mapa...</p>
        <img src=""/>
      </div>

      </Base>
  )
}

export default Home;