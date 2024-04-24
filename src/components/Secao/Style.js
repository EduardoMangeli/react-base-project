import styled from "styled-components";

const Bloco = styled.article`
    background-color: var(--detalhe);
    padding: 20px;
    position: relative;
    margin: 25px;
    border-radius: 100px;
  
    img{
        height: 30px;
    }
    
    div.secao{
        color: var(--secundaria);
        text-align: center;
        font-size: larger;
        font-weight: bold;
        padding: 10px;
    }
    
    div.header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }
    
    div.nav1{
        display: flex;
        align-items: center;
    }
    
    div.nav1 h1{
        margin: 5px;
    }
    
    div.header button {
        border-radius: 15px;
        height: 50px;
        background-color: var(--primaria);
        color: #fff;
        border: none;
        cursor: pointer;
    }
    
    div.header button:hover {
        background-color: #0056b3;
    }
    
    div.header button:active {
        background-color: #004380;
    }
    
    div.content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .infoButton{
    
    }
    
    .acessarButton{

    }
    

`;

export {Bloco};