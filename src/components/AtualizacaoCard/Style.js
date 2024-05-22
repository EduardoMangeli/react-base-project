import styled from "styled-components";

const AtualizacaoCardStyle = styled.article`
    .container{
        display: grid;
        grid-template-areas:
            "icone id    linha"
            ".     acao  linha"
            ".     tempo linha"
        ;
        grid-template-columns: 20px 280px 5px;
        grid-template-rows: 20px 20px 20px;
        gap: 1px;
        background-color: white;
        border-radius: 20px;
    }
    
    .icone{
        grid-area: icone;
    }
    
    .id{
        grid-area: id;
    }
    
    .acao{
        grid-area: acao;
    }
    
    .tempo{
        grid-area: tempo;
    }
    
    .id, .acao, .tempo{
        margin-left: 5px;
        display: flex;
        justify-content: left;
        align-items: center;
    }
    
    .linha{
        grid-area: linha;
        border-left: 5px solid #023859FF;
    }
`;

export {AtualizacaoCardStyle};