import styled from "styled-components";

const Bloco = styled.article`
    background-color: var(--detalhe);
    padding: 20px;
    position: relative;
    margin: 25px;
    border-radius: 100px;
    height: 400px;
  
    div.secao{
        color: var(--secundaria);
        text-align: center;
        font-size: larger;
        font-weight: bold;
        text-transform: uppercase;
        padding: 10px;
    }
    
    div.header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }
    
    div header h1{
        display: flex;
    }
    
    div.content {
        display: flex;
    }
    

`;

export {Bloco};