import {Test} from "./Style";

const TestCard = (props) => (
    <Test>
        <div className="nome">
            <h1>
                <span>{props.id}</span>
                <span>{props.cliente}</span>
            </h1>

            <p id='tipo'>{props.tipo_exame}</p>

            <p id='info'>
                <span>{props.data}</span>
                <span>{props.status}</span>
            </p>
        </div>
    </Test>
);

export default TestCard;