import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12vh; /* Defina a altura desejada para centralizar verticalmente */
`;

const BaixeButton = styled.button`
  background-color: var(--detalhe);
  color: var(--destaque);
  width: 15em;
  height: 4em;
  border-radius: 1em;
  border: none;
  outline:none;
  &:hover{
      background-color: var(--terciaria);
    }
`;

const CenteredButton = ({ children }) => (
  <CenteredContainer>
    <BaixeButton>{ children }</BaixeButton>
  </CenteredContainer>
);

export default CenteredButton;