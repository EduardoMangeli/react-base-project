import styled from "styled-components";

const SecaoGenericoStyle = styled.article`
    background-color: var(--detalhe);
    border-radius: 100px;
    height: 100%;

    div.header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        margin-left: 3em;
        margin-right: 3em;
    }
   
    div.secao{
        color: var(--secundaria);
        text-align: center;
        font-size: larger;
        font-weight: bold;
        padding: 10px;
    }
`;

export {SecaoGenericoStyle};