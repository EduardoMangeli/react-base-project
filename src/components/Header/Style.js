import styled from "styled-components"

const Top = styled.header`
  padding: 2em 5em;
  background-color: var(--secundaria);
  display: flex;
  flex-direction: row;
  margin: 0;
  a {
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
      color: var(--destaque);
    }
  }

  h3{
    color: var(--destaque)
  }

  .containerLogo{
    display: flex;
    align-items: center;
  }

  img{
    max-width: 1rem;
    margin-right: 10px;
  }
`

export {Top}