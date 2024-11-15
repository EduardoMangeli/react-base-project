import { useEffect, useState } from "react";
import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import brutos from "../data/computadores.json";
import Protegida from "./Protegida";

const Fotos = () => {
  const [dados, setDados] = useState(brutos);
  
  const filtra = (entrada) => {
  setDados(dados.filter(
    (ele) => ele.nome.includes(entrada)
  ))
  }
 
  return (
      <Protegida>
        <input 
        type= "text" 
        placeholder= "filtro"
        onChange={ (e) => filtra(e.target)} />
        <ListContainer>
          {dados.map(
            (el, index) => (
              <FotoCard 
                key={index}
                titulo={el.nome}
                src={`${process.env.PUBLIC_URL}${el.url}`}
                link_original={el.link_original}
                agradecimento={el.agradecimento}
              />
              )
          )}
          </ListContainer>
      </Protegida>      
 )
};

export default Fotos;