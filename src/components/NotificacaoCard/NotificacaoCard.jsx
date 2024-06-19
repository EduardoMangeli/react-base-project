import {Card} from "./Style";

const NotificacaoCard = (props) => (
    <Card>
        <div id='tipo'>
            <div class='ID'>Cliente: {props.id}</div>
            <div class= 'Desc'>Descrição:</div>
            <div>{props.Descrição}</div>
            <button id = "btncard">Acessar</button>
        </div>
    </Card>
);

export default NotificacaoCard;