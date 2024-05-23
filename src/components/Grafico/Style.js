import styled from "styled-components"
const Grafico = styled.header
`
.grafico{
    display: flex;
    position: relative;
    flex-wrap: wrap;
    top: -0.5rem;
    justify-content: center;
    align-content: center;
    transform: scale(1);
}
.linha{
    position: relative;
    width: 600px;
    bottom: -50px;
    height: 0.1rem;
    background-color: black;
}
.gauge {
    position: absolute;
    transform: scale(1.8);
    width: 200px;
    height: 100px;
    border: 3px solid none;
    border-radius: 200px 200px 0 0;
    position: relative;
    top: 10px;
    background-image: linear-gradient(to bottom, #0077CC, #000033);
}
.sub-gauge{
    position: relative;
    bottom: -50px;
    left: 50px;
    width: 100px;
    height: 50px;
    border: 3px solid none;
    border-radius: 100px 100px 0 0;
    overflow: hidden;
    position: relative;
    background-color: #f0f0f0;
}
.pointer {
    width: 2px;
    height: 90px;
    background-color: rgb(0, 0, 0);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform-origin: bottom;
    transform: rotate(0deg);
    transition: transform 2s ease;
}
.pointer i{
    position: absolute;
    left: -5px;
    top: -2px;
}
.pointer p{
    color: var(--detalhes);
    font-weight: 800px;
    position: relative;
    left: -8px;
    font-size: 15px;
    top: -45px;
}

.pedidos{
    align-items: center;
    justify-content: center;
    gap: 30px;
    display: flex;
    margin-top: 10%;
    left: -100px;
    top: 50.5px;
    background-color: rgb(255, 255, 255);
}
.pedidos p{
    font-size: 15px;
    font-weight: lighter;
}
.pedidos span{
    font-size: 35px;
}
.total-pedidos{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.pedidos-entregues{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}


`

export {Grafico}