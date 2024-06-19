import styled from "styled-components";

const Card = styled.div`
  display: flex;
  margin: 20px;
  padding: 10px;
  min-width: 10%;
  height: 60%;
  background-color: var(--background);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.171);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }

  #tipo {
    display: flex;
    flex-direction: column;
    gap: 25%;
    height: 90%;
    font-family: 'Century Gothic', sans-serif;
    font-weight: light;
  }

  #tipo i {
    font-size: 13px;
  }

  #datadiv {
    font-size: 13px;
  }

  .container-card {
    display: flex;
    justify-content: left;
    flex-direction: column;
  }
  .dataContainer{
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .dataContainer i{
    margin-top: 2px;
  }

  .ID {
    font-weight: bold;
    color: var(--detalhes);
    font-family: 'Century Gothic', sans-serif;
    font-weight: light;
  }

  .icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    overflow: hidden;
    background-color: var(--botoes);
    position: absolute;
    margin-top: 92px;
    color: #fafafa;
    margin-left: 80px;
  }
  .icon i{
    margin: 25% 0;
  }
`;

export { Card };
