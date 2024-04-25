import {Solicit} from "./Style";

const SolicitacaoCard = (props) => (
    <Solicit>
        <div id='navbar'>
            <button className="button">Acessar</button>
        </div>
        <div id='tipo'>
            <span>ID: {props.id}</span>
            <span>User: {props.cliente}</span>
            <span>Data: {props.data}</span>
        </div>
    </Solicit>
);

export default SolicitacaoCard;