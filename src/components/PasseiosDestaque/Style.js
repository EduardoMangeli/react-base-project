import styled from "styled-components"

const PasseioDestaque = styled.header`
  background-color: var(--background);
  display: flex;
  height: 16rem;
  width: auto;
  flex-direction: row;
  padding: 1rem;
  justify-content: center; /* Centraliza as imagens horizontalmente */
`;

const ImagemPasseio = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 8%;
  margin-right: 3rem; /* Espaço entre as imagens, exceto na última */
  &:last-child {
    margin-right: 0; /* Remove o margin da última imagem */
  }
  &:hover {
    height: 16rem;
    width: 16rem;
  }
`;

export { PasseioDestaque, ImagemPasseio };