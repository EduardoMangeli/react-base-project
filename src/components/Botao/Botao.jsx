import {BotaoStyle} from "./Style";

const Botao = (props) => (
    <BotaoStyle>
        <button
            style={{
                backgroundColor: props.isActive ? '#023859' : 'white',
                color: props.isActive ? 'white' : '#023859'
            }}

            onClick={props.onClick}
        >
            {props.text}
        </button>
    </BotaoStyle>
);

export default Botao;