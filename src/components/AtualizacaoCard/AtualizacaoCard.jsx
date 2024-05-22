import { AtualizacaoCardStyle } from "./Style";

const AtualizacaoCard = (props) => (
  <AtualizacaoCardStyle>
    <div className="container">
        <div className="icone">
            {props.icone}
        </div>
        <div className="id">
            {props.id}
        </div>
        <div className="acao">
            {props.acao}
        </div>
        <div className="tempo">
            {props.tempo}
        </div>
        <div className="linha">

        </div>
    </div>
  </AtualizacaoCardStyle>
)

export default AtualizacaoCard;