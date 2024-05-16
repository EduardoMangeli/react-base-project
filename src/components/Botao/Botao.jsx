import CenteredButton from "./Style";
import { criarWhatsAppLink } from "../../utils/utils.js";

const MeuBotao = ({ texto, rota, isWhatsApp, numeroCelular, mensagem }) => {
  const href = isWhatsApp ? criarWhatsAppLink(numeroCelular, mensagem) : rota;
  // Se não for WhatsApp, o link é o que foi passado como parâmetro. Se for, o link é criado automaticamente com a função createWhatsAppLink
  // Botões antigos funcionarão normalmente sem precisar alterar o código.
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