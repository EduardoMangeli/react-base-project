import styled from "styled-components";




const Card = styled.div`
    display: flex;
    margin: 20px;
    padding: 10px;
    width: 30%;
    height: 55%;
    background-color: var(--background);
    box-shadow: 00px 0px 10px rgba(0, 0, 0, 0.171);
    border: 1 solid black;
    margin-top: 30px;

    #tipo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 250px;
        font-family: 'Century Gothic', sans-serif;
        font-weight: light;

    }

    .ID {

        font-weight: bold;
        color: var(--detalhes);
        font-family: 'Century Gothic', sans-serif;
        font-weight: light;

    }

    .Desc
    {
        font-weight: bold;
        font-family: 'Century Gothic', sans-serif;
        font-weight: light;
    }


    #btncard {
    background-color: var(--detalhes);
    color: var(--secundaria);
    border: none;
    padding: 5px 0px;
    cursor: pointer;
    margin-top: 10px;
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover {
      transform: scale(1.05);
      background-color: #0056b3; /* Substitua por um tom mais escuro ou apropriado */
    }

    &:active {
      transform: scale(0.95);
      background-color: #007bff; /* Substitua por um tom mais claro ou apropriado */
    }
  }


`;

export {Card};