import styled from "styled-components";

const MedalhaArticle = styled.article`
  display: flex;
  width: 240px; /* Ajuste o tamanho do MedalhaArticle */
  height: 360px; /* Ajuste o tamanho do MedalhaArticle */
  background-color: var(--secundaria);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;

  img {
    color: var(--secundaria);
    object-fit: contain; /* Ajuste o object-fit para contain */
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-position: center;
  }

  h3 {
    margin: 1em;
    text-align: center;
    text-transform: uppercase;
    color: var(--destaque);
    object-position: center;
  }
`;


export { MedalhaArticle };