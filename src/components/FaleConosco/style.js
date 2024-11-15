import styled from "styled-components";

const Fale = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(240, 240, 240);
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: auto;

    h1 {
        color: var(--Secundaria);
        margin-bottom: 10px;
    }

    h4 {
        color: var(--Primaria);
        margin-bottom: 20px;
    }

    .contact-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px; 
    }

    .contact-item {
        background-color: white;
        padding: 15px;
        border: 2px solid var(--detalhe);
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s;

        &:hover {
            transform: translateY(-2px);
        }

        h5 {
            margin: 0;
            color: var(--Secundaria);
        }

        p {
            margin: 5px 0;
            color: #333;
        }

        a {
            color: var(--Primaria);
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }

        @media (max-width: 400px) {
        width: 100vw;      
        margin: 0;         
        padding: 15px;     
        font-size: 1.5rem; 
    }
    }
`
const Bloco = styled.div`
    background-color: var(--secundaria);
    color: var(--background);
    padding: 20px;
    margin-bottom: 30px;
    text-align: center;
    width: 1000%;
    `;

export { Fale, Bloco };