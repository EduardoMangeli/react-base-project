import styled from "styled-components";

const ArquivoServicoStyle = styled.article`
    background-color: white;
    height: 500px;
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
    
    #container{
        display: grid;
        height: 100%;
        grid-template-areas:
            "p p p p"
            ". a c ."
            ". a c ."
            ". b c ."
            ". b c ."
            ". e e ."
        ;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: repeat(5,4rem);
        gap: .3rem;
        padding: .3rem;
    }
    
    label{
        display: block;
    }

    #container > div{

    }
    
    label{
        font-weight: bold;
        color: black;
    }
    
    p{
        color: black;
        font-weight: lighter;
        font-size: 0.7rem;
    }
    
    button{
        padding: .3rem;
        width: 100px;
        border-radius: .3rem;
        border: none;
        background-color: green;
        color: white;
        cursor: pointer;
    }
    
    button:hover{
        background-color: darkgreen;
    }
    
    button:active{
        background-color: green;
    }
    
    #circulo{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: var(--primaria);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
    }
    
    #linha-azul{
        display: block;
        width: 100%;
        height: 2px;
        background-color: var(--primaria);
    }
    
    #secao-selecionada{
        grid-area: p;
        margin-top: 10px;
    }
    
    #titulo{
        display: flex;
        align-items: center;
    }
    
    #img-paciente{
        grid-area: a;
    }
    
    #img-calibracao{
        grid-area: b;
    }
    
    #relatorio{
        grid-area: c;
    }
    
    #salvar{
        grid-area: e;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export { ArquivoServicoStyle };
