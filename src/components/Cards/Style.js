import styled from "styled-components";

const Personalizacao = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px 10px;
  margin-top: 15px;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }

  @media (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }
`;


export { Personalizacao };