import styled from "styled-components";

const Bottom = styled.footer`
  padding: 4em 15em;
  background-color: var(--cinza);
  display: flex;
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;  // Distribui espaço entre os elementos
  align-items: center;            // Centraliza verticalmente
  margin: 0;

  a {
    text-align: left;
    padding: 0.5em 0.5em;
    margin: 0;
    color: var(--cinzaescuro);
    font-family: 'Lora', serif;
    font-size: small;
    display: flex;
    align-items: center; // Alinha ícones e texto verticalmente
    text-decoration: none;
    &:hover {
      color: var(--terciaria);
    }
  }

  img {
    margin-right: .3em; // Espaço entre ícone e texto
  }

  h3 {
    font-size: small;
    font-weight: normal;
    padding: .5em;
    text-align: left;
  }

  .colunaNav {
    padding: 0 8em;
    flex: 1; // Faz a coluna crescer e ocupar espaço disponível
  }

  .redes {
    padding: 0 8em;
    display: flex;
    flex-direction: column; // Organiza os links das redes sociais em coluna
  }

  .sociais {
    text-align: left;
  }

  @media (max-width: 768px) {
    flex-direction: column; // Muda para coluna em telas menores
    padding: 2em; // Reduz o padding em dispositivos móveis
    .colunaNav, .redes {
      padding: 1em 0;
    }
  }
`

export { Bottom };
