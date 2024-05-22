import styled from 'styled-components';

const Section = styled.div`
  align-items: center;
  display: flex;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  width: 80% !important;
  margin: 0 auto;

  img {
    display: none;
    width: 30rem;
    object-fit: cover;
    height: 20rem;
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
    h2{
      width: 100%;
    }
    text-align: left;
    padding: 1rem;
  }

  a{
    width: 100%;
    padding: 0;
    margin: 0;
    display: none;
  }
  
  @media screen and (min-width: 1024px){
    img{
      display: flex;
    }
    a{
      display: flex;
    }
  }
`;
export { Section }