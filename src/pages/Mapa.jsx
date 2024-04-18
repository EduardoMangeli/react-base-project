import Base from "./Base"
import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";

const Mapa = () => {

  return (
    <Base>
      <h1>MAPA</h1>
      <div className="containerMapa">
        <Banner/>
      </div>

      <div><Botao texto="Baixe o app"/></div>
    </Base>
  )
}

export default Mapa;
