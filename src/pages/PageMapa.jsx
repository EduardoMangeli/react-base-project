import Base from "./Base"
import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import Mapa from "../components/Mapa/Mapa";

const PageMapa = () => {

  return (
    <Base>
      <h2>MAPA</h2>
      <div className="containerMapa">
        <Mapa/>
      </div>

      <div><Botao texto="Baixe o app"/></div>
    </Base>
  )
}

export default PageMapa;
