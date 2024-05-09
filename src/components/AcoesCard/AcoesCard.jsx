import {Card} from "./Style";

const AcoesCard = (props) => (
    <Card>
        <div id='tipo'>
            <span>ID: {props.id}</span>
            <span>User: {props.status}</span>
            <span>Data: {props.tempo}</span>
        </div>
    </Card>
);

export default AcoesCard;