import {FilterButtonStyle} from "./Style";

const Botao = (props) => (
    <FilterButtonStyle>
        <button
            style={{
                backgroundColor: props.isActive ? '#023859' : 'white',
                color: props.isActive ? 'white' : '#023859'
            }}

            onClick={props.onClick}
        >
            {props.text}
        </button>
    </FilterButtonStyle>
);

export default Botao;