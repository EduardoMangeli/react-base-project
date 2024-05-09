import styled from "styled-components"

const PasseioDestaque = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 75%;
  flex-direction: row;
  padding: 1px;
  margin: auto;
`;

const CardPasseio = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
  border: 2px solid var(--destaque);
  padding: 1px;
`;

export { PasseioDestaque, CardPasseio };