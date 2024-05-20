import styled from 'styled-components'

const StyleMapa = styled.article`
    display: block;
    padding: 5px;

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

    .Foto-Mapa{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        max-width: 250px
    }

    .Foto-Mapa img{
        width: 100%;
        height: 500px;
    }

    @media screen and (min-width: 1024px){
        display: flex;
        .Texto{
            max-width: 70%;
        }
        .Foto-Mapa {
            max-height: 25%;
            overflow: hidden;
        }
    }
`;


export { StyleMapa }