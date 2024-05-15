import styled from "styled-components";

const Top = styled.header`
  padding: 2em 5em;
  background-color: var(--primaria);
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0;
  height: 10vh;

  .botoes{
    color: var(--destaque);
    display: flex;
  }

  .botaoLng{
    border: none;
    background-color: var(--primaria);
    color: var(--destaque);
    font-family: 'Roboto', sans-serif;
    transition: 1s;
    &:hover{
      text-decoration: underline;
      cursor: pointer;
  }
}

  
  a {
    display: none;
    margin-left: auto;
    text-align: center;
    padding: .5rem;
    min-width: 5em;
    background-color: var(--primaria);
    text-decoration: none;
    font-weight: bold;
    color: var(--destaque);
    text-transform: uppercase;
    border-radius: 1em;
    font-size: 0.8rem;
    transition: .5s;
    &:hover{
      background-color: var(--secundaria);
    }
  }

  .containerLogo{
    display: flex;
    margin-left: 0;
    justify-content: center;
    align-items: center;
    background: none;
    transition: .5s;
    &:hover{
      background: none;
      transform: scale(1.2);
    }
    h3{
    color: var(--destaque);
    width: 50%;
    font-size: 1.1rem;
    text-align: left;
    padding: 20px;
    }
    img{
      max-width: 6rem;
      margin-right: -30px;
    }
  }

  @media screen and (min-width: 1024px){
    .linkpages{
      display: block;
    }

    div#outer-container{
      display: none
    }

    .botoes{
      position: absolute;
      right: 2px;
      display: flex;
    }

  }
`;

export { Top };
