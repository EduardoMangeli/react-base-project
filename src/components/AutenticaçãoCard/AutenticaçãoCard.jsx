import {Card} from "./Style";

const AutenticaçãoCard = (props) => (
    <Card>
        <div id='tipo'>
            <div class='ID'> {props.id}</div>
            <div>Descrição: {props.Descrição}</div>
            <div>Membros: {props.Membros}</div>
        </div>
    </Card>
);

export default AutenticaçãoCard;