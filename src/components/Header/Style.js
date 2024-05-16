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
    position: fixed;
    right: 15px;
    top: 2px;
    font-weight: bold;
  }

  .botaoLng{
    border: none;
    background: none;
    font-family: 'Roboto', sans-serif;
    &:hover{
      cursor: pointer;
  }
}

  a {
    display: none;
    margin-left: auto;
    text-align: center;
    padding: .5rem;
    min-width: 5em;
    background-color: none;
    text-decoration: none;
    font-weight: bold;
    color: var(--destaque);
    text-transform: uppercase;
    border-radius: 1em;
    font-size: 0.8rem;
    transition: .25s;
    &:hover{
      text-decoration: underline;
      text-decoration-thickness: 2px;
    }
  }

  .containerLogo{
    display: flex;
    margin-left: 0;
    justify-content: center;
    align-items: center;
    background: none;
    transition: .25s;
    &:hover{
      background: none;
      transform: scale(1.05);
      text-decoration: none !important;
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

  .bandeira{
    display: block;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 15px;
    object-fit: cover;
    align-items: center;
    }

  @media screen and (min-width: 1024px){
    .linkpages{
      display: block;
    }

    div#outer-container{
      display: none
    }

    .botoes{
      display: flex;
      position: absolute;
      top: 2px;
      right: 2px;
    }
  }
`;

export { Top };
