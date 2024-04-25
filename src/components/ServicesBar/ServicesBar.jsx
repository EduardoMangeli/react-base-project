import { Bar } from "./Style.js"
import { Link } from "react-router-dom";

const ServicesBar = () => (
<Bar>
    <div classname="div-bar"></div>
    <div className="div-botoes">    
    <h2>Serviços: |</h2>
        <a>Dosimetria Clínica</a>
        <a>Dosimetria Pré-Clínica</a>
        <a>Radiosinoviortese</a>
        <a>Segmentação</a>
    </div>
</Bar>
);

export default ServicesBar;