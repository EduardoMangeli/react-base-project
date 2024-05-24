import styled from 'styled-components';

const Section = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  width: 80% !important;
  margin: 0 auto;

  .hiddenImage {
    display: flex;
  }
  .standardImage {
    display: none;
  }

  img {
    /* display: none; */
    display: flex;
    flex-basis: 100%;
    /* width: 30rem; */
    object-fit: cover;
    max-height: 15rem;
    /* height: 20rem; */
    padding: 0rem;
    border-radius: 15px;
    border: 2px solid var(--background);
    box-shadow: 2px 17px 19px 0px rgba(0,0,0,0.51);
    transition: .25s;
    &:hover {
      transform: scale(1.05);
      box-shadow: 2px 17px 19px 0px rgba(0,0,0,0.7);
    }
  }

  .texto {
    text-align: left;
    padding: 1rem;
  }

  a{
    width: 100%;
    padding: 0;
    margin: 0;
    /* display: none; */
    display: flex;
  }
  
  @media screen and (min-width: 1024px){
    flex-wrap: nowrap;
    .hiddenImage {
      display: none;
    }
    .standardImage {
      display: flex;
    }
    img{
      display: flex;
      max-height: 20rem;
    }
    a{
      display: flex;
    }
  }
  @media screen and (320px <= width <= 450px){
    img {
      max-height: 10rem;
    }
  }
`;
export { Section }
