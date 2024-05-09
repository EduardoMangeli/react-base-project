import styled from "styled-components";

const SecaoInfoStyle = styled.article`

    span{
        font-size: 4rem;
        font-weight: bold;
    }
    
    button{
        font-size: 2rem;
        font-weight: bold;
        padding: 10px;
        border-radius: 10px;
        background-color: #023859FF;
        color: white;
        border: none;
    }
    
    #circulo-laranja{
        width: 20px;
        height: 20px;
        background-color: #FFA500;
        border-radius: 50%;
    }
    
    #circulo-verde{
        width: 20px;
        height: 20px;
        background-color: #008000;
        border-radius: 50%;
    }
    
    .container{
        display: grid;
        grid-template-areas:
            "tipo"
            "aberto"
            "fechado"
            "setas"
        ;
        grid-template-rows: 0.5fr 2fr 2fr 1fr;
        gap: 1px;
    }
    
    .tipo{
        grid-area: tipo;
    }
    
    .aberto{
        grid-area: aberto;
    }
    
    .fechado{
        grid-area: fechado;
    }
    
    .fechado, .aberto{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
`;

export {SecaoInfoStyle};