import styled from "styled-components";

const DashboadLayoutStyle = styled.div`
    .container{
        display: grid;
        grid-template-areas:
            "solicitacao solicitacao"
            "calibracao informacao"
            "atualizacao atualizacao"
        ;
        gap: 20px;
        padding: 10px;
    }
    
    .solicitacao{
        grid-area: solicitacao;
    }
    
    .calibracao{
        grid-area: calibracao;
    }
    
    .informacao{
        grid-area: informacao;
        height: 100%;
    }
    
    .atualizacao{
        grid-area: atualizacao;
    }
    
`;

export {DashboadLayoutStyle};
