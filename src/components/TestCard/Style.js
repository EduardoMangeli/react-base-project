import styled from "styled-components";

const Test = styled.div`
    margin-top: .5rem;
    width: 20rem;
    background-color: var(--detalhe);
    
    h1{
        display: flex;
        font-size: 1.2em;
        justify-content: space-between;
        padding: 10px;
    }
    
    p#tipo{
        text-align: center;
        text-transform: capitalize;
        font-size: 1.3em;
    }
    
    p#info{
        display: flex;
        justify-content: space-between;
        padding: 0.3em;
        padding-right: 1em;
        align-items: center;
        
        span:nth-child(2){
            font-size: 1.7em;
        }
    }

`;

export {Test};