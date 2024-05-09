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
    max-width: 100%;
    height: auto;
    height: 20rem;
    padding: 0rem;
    border-radius: 15px;
    border: 2px solid var(--destaque);
    box-shadow: 2px 17px 19px 0px rgba(0,0,0,0.51);
  }

  div {
    text-align: justify;
    padding: 1rem;
  }
  
  @media screen and (min-width: 1024px){
    img{
      display: flex;
    }
  }
`;
export { Section }