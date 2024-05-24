import styled from "styled-components";

const Top = styled.header`
  padding: 2em 5em;
  padding-left: 2em;
  background-color: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  height: auto;
  position: absolute;
  /* width: 100%; */

  .merriweather-light {
  font-family: "Merriweather", serif;
  font-weight: 300;
  font-style: normal;
  }

  .merriweather-regular {
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;
  }

  .merriweather-bold {
  font-family: "Merriweather", serif;
  font-weight: 700;
  font-style: normal;
  }

  .links{
    display: none;
    flex-direction: row;
    /* flex-wrap: wrap; */
  }

  a {
    display: none;
    /* margin-left: auto; */
    text-align: center;
    padding: .5rem;
    min-width: 5em;
    background-color: none;
    text-decoration: none;
    font-weight: bold;
    color: var(--destaque);
    text-transform: uppercase;
    border-radius: 1em;
    font-size: 0.8rem;
    transition: .25s;
    &:hover{
      text-decoration: underline;
      text-decoration-thickness: 2px;
    }
  }

  .containerLogo{
    display: flex;
    /* min-width: 200px; */
    margin-left: 0;
    justify-content: center;
    align-items: center;
    background: none;
    transition: .25s;
    &:hover{
      background: none;
      transform: scale(1.05);
      text-decoration: none !important;
    }
    h3{
    color: var(--destaque);
    /* width: 50%; */
    font-family: "Merriweather", serif;
    font-size: 1.1rem;
    text-align: left;
    padding: 20px;
    text-transform: capitalize;
    }
    img{
      max-width: 6rem;
      margin-right: -30px;
    }
  }

  @media screen and (min-width: 1024px){
    padding: 3.5em 0em;
    height: 10vh;
    /* position: absolute; */
    width: 100%;
    /* left: 50%;
    transform: translateX(-50%); */
    .linkpages{
      display: flex;
      justify-content: center;
      white-space: nowrap;
    }

    .links{
      /* width: 100%; */
      display: flex;
      justify-content: center;
      /* margin-left: auto; */
      gap: 1em;
      padding: 1em;
    }

    div#outer-container{
      display: none
    }

    .divGeral{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 2em;
    }
  }
`;

const MenuButton = styled.input`
  display: none;
`;

const MenuStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--destaque);
  gap: 10px;
`;

const MenuIcon = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: .5rem;
  border: 2px solid var(--destaque);
  border-radius: 5px;
  background-color: none;
  &:hover {
    border: 2px solid var(--secundaria);
  }
  cursor: pointer;
  color: var(--destaque);
`;

const MenuContent = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 130px;
  z-index: 999;

  .botoes{
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    gap: 1em;
    padding: 1em;
    background-color: var(--vidro);
    border: 2px solid var(--destaque);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .botaoLng{
    border: none;
    padding: 1em;
    padding-inline: 2em;
    background: none;
    font-family: 'Roboto', sans-serif;
    color: var(--secundaria);
    background: none;
    &:hover{
      color: var(--primaria);
      cursor: pointer;
    }
  }

  @media screen and (min-width: 1024px){
    .botoes{
      display: flex;
      position: absolute;
    }
  }

  ${({ isVisible }) => isVisible && `display: flex;`}
`;

export { Top, MenuStyled, MenuIcon, MenuContent, MenuButton};
