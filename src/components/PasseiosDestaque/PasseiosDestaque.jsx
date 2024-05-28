import { PasseioDestaque, CardPasseio, Titulo, Local, Descricao } from "./Style"
import { useState } from "react";
import { Link } from "react-router-dom";

const PasseiosDestaque= (props) => {

  const [ShowText, setShowText]= useState(false)
  return(
      <PasseioDestaque>
            <CardPasseio>
              <Titulo
              mostrar={ShowText? ShowText.toString(): undefined}
              >
                {props.titulo}</Titulo>
              <Local mostrar={ShowText? ShowText.toString(): undefined}>{props.local}</Local>
              <Descricao mostrar={ShowText? ShowText.toString(): undefined}>{props.descricao}</Descricao>
              <img 
              onMouseOver={() => setShowText(true)}
              onMouseLeave={() =>setShowText(false)}
              src={props.imagem}/>
            </CardPasseio>
      </PasseioDestaque>
  )
}

export default PasseiosDestaque;
