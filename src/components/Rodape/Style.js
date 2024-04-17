import styled from "styled-components"

const Bottom = styled.footer`
  padding: 2em 5em;
  background-color: var(--cinza);
  display: flex;
  bottom: 0;
  flex-direction: row;
  margin: 0;
  a {
    text-align: center;
    padding: .3em;
    margin: 0 .7em;
    min-width: 5em;
    background-color: var(--secundaria);
    text-decoration: none;
    font-weight: bold;
    color: var(--destaque);
    text-transform: uppercase;
    border-radius: 1em;
    &:hover{
      background-color: var(--terciaria);
      color: var(--destaque);
    }
  }
`

export {Bottom}