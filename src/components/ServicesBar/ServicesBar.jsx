import { Bar } from "./Style.js"

const ServicesBar = () => (
<Bar>
    <div classname="div-bar"></div>
    <div className="div-botoes">    
    <h2>Serviços: |</h2>
        <button class="btn-bar selecionado">Dosimetria Clínica</button>
        <button class="btn-bar">Dosimetria Pré-Clínica</button>
        <button class="btn-bar">Radiosinoviortese</button>
        <button class="btn-bar">Segmentação</button>
    </div>
</Bar>
);

export default ServicesBar;