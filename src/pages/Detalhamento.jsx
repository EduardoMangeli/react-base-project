import React from "react";
import Base from "./Base";
import Bloco from "../components/BlocoDBF/Bloco";
import PersoDetalhes from "../components/DetalhamentoPerso/DetalhamentoPerso";

function Detalhamento() {
    return (
    <Base>
        <Bloco />
        <PersoDetalhes/>
    </Base>
    );
  }
  
  export default Detalhamento;