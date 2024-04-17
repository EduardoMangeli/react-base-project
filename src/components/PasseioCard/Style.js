import styled from "styled-components";

const PasseioArticle = styled.article`
  width: 20vw;
  background-color: #D4D4D4;
  position: relative;

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

  ul{  
    color: black;
    padding: 1em;
    list-style: none;
    margin: 0;

  }

  date{
    width: 10%;
    height: 5rem;
    background-color: var(--secundaria);
    position: absolute;
    padding: .5rem;
    border: .5rem;
    text-align: justify;
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