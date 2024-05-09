import {Card} from "./Style";

const UsuariosCard = (props) => (
    <Card>
        <div id='tipo'>
            <div class='ID'>ID: {props.id}</div>
            <div>Descrição: {props.Descrição}</div>
            <div>Cargo: {props.Cargo}</div>
        </div>
    </Card>
);

export default UsuariosCard;