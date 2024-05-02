import styled from "styled-components";

const MedalhaArticle = styled.article`
  width: 250px;
  background-color: var(--secundaria);
  position: relative;
  display: flex;
  row-gap: 1rem;
  gap:-5rem;
  flex-direction: column;
  align-items: center;
  border-radius: 3em;
  
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
    text-align: center;
    text-transform: uppercase;
    color: var(--destaque);
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