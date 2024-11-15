import styled from "styled-components";

const DetalhamentoContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 2em;
  background-color: var(--background);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2em;
    text-align: center;
    color: var(--primaria);
    margin-bottom: 1em;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1em;
    display: flex;
    justify-content: center
  }

  p {
    font-size: 1.1em;
    margin: 0.5em 0;
    color: var(--primaria);
  }

  strong {
    color: var(--primaria);
  }
`;

export { DetalhamentoContainer };
