import styled from "styled-components";

const BotaoAtencaoStyle = styled.div`
    button {
        background-color: #b44f4f;
        color: white;
        padding: 15px;
        border-radius: 10px;
        width: 200px;
        height: 50px;
        font-weight: bold;
        border: none;
    }

    button:hover {
        background-color: #771515;
        color: white;
    }

    button:active {
        background-color: #e51515;
        color: white;
    }
`;

export {BotaoAtencaoStyle};
