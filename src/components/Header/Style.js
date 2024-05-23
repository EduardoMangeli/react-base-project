import styled from "styled-components";

const Top = styled.header`
  padding: 2em 5em;
  padding-left: 2em;
  background-color: none;
  display: flex;
  align-items: center;
  flex-direction: row;
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

  .botoes{
    color: var(--destaque);
    display: flex;
    position: fixed;
    right: 28px;
    top: 5px;
    font-weight: bold;
    z-index: 999;
  }
  .links{
    display: none;
    flex-direction: row;
    /* flex-wrap: wrap; */
  }

  .botaoLng{
    border: none;
    background: none;
    font-family: 'Roboto', sans-serif;
    &:hover{
      cursor: pointer;
    }
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

  .bandeira{
    display: block;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 15px;
    object-fit: cover;
    align-items: center;
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

    .botoes{
      display: flex;
      position: absolute;
      top: 2px;
      right: 2px;
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

export { Top };
