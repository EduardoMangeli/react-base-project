import styled from 'styled-components';

const Section = styled.div`
  align-items: center;
  display: flex;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  width: 80% !important;
  margin: 0 auto;

  img {
    max-width: 100%;
    height: auto;
    height: 20rem;
    padding: 0rem;
    border-radius: .5rem;
    border: 1em solid var(--primaria);
  }

  div {
    text-align: justify;
    padding: 1rem;
  }
`;
export { Section }