import styled from 'styled-components';

const HomePageHead = styled.div`
  background-image: url("imagens/heroHome.png");
  background-size: cover;
  background-position: center;
  background-color: var(--primaria);
  padding: 1rem;
  z-index: -1;
  top: -15rem;
  height: 720px;

  .container {
    color: var(--destaque);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .text-container {
    text-align: center;
    max-width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: 15rem;
  }

  h1{
    text-align: center;
  }

  .subtitulo {
    text-align: center;
    margin: 1rem;
  }

  .img-container {
    display: none;
  }

  .textoplataformas{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--destaque);
    color: var(--texto);
    border-radius: 15px;
    padding: 0.5rem;
    width: fit-content;
    h5{
      padding: 0;
    }
  }

  .botoesPlataformas{
    color: var(--texto);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
    margin: 32px;
  }

  .botao{
    display: flex;
    height: auto;
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    background-color: transparent;
    color: var(--destaque);
    border: 2px solid var(--destaque);;
    padding: 0.5rem;
    font-size: 0.8rem;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        transform: scale(1.05);
    }
  }

  @media screen and (min-width: 1024px){
    .img-container {
      display: flex;
      width: auto;
      margin: 0;
      height: 30rem;
      position: relative;
      top: 15rem;
    }
    .container{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 0;
    }
    .text-container{
      text-align: justify;
      flex-wrap: nowrap;
    }
  }
`;

export { HomePageHead };