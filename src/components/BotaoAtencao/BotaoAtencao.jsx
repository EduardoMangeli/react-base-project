import {BotaoAtencaoStyle} from "./Style";

const BotaoAtencao = (props) => (
    <BotaoAtencaoStyle>
        <button
            onClick={props.onClick}
        >
            {props.text}
        </button>
    </BotaoAtencaoStyle>
);

export default BotaoAtencao;