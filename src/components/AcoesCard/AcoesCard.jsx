import {Card} from "./Style";

const AcoesCard = (props) => (
    <Card>
        <div id='tipo'>
            <div class='ID'>ID: {props.id}</div>
            <div>{props.status}</div>
            <div>Data: {props.tempo}</div>
        </div>
    </Card>
);

export default AcoesCard;