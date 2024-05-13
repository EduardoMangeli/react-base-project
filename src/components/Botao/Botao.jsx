import CenteredButton from "./Style";

const MeuBotao = ({ texto, rota }) => {
    return (
      <>
        <a href={ rota } target="_blank" rel="noopener noreferrer">
        <CenteredButton>
          { texto }
        </CenteredButton>
        </a>
      </>
    );
};
  
  export default MeuBotao;