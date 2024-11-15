import styled from "styled-components";

const Sobre = styled.div`
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    text-align: center;
`;

const Bloco = styled.div`
    background-color: var(--secundaria);
    color: var(--background);
    padding: 20px;
    margin-bottom: 30px;
    text-align: center;

    h1 {
        font-size: 2rem;
        margin: 0;
    }
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const Card = styled.div`
    background-color: var(--background);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: calc(50% - 20px); 
    max-width: 300px;          
    padding: 20px;
    text-align: center;
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-5px);
    }

    h3 {
        color: var(--primaria);
        font-size: 1.2rem;
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        margin-bottom: 15px;
    }

    p {
        color: var(--primaria);
        font-size: 1rem;
        margin: 5px 0;
    }
    @media (max-width: 400px) {
        width: 100vw;      
        margin: 0;         
        padding: 15px;     
        font-size: 1.5rem; 
    }
`;

export { Sobre, Container, Card, Bloco };
