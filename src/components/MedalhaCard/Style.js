import styled from "styled-components";

const MedalhaArticle = styled.article`
  width: 20%;
  background-color: var(--cinza);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  figure {
    margin-top: 1em;
    margin-bottom: 1em;
    align-self: flex-start;
  }

  img {
    color: var(--secundaria);
    object-fit: cover;
    width: 10em;
    height: 10em;
    border-radius: 50%;
    object-position: center;
  }

  h3 {
    margin: 1em;
    text-align: end;
    text-transform: uppercase;
    color: var(--secundaria);
  }

  ul {
    color: black;
    padding: 1em;
    list-style: none;
    margin: 0;
    text-align: center;
  }
`;

export { MedalhaArticle };