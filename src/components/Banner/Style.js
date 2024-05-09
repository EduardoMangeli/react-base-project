import styled from "styled-components"

const Destaque = styled.header`
  background-image: url(${props => props.imagem});
  background-size: cover;
  background-position: center;
  background-color: var(--secundaria);
  display: flex;
  height: 50vh;
  flex-direction: row;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: flex-end; /* Alinha o conteúdo na parte inferior */
  margin: 0;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  
  h1{
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
    color: var(--destaque);
  }
  @media screen and (min-width: 1024px){
    h1{
      font-size: 6rem;
    }
  }
`

export {Destaque}