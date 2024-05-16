import {Card} from "./Style";

const AcoesCard = (props) => (
    <Card>
        <div id='tipo'>
            <div className="container-card">
            <div class='ID'>{props.id}</div>
            <i class="fa-solid fa-clock"></i>
            <div id = "datadiv">Data: {props.tempo}</div>
            <div className="icon">
            <i class="fa-regular fa-pen-to-square"></i>
            </div>
            </div>
            <div>{props.status}</div>
            
        </div>
    </Card>
);

export default AcoesCard;