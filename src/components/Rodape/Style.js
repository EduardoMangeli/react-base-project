import styled from "styled-components";

const Bottom = styled.footer`
  padding: 2em;
  background-color: var(--primaria);
  display: flex;
  bottom: 0;
  flex-direction: column;
  justify-content: center;  // Distribui espaço entre os elementos
  align-items: center;            // Centraliza verticalmente
  margin: 0 !important;
  margin-top:20px;


  a {
    color: var(--destaque);
    text-align: left;
    padding: 0.5em 0.5em;
    margin: 0;
    font-family: 'Lora', serif;
    font-size: small;
    display: flex;
    align-items: center; // Alinha ícones e texto verticalmente
    text-decoration: none;
    &:hover {
      color: var(--detalhe);
    }
  }

  .socialicons {
    margin-right: .3em; // Espaço entre ícone e texto
  }

  h3 {
    font-size: small;
    font-weight: bold;
    padding: .5em;
    text-align: left;
    color: var(--destaque);
  }

  .colunaNav {
    font-size: 0.2rem;
    padding: 1em 0;
    display: flex;
    flex: 1; // Faz a coluna crescer e ocupar espaço disponível
  }

  .linkspages {
    display: flex;
    flex-direction: column;
    padding: 0.8em 2em;
    //align-items: flex-start; /* Alinha os itens ao topo */
  }

  .left-column, .right-column {
    flex: 1; // Faz as colunas crescerem e ocuparem espaço disponível
    white-space: nowrap; /* Evita que o texto quebre em mais de uma linha */
  }

  .right-column {
    padding-left: 3em;
  }

  .columns {
    display: flex;
    flex-direction: row; // Organiza as colunas em linha
    justify-content: space-between; // Distribui espaço entre as colunas
  }

  .redes {
    padding: 1em 0;
    display: flex;
    flex-direction: column; // Organiza os links das redes sociais em coluna
  }

  .sociais {
    text-align: left;
  }

  small{
    color: var(--destaque)
  }

  @media (min-width: 1024px) {
    padding: 0.5 15em; // Reduz o padding em dispositivos móveis
    .colunaNav {
      padding: 0.8em;
      font-size: 1rem;
    }
    .redes {
      padding: 0.8em 2em;
    }
  }
`

export { Bottom };
