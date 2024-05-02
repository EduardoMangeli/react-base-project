import styled from 'styled-components'

const StyleMapa = styled.article`
    .texto-mapa{
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    }

    .titulo-mapa{
        width: 75%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 0 auto;
    }

    .titulo-baixar-app{
        display: flex;
        justify-content: center;
    }

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