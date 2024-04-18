import styled from "styled-components"

const Top = styled.header`

.div-logo {
  display: flex;
  justify-content: center;

}

.retangulo {
    height: 9px;
    width: 100%;
    background-color: var(--detalhes); 
}

.linha {
    height: 1px;
    width: 90%;
    background-color: var(--primaria);
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

.logo {
  width: 200px; /* ajuste o tamanho conforme necessário */
  height: auto;
}

.div-botoes {
  padding: .5em 2em;
  padding-top: 1em;
  padding-bottom: 1em; 
  background-color: var(--secundaria);
  justify-content: center;
  margin: 0;
  display: flex;
  justify-content: center;
  a {
    
    text-align: center;
    padding: .1,5em;

    margin: 0 40px;
    min-width: 15em;
    background-color: var(--botoes) ;
    text-decoration: none;
    font-weight: lighter;
    color: var(--detalhe);
    /*border-radius: .3em;*/
    &:hover{
      background-color: var(--destaque);
      color: var(--secundaria);
    }
  }
}  
`

export {Top}