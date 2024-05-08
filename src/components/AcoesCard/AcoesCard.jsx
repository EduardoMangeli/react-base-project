import {Acoes} from "./Style";

const AcoesCard = (props) => (
    <Acoes>
        <div>
        <span>{props.id}</span>
        <span>Alterado: {props.status}</span>
        </div>
    </Acoes>

)