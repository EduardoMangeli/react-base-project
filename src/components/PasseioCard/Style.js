import styled from "styled-components";

const PasseioArticle = styled.article`
  width: 20vw;
  background-color: var(--cinza);
  position: relative;
  &:hover {
    scale: 1.05; 
  }

  figure {
    margin: 0 0 0 0;
  }
  
  img {
    object-fit: cover;
    width: 100%;
    height: 22em;
 
  }

  h3{
    margin: 0;
    display: block;
    text-align: center;
    line-height: 1rem;
    text-transform: uppercase;
    color: var(--secundaria);
  }

  /*date{
    margin: 0;
    display: flex;
    flex-direction: row;
    text-align: center;
    line-height: 1rem;
    text-transform: uppercase;
    color: var(--detalhes);
    background-color: var(--secundaria);
  }*/

  ul{  
    color: var(--texto);
    padding: 1em;
    list-style: none;
    margin: 0;

  }

  h2{
    width: 10%;
    height: 5rem;
    background-color: var(--secundaria);
    position: absolute;
    padding: .5rem;
    border: .5rem;
    text-align: justify;
    border-radius: .5rem;
  }

  figcaption {
    display: block;
    background-color: var(--secundaria);
    text-align: center;
    margin-top: .5rem;

    a {
      text-decoration: none;
    }
  }
`

export {PasseioArticle}