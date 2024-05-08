import styled from "styled-components";

const TabelaEstilo = styled.article`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
    
    
  a {
    color: black;
  }

  th {
    background-color: #002D55;
    color: white;
    padding: 0.3rem 1.0rem;
    font-weight: 600;
  }

  td {
    background-color: #D8E8F7;
    text-align: center;
    padding: 0.3rem 1.0rem;
  }

  span {
    padding: 0.1rem 0.7rem;
    border-radius: 10px;
    color: white;
    font-weight: 400;
  }
    
    table {
        margin: auto;
        width: 100%;
    }

  .nao-visto {
    background-color: #CF8686;
  }
  .andamento {
    background-color: #DFCF95;
  }

  .realizado {
    background-color: #86CF8D;
  }
`

export { TabelaEstilo };