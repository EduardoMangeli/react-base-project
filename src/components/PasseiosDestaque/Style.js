import styled from "styled-components"

const PasseioDestaque = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;
  margin: 4px;
`;

const CardPasseio = styled.div`
  display: flex;
  position: relative;
  height: 300px;
  width: 99%;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const Titulo = styled.div`
    display : ${props => props.mostrar? 'block' : 'none'};
    color: var(--secundaria);
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

const ProxSaida = styled.div`
    display : ${props => props.mostrar? 'block' : 'none'};
    color: var(--secundaria);
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

export { PasseioDestaque, CardPasseio, Titulo, ProxSaida };