import styled from "styled-components";




const Card = styled.div`
    display: flex;
    margin: 20px;
    padding: 10px;
    width: 33%;
    height: 150px;
    background-color: var(--background);
    box-shadow: 00px 0px 10px rgba(0, 0, 0, 0.171);
    border: 1 solid black;

    #tipo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        font-family: 'Century Gothic', sans-serif;
        font-weight: light;

    }

    .ID {

        font-weight: bold;
        color: var(--detalhes);
        font-family: 'Century Gothic', sans-serif;
        font-weight: light;

    }
`;

export {Card};