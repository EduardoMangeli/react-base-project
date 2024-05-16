import {Card} from "./Style";

const AutenticaçãoCard = (props) => (
    <Card>
        <div id='tipo'>
            <div className="container-aut">
            <i class="fa-solid fa-user-group"></i>
            <div class='ID'> {props.id}</div>
            </div>
            <div>Descrição: {props.Descrição}</div>
            <div>Membros: {props.Membros}</div>
            <button id = "btncard">Modificar</button>
        </div>
    </Card>
);

export default AutenticaçãoCard;