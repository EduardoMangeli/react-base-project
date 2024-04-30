import styled from 'styled-components'

const Style = styled.article`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto', serif;
    }

    .Conteudo {
        font-size: 100%;
        margin-bottom: 48px;
        margin-right: 40em;
    }

    .Form-Contato {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-top: 48px;
        margin-bottom: 28px;
    }

    .Form-Contato-Escrito {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .Form-Contato-Escrito-Titulo {
        font-weight: 400;
        font-size: 34px;
    }

    .Form-Endereco {
        margin-top: 0.4px solid #ccc;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-top: 48px;
        margin-bottom: 28px
    }

    .Form-Endereco-Escrito {
        border-top: 0.4px solid black;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 32px;

    }

    .Form-Endereco-Escrito-Titulo {
        font-weight: 400;
        font-size: 34px
    }

    .ImgLogoForm {
        position: absolute;
        top: 25em;
        left: 40em;
        height: 512px;
        width: 512px;
        object-fit: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2em;
    }

    .textologo {
        font-weight: 400;
        font-size: 54px;
        font-display: center;
    }


`

export {Style}