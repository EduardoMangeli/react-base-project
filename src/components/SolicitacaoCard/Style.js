import styled from "styled-components";

const Solicit = styled.div`
    margin: 20px;
    padding: 10px;
    width: 300px;
    border-radius: 35px;
    background-color: var(--background);
    
    button {
        border-radius: 15px;
        height: 20px;
        width: 100px;
        background-color: var(--primaria);
        color: #fff;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
    
    button:active {
        background-color: #004380;
    }
    
    span{
        display: block;
    }
    
    div#navbar{
        display: flex;
        justify-content: flex-end;
        margin-right: 1em;
        margin-top: 0.3em;
    }
    
    div#tipo{
        text-align: left;
        margin-left: 1em;
    }

`;

export {Solicit};