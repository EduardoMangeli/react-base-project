import styled from "styled-components";

const Top = styled.header`
  padding: 2em 5em;
  background-color: var(--secundaria);
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0;
  height: 10vh;
  
  a {
    display: none;
    margin-left: auto;
    text-align: center;
    padding: .5rem;
    min-width: 5em;
    background-color: var(--secundaria);
    text-decoration: none;
    font-weight: bold;
    color: var(--destaque);
    text-transform: uppercase;
    border-radius: 1em;
    font-size: 0.8rem;
    &:hover{
      background-color: var(--terciaria);
    }
  }

  .containerLogo{
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    &:hover{
      background: none;
    }
    h3{
    color: var(--destaque);
    width: 50%;
    font-size: 1.2rem;
  }
  img{
    max-width: 6rem;
    margin-right: 10px;
  }
  }


  @media screen and (min-width: 1024px){
    a{
      display: block;
    }

    div#outer-container{
      display: none
    }

  }
`;

export { Top };
