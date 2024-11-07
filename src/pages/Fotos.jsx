import { useEffect, useState } from "react";
import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import brutos from "../data/computadores.json";
import Protegida from "./Protegida";
import { useSearchParams } from "react-router-dom";

const Fotos = () => {
 const [dados,setDados]= useState(brutos);
 const[dadosfiltrados,setdadosfiltrados] = useState(brutos);
 const[parametros,setParametros] = useSearchParams();

 const pesquisar = (entrada) => {
  setDados(brutos.filter(
    (ele)=>{
    return ele.nome.includes(entrada) || ele.link_original.includes(entrada);
    }
  ))
 }

 useEffect(() => {
  if(parametros.has('chave')){
    setdadosfiltrados(dadosfiltrados.filter(
      (ele) => ele.id ==parametros.get('chave')
    ))
  }else{
    setdadosfiltrados(brutos)
  }
 },[parametros])

  return (
      <Protegida>
        <input type="text" placeholder="filtro" onChange={(e)=>pesquisar(e.target.value)}/>
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
      </Protegida>      
 )
};

export default Fotos;