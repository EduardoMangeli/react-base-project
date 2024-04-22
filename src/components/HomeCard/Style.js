import styled from 'styled-components';

const HomePageHead = styled.div`
  background-color: var(--primaria);
  padding: 1rem;

  .container {
    color: var(--destaque);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text-container {
    text-align: justify;
    max-width: 60%;
    padding: 1rem;
  }

  h1{
    text-align: center;
  }

  img {
    width: 100%;
    height: 30rem;
  }
`;

export { HomePageHead };