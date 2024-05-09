import styled from "styled-components"

const PasseioDestaque = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;
  flex-direction: row;
  margin-top: 4px;
`;

const CardPasseio = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
  border: 2px solid var(--destaque);
  padding: 1px;
  img{
    object-fit: cover;
    width: 100%;
  }
`;

const Titulo = styled.div`
    display : ${props => props.mostrar? 'block' : 'none'};
    position: absolute;
`;

const ProxSaida = styled.div`
    display : ${props => props.mostrar? 'block' : 'none'};
    position: absolute;
    bottom: 1rem;
`;

export { PasseioDestaque, CardPasseio, Titulo, ProxSaida };