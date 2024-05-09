import styled from "styled-components";

const BotaoAvancarVoltarStyle = styled.div`
a {
    text-decoration: none;
    display: inline-block;
    padding: 8px 16px;
  }
  
  a:hover {
    background-color: #ddd;
    color: black;
  }
  
  .previous {
    background-color: #f1f1f1;
    color: black;
  }
  
  .next {
    background-color: rgb(2, 56, 89);
    color: white;
  }
  
  .round {
    border-radius: 5rem;
  }
`

export { BotaoAvancarVoltarStyle };