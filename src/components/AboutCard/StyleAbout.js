import styled from 'styled-components';

const StyleAbout = styled.article`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto', serif;
        
    }

    .Conteudo {
        font-size: 100%;
    }
    
    .Title {
        font-weight: 450;
        font-size: 34px;
    }

    .SubTitle {
        font-weight: 400;
        font-size: 20px;
    }

    .Title-Membros {
        font-weight: 400;
        font-size: 20px;
        text-align: left;
        margin-left: 15.5em;
    }

    .Conteudo-Inicio {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 30px;
        margin-right: 20em;
    }

    .Conteudo-Inicio-Escrito {
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin-bottom: 30px;
    }

    .Botao {
        margin-left: 50em;
        margin-right: 10em;
    }

    ul {
        list-style-type: none;
    }

    .Conteudo-Inicio {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-top: 60px;
        margin-bottom: 30px;
    }

    .Conteudo-Inicio-Escrito {
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: flex-start;
        margin-top: 60px;
        margin-bottom: 30px;
        margin-left: 20em;
    }


    .Conteudo-Membros-Escrito-Lista {
        display: flex;
        justify-content: space-around;
        gap: 32px;
        margin-top: 60px;
        margin-bottom: 60px;
        margin-left: 20em;
        margin-right: 20em;
    }

    .Conteudo-Equipe {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-right: 20em
    }

    .Conteudo-Equipe-Escrito {
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin-top: 60px;
        margin-bottom: 30px;
    }

    .Conteudo-Equipe-Escrito-Professores {
        border-top: 0.4px solid black;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin-bottom: 30px;
    }

    .Conteudo-Equipe-Escrito-Pesquisadores {
        border-top: 0.4px solid black;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin-bottom: 30px;
    }

    .Conteudo-Equipe-Escrito-Empresa {
        border-top: 0.4px solid black;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin-bottom: 30px;
    }

    .Conteudo-Devs {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-top: 40px;
        margin-bottom: 20px;
    }

    .Conteudo-Devs-Escrito {
        border-top: 0.4px solid black;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .Conteudo-Devs-Escrito-Lista {
        margin-right: 40em;
        margin-bottom: 38px;
    }





`

export { StyleAbout }