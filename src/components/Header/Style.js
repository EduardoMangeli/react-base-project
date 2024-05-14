import styled from "styled-components"

const Top = styled.header`
  padding: .5em 2em;
  background-color: var(--secundaria);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  a {
    text-align: center;
    padding: .3em;
    margin: 0 .7em;
    min-width: 5em;
    background-color: var(--secundaria);
    text-decoration: none;
    font-weight: bold;
    color: var(--background);
    text-transform: uppercase;
    /*border-radius: .3em;*/
    }
  
  .login {
    top: 1.5rem;
    right: 0;
  }
  

  
`

export {Top}