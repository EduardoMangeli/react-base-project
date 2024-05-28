import { PasseioDestaque, CardPasseio, Titulo, ProxSaida } from "./Style"
import { useState } from "react";
import { Link } from "react-router-dom";

const PasseiosDestaque= (props) => {

  const [ShowText, setShowText]= useState(false)
  return(
    <Link to="/passeios">
      <PasseioDestaque>
            <CardPasseio>
              <Titulo
              mostrar={ShowText? ShowText.toString(): undefined}
              >
                {props.titulo}</Titulo>
              <ProxSaida mostrar={ShowText? ShowText.toString(): undefined}>{props.local}</ProxSaida>
              <img 
              onMouseOver={() => setShowText(true)}
              onMouseLeave={() =>setShowText(false)}
              src={props.imagem}/>
            </CardPasseio>
      </PasseioDestaque>
    </Link>
  )
}

export default PasseiosDestaque;
