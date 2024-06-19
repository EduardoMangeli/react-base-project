import {Card} from "./Style";

const UsuariosCard = (props) => (
    <Card>
        <div id='tipo'>
            <div className="container-card">
            <i class="fa-solid fa-user"></i>
                <div class='ID'>{props.id}</div>
            </div>
            <div>Cargo:</div>
            <div>{props.Cargo}</div>
            <button id = "btncard">Modificar</button>
        </div>
    </Card>
);

export default UsuariosCard;