import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 50px;
  height: min-content;
  background-color: var(--secundaria);
  border: 1px solid var(--primaria);
  box-sizing: border-box;
  
  h1, p {
    color: var(--background);
    font-family: 'Krub', sans-serif;
    margin: 10px;
    margin-left: -20px;
  }

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 425px) {
    padding: 20px;
    h1, p {
      margin-left: 0;
      text-align: center;
    }
  }
`;

export { Container };