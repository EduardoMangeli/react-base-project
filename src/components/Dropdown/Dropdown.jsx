import { Button } from './Style'

const Dropdown = () => (

<Button>
  <div class="dropdown">
    <span>Serviços</span>
    <div class="dropdown-options">
      <a href="/clinica">Dosimetria Clinica</a>
      <a href="/dosimetriapreclinica">Dosimetria Pré-Clinica</a>
      <a href="/modelagem">Modelagem Computacional</a>
      <a href="/radiosinoviortese">Radiosinoviortese</a>
      <a href="/segmentacaoequantificacao">Segmentação e Quantificação</a>
    </div>
  </div>
</Button>
    
)

export default Dropdown;