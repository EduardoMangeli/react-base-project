import styled from "styled-components"

const Top = styled.header`

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 700px; /* ajuste o tamanho conforme necessário */
  height: auto;
}

.links-container {
  display: flex;
  gap: 20px; /* ajuste o espaçamento entre os links conforme necessário */
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 100px; /* ajuste o tamanho conforme necessário */
  height: auto;
}

.links-container {
  display: flex;
  gap: 20px; /* ajuste o espaçamento entre os links conforme necessário */
}

  padding: .5em 2em;
  background-color: var(--secundaria);
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0;
  a {
    text-align: center;
    padding: .3em;
    margin: 0 .7em;
    min-width: 5em;
    background-color: var(--botoes) ;
    text-decoration: none;
    font-weight: regular;
    color: var(--detalhe);
    text-transform: uppercase;
    /*border-radius: .3em;*/
    &:hover{
      background-color: var(--destaque);
      color: var(--secundaria);
    }
  }
`

export {Top}