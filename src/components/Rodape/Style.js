import styled from "styled-components"

const Bottom = styled.footer`
  padding: 4em 15em;
  background-color: var(--cinza);
  display: flex;
  bottom: 0;
  flex-direction: row;
  margin: 0;

  a {
    text-align: left;
    padding: .5em .5em;
    margin: 0;
    color: var(--cinzaescuro);
    font-family: 'Lora', serif;
    font-size: small;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    &:hover{
      color: var(--terciaria);
    }
  }

  h3 {
    font-size: small;
    font-weight: normal;
    padding: .5em;
    text-align: left;
  }

  .colunaNav{
    padding: 0em 8em;
  }

  .redes{
    padding: 0 8em;
  }

  .sociais{
    text-align: left;
  }

`

export {Bottom}