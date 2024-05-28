import styled from "styled-components"

const PasseioDestaque = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 100%;
  margin: 4px;
  border-radius: 30px;
`;

const CardPasseio = styled.div`
  display: flex;
  z-index: 10;
  position: relative;
  top: -80px;
  height: 300px;
  width: 99%;
  box-shadow: 2px 11px 26px -17px rgba(0,0,0,0.5);
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const Titulo = styled.h3`
    display : block;//${props => props.mostrar? 'block' : 'none'};
    color: var(--secundaria);
    font-size: 1.5rem;
    position: absolute;
    text-align: center;
    top: 17px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--destaque);
    width: 98%;
    padding: 10px;
    border-radius: 0 0 30px 30px
`;

const Local = styled.h4`
    display : ${props => props.mostrar? 'block' : 'none'};
    color: var(--texto);
    position: absolute;
    text-align: center;
    bottom: -26px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--destaque);
    width: 98%;
    padding: 10px;
    border-radius: 30px 30px 0 0
`;

const Descricao = styled.p`
    display : block;//${props => props.mostrar? 'block' : 'none'};
    color: var(--texto);
    z-index: 999;
    position: absolute;
    text-align: center;
    bottom: -150px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: none;
    width: 98%;
    height: fit-content;
    padding: 10px;
`;

export { PasseioDestaque, CardPasseio, Titulo, Local, Descricao };