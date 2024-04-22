import styled from "styled-components"

const Destaque = styled.header`
  /*background-image: url(${props => props.imagem});*/
  /*background-size: cover; /* Para cobrir todo o espaço do elemento */
  /*background-position: center; /* Para centralizar a imagem */
  background-color: var(--primaria);
  display: flex;
  height: 50vh;
  flex-direction: row;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: flex-end; /* Alinha o conteúdo na parte inferior */

  h1{
    text-transform: uppercase;
    text-align: center;
    font-size: 6rem;
    color: var(--detalhe);
  }
`

export {Destaque}