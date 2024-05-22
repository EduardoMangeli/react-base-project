import styled from "styled-components";

const Card = styled.div`
  display: flex;
  margin: 20px;
  padding: 10px;
  min-width: 10%;
  height: 60%;
  background-color: var(--background);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.171);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }

  #tipo {
    display: flex;
    flex-direction: column;
    gap: 25%;
    height: 100%;
    font-family: 'Century Gothic', sans-serif;
    font-weight: light;
  }

  #tipo i {
    font-size: 13px;
  }

  #datadiv {
    font-size: 13px;
  }

  .container-card {
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
    .icon{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden; 
        background-color: var(--botoes);
        color:var(--relogio);
        position: absolute;
        max-width: 100%; 
        max-height: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        margin-top:115px;
        margin-left:125px;
    }
`;

export { Card };
