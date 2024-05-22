import styled from "styled-components"

const Top = styled.header`

.div-logo {
  display: flex;
  justify-content: center;

}

.retangulo {
    display: flex;
    height: 9px;
    width: 100%;
    background-color: var(--detalhes); 
}

.linha {
    display: flex;
    height: 1px;
    width: 90%;
    background-color: var(--primaria);
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

.logo {
  display: flex;
  width: 200px; /* ajuste o tamanho conforme necessário */
  height: auto;
}

.div-botoes {
  display: flex;
  padding: .5em 2em;
  padding-top: 1em;
  padding-bottom: 1em; 
  background-color: var(--secundaria);
  justify-content: center;
  margin: 0;
  justify-content: center;
  a {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .7);
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
@media (max-width: 800px){
  .div-botoes{
    gap: 0.5rem;
    flex-direction: column;
  }
}
`

export {Top}