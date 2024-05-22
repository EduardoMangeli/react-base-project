import styled from "styled-components";

const Card = styled.div`
  margin: 20px;
  padding: 10px;
  width: 300px;
  height: 100px;
  background-color: var(--background);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.171);

  #tipo {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: 'Century Gothic', sans-serif;
    font-weight: light;
  }

  .container-card {
    display: flex;
    gap: 1rem;
    justify-content: left;
    flex-direction: row;
  }

  .ID {
    font-weight: bold;
    color: var(--detalhes);
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

export { Card };
