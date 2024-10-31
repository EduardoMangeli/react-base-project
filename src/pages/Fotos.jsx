import { useParams } from "react-router-dom";
import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import dados from "../data/computadores.json";
import Protegida from "./Protegida";
import { useEffect, useState} from "react";
import Base from "./Base";
import brutos from "../data/computadores.json";

const Fotos = () => {
  const [dados, setDados] = useState(brutos);

const filtro = (entradas) => {
    setDados(brutos.filter(
            (ele) => ele.nome.includes(entradas) || ele.link_original.includes(entradas)
           ))
}
 
  return (
      <Base>
      <input type="text"
        onChange={(e) => filtro(e.target.value)}
      />
        <ListContainer>
          {dados.map(
            (el, index) => (
              <FotoCard 
                key={index}
                titulo={el.nome}
                src={`${process.env.PUBLIC_URL}/${el.url}`}
                link_original={el.link_original}
                agradecimento={el.agradecimento}
              />
              )
          )}
          </ListContainer>
      </Base>      
 )
};

export default Fotos;