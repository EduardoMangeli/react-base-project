import styled from "styled-components";

const PasseioArticle = styled.article`
  width: 20vw;
  background-color: var(--cinza);
  position: relative;
  border-radius: 0.5rem;
  &:hover {
    scale: 1.05; 
  transition: height width ease 1s;
  }

  figure {
    margin: 0 0 0 0;
    height: 13rem;
    border-radius: 0.5rem;
  }
  
  img {
    object-fit: cover;
    width: 100%;
    height: 13em;
    border-radius: 0.5rem 0.5rem 0 0;
 
  }

  h3{
    margin: 0;
    display: block;
    text-align: center;
    line-height: 1rem;
    text-transform: uppercase;
    color: var(--secundaria);
    padding: 1rem 1rem 0 1rem;
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
    display: flex;
    flex-direction: column;
    width: fit-content;
    height:fit-content;
    background-color: var(--secundaria);
    position: absolute;
    padding: .8rem .5rem .8rem .5rem;
    border: .5rem;
    text-align: justify;
    border-radius: .5rem;
  }

  #dia, #mes {
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    color: var(--detalhes);
  }

  #mes{
    font-size: .9rem;
    align-items: center;
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