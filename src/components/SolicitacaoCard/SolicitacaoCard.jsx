import {Solicit} from "./Style";
import {Link} from "react-router-dom";

const SolicitacaoCard = (props) => (
    <Solicit>
        <div id='navbar'>
            <Link to={props.link}>
                <button className="button">Acessar</button>
            </Link>
        </div>
        <div id='tipo'>
            <span>ID: {props.id}</span>
            <span>User: {props.cliente}</span>
            <span>Data: {props.data}</span>
        </div>
    </Solicit>
);

export default SolicitacaoCard;