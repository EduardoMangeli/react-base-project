import styled from 'styled-components';

const HomePageHead = styled.div`
  background-image: url("");
  background-size: cover;
  background-position: center;
  background-color: var(--secundaria);
  padding: 1rem;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  .container {
    color: var(--destaque);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .text-container {
    text-align: center;
    max-width: 60%;
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
      width: 100%;
      height: 30rem;
    }
    .container{
      justify-content: space-between;
    }
    .text-container{
      text-align: justify;
    }
  }
`;

export { HomePageHead };