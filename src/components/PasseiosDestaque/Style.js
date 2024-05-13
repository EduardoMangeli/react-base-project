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
  width: 100%;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const Titulo = styled.div`
    display : ${props => props.mostrar? 'block' : 'none'};
    color: var(--destaque);
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--secundaria);
    padding: 10px;
    border-radius: 30px;
`;

const ProxSaida = styled.div`
    display : ${props => props.mostrar? 'block' : 'none'};
    color: var(--destaque);
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--secundaria);
    padding: 10px;
    border-radius: 30px;
`;

export { PasseioDestaque, CardPasseio, Titulo, ProxSaida };