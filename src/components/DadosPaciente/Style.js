import styled from "styled-components";

const MenuDadosPaciente = styled.div 
    `
.div-bar {
    display: flex;
    
}
.div-dados {
    background-color: white;
    display: flex;
}
.div-form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 100px;
    height: 500px;
    width: 1000px;
}
.div-botoes-form {
    background-color: var(--botoes);
    display:flex;
    flex-direction: column;
}

button {
    padding: 10px;
    margin-right: 10px;
  }

.div-campos {
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--botoes);
    display: flex;
}
.div-rotulo {
    margin: 30px;
}
.div-botoes {
    display: flex;
    height: 2rem;
    justify-content: center;
}
h2 {
    font-size: 90%;
    text-align: center;
    margin: 0 0px;
}
.btn-bar{
    font-size: 90%;
    cursor: pointer;
    border-style: none;
    margin: 0 5px;
    min-width: 13rem;
    padding: .40rem;
    text-align: center;
    font-weight: lighter;
    text-decoration: none;
    color: white;
    background-color: var(--detalhes);
}
.btn-bar.selecionado{
    padding-bottom: 1.62rem;
    background-color: var(--botoes);
}
@media (max-width: 900px){
    .btn-bar{
        font-size: 60%;
        min-width: 7rem;
    h2 {
            font-size: 80%;
        }
    }
  }
@media (max-width: 800px){
    .btn-bar{
        padding: .2rem;
        font-size: 60%;
        min-width: 4rem;
    }
    .btn-bar.selecionado{
        padding-bottom: 2rem;
    }
    h2 {
        font-size: 70%;
    }
  }

`
export {MenuDadosPaciente}