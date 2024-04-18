import Base from "./Base"
import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";

const Mapa = () => {

  return (
    <Base>
      <Banner/>
      <div><Botao texto="Baixe o app"/></div>
      <div className="containerMapa">
        <h1>
            Aqui vai ficar o mapa
        </h1>
      </div>
    </Base>
  )
}

export default Mapa;
