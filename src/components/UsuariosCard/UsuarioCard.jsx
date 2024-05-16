import {Card} from "./Style";

const UsuariosCard = (props) => (
    <Card>
        <div id='tipo'>
            <div className="container-card">
            <i class="fa-solid fa-user"></i>
                <div class='ID'>{props.id}</div>
            </div>
            <div>Descrição: {props.Descrição}</div>
            <div>Cargo: {props.Cargo}</div>
        </div>
    </Card>
);

export default UsuariosCard;