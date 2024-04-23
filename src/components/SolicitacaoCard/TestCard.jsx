import {Solicit} from "./Style";

const SolicitacaoCard = (props) => (
    <Solicit>
        <div className="nome">
            <button className="button">Acessar</button>
            <div id='tipo'>
                <p>ID: {props.id}</p>
                <p>User: {props.cliente}</p>
                <p>Data da solicitação: {props.data}</p>
            </div>
        </div>
    </Solicit>
);

export default SolicitacaoCard;