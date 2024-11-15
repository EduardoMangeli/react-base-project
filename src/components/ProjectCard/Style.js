import styled from "styled-components";

const Container = styled.div`
  width: 17.5em;
  height: 25.5em;
  border: 2px solid var(--detalhe);
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  
  h2 {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0;
  height: 3em;
  }

  p {
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0.5em 0;
  }

  title {
    padding: 0.5em; 
  }
  
  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  button {
    padding: 16px 24px;
    background: #F5AC00;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
   
 text {
    padding: 0 .5em;
  }
 
 img {
    height: 100px;
    margin: 0.5em 0;
    display: block; 
    margin-left: auto; 
    margin-right: auto; 
  }

`;

export {Container};