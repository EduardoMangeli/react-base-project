    import styled from "styled-components"

const Top = styled.header`
  padding: .5em 2em;
  background-color: var(--background);
  display: flex;
  margin: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: #023859 solid 20px;
    
    img{
        height: 50px;
    }
    
    
  a {
    text-align: center;
    padding: .3em;
    margin: 0 .7em;
    min-width: 5em;
      
    background-color: var(--background);
    text-decoration: none;
    font-weight: bold;
    color: var(--secundaria);
    text-transform: uppercase;
    /*border-radius: .3em;*/
    &:hover{
        width: 500px;
      color: var(--destaque);
    }
  }
    
    #nav1{
        display: flex;
    }
    
    .hamburguer{
        background: none;
        font-size: 30px;
        width: 60px;
        border: none;
    }
`

export {Top}