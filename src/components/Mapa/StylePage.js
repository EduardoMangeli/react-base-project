import styled from 'styled-components'

const StyleMapa = styled.article`

    .botao-filtro{
        display: flex;
        justify-content: center;
        gap: 5px;
        padding: 5px;
    }

    .botao-filtro button{
        background-color: var(--primaria);
        color: var(--destaque);
        border-radius: 1em;
        height: 40px;
        width: 60px;
        border: none;
        outline:none;
        &:hover{
            background-color: var(--secundaria);
        }
    }
`;


export {StyleMapa}