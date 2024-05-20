import styled from 'styled-components';

const StyleAbout = styled.article`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto', serif;
        overflow-x: hidden;
    }

    .Conteudo {
        font-size: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .Title {
        font-weight: 450;
        font-size: 34px;
    }

    .SubTitle {
        font-weight: 400;
        font-size: 20px;
    }

    .Conteudo-Inicio {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-top: 60px;
        margin-bottom: 30px;
        margin-bottom: 30px;
        margin-right: 20em;
    }

    .Conteudo-Inicio-Escrito {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 32px;
        margin-top: 60px;
        margin-bottom: 30px;
        margin-left: 20em;
    }

    ul {
        list-style-type: none;
    }

    .Conteudo-Membros-Escrito {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100vw;
    }

    .Conteudo-Membros-Escrito-Lista {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        text-align: center;
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
        justify-content: center;
    }

    .Conteudo-Equipe-Escrito {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 32px;
        margin-top: 60px;
        margin-bottom: 30px;
    }

    .Conteudo-Equipe-Escrito-Professores {
        border-top: 0.4px solid black;
        text-align: center;
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
        text-align: center;
        gap: 32px;
        margin-bottom: 30px;
    }

    .Conteudo-Equipe-Escrito-Empresa {
        border-top: 0.4px solid black;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        text-align: center;
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
        width: 100vw;
    }

    .Conteudo-Devs-Escrito {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-top: 0.4px solid black;
        padding-top: 30px;
        gap: 32px;
        width: 70vw;
    }

    .Conteudo-Devs-Escrito-Lista {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        text-align: center;
        gap: 32px;
        margin-top: 60px;
        margin-bottom: 60px;
        margin-left: 20em;
        margin-right: 20em;
    }





`

export { StyleAbout }