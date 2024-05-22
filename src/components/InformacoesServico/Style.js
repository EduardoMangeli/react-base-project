import styled from "styled-components";

const InformacoesServicoStyle = styled.article`
    background-color: white;
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
    height: 500px;
    
    #container{
        display: grid;
        grid-template-areas:
            "p p p p"
            ". a b ."
            ". c d ."
            ". g i ."
            ". e e ."
        ;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: repeat(5,6rem);
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
    
    input{
        margin-top: 5px;
        width: 70%;
        padding: .3rem;
        border-radius: .3rem;
        border: 1px solid #ccc;
    }
    
    input[type="checkbox"]{
        width: auto;
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
    
    #item2{
        grid-area: a;
    }
    
    #item3{
        grid-area: b;
    }
    
    #item4{
        grid-area: c;
    }
    
    #item5{
        grid-area: d;
    }
    
    #item6{
        grid-area: g;
    }
    
    #item7{
        grid-area: i;
    }
    
    #item8{
        grid-area: e;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export { InformacoesServicoStyle };
