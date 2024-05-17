import styled from 'styled-components';

const HomePageHead = styled.div`
  background-image: url("");
  background-size: cover;
  background-position: center;
  background-color: var(--primaria);
  padding: 1rem;

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
  }

  h1{
    text-align: center;
  }

  .img-container {
    display: none;
  }

  @media screen and (min-width: 1024px){
    .img-container {
      display: flex;
      width: auto;
      margin: 0;
      height: 30rem;
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