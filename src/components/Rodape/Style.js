import styled from "styled-components";

const Bottom = styled.footer`
  padding: 2em 10em;
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

  .containerLogo{
    display: flex;
    flex: 1;
    flex-grow: 1.5;
    margin-left: 0;
    /* max-width: 50%; */
    justify-content: center;
    align-items: center;
    background: none;
    transition: .25s;
    &:hover{
      background: none;
      transform: scale(1.05);
      text-decoration: none !important;
    }
    .nomeEmpresa{
    color: var(--destaque);
    /* font-size: 1.1rem; */
    text-align: left;
    padding: 20px;
    }
    img{
      max-width: 6rem;
      margin-right: -30px;
    }
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
    width: 100%;
    justify-content: right;
    flex: 1; // Faz a coluna crescer e ocupar espaço disponível
    flex-wrap: wrap;
  }

  .links-pages {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex: 1;
    /* max-width: 50%; */
    margin: 0 10em;
    row-gap: 5em;
    column-gap: 2em;
    /* padding: 0.8em 2em; */
    //align-items: flex-start; /* Alinha os itens ao topo */
  }

  .explore, .contatos, .redes {
    flex: 1; // Faz as colunas crescerem e ocuparem espaço disponível
    white-space: nowrap; /* Evita que o texto quebre em mais de uma linha */
  }

  /* .redes {
    padding: 1em 0;
    display: flex;
    flex-direction: column; // Organiza os links das redes sociais em coluna
  } */

  /* .contatos {
    padding-left: 3em;
  } */

  .sociais {
    text-align: left;
  }

  small{
    color: var(--destaque);
    padding: 0.5rem;
    font-size: 0.7rem;
  }

  .divider {
    width: 100%; /* Define a largura como 100% para abranger toda a largura da página */
    border: none; /* Remove a borda padrão */
    border-top: 1px solid var(--detalhe); /* Adiciona uma borda superior para criar a linha divisória */
  }

  .footerEnd {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .bottomLinks {
    display: flex;
    flex-wrap: wrap;
  }

  /* @media (min-width: 1024px) {
    padding: 0.5 15em; // Reduz o padding em dispositivos móveis
    .colunaNav {
      padding: 0.8em;
      font-size: 1rem;
    }
     .redes {
      padding: 0.8em 2em;
    } 
  } */
`

export { Bottom };
