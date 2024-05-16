import styled from "styled-components";




const Card = styled.div`
    display: flex;
    margin: 20px;
    padding: 10px;
    min-width: 25%;
    height: 60%;
    background-color: var(--background);
    box-shadow: 00px 0px 10px rgba(0, 0, 0, 0.171);
    border: 1 solid black;

    #tipo {
        display: flex;
        flex-direction: column;
        gap:25%;
        height: 100%;
        font-family: 'Century Gothic', sans-serif;
        font-weight: light;

    }
    #tipo i {
        font-size: 13px ;
    }
    #datadiv{
        font-size:13px ;
    }
    .container-card{
        display: flex;
        gap: 0.2rem;
        justify-content: left;
        flex-direction: row;
    .ID {

        font-weight: bold;
        color: var(--detalhes);
        font-family: 'Century Gothic', sans-serif;
        font-weight: light;

    }

`;

export {Card};