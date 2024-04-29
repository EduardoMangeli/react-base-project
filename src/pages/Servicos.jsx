import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import dados from "../data/computadores.json";
import Base from "./Base"
import Protegida from "./Protegida";
import ServicesBar from "../components/ServicesBar/ServicesBar.jsx"

const Fotos = () => {
 
  return (
    <Base>
    <ServicesBar>
    </ServicesBar>
    <section class="container-pai">
      <div class="container-menor"></div>
      <div class="container-botoes">
      </div>
    </section>
    </Base>
    )
};

export default Fotos;