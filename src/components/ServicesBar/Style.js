import styled from "styled-components"
const Bar = styled.header 

`
.div-bar {

}
.div-botoes {
    display: flex;
    height: 2rem;
    justify-content: center;
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
    padding-bottom: 2.62rem;
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
export {Bar}