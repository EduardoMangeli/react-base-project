import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import Base from "./Base"

const Anuncie = () => {

    return (
        <Base>
            <div id="cabeçalho_about">
                <h1>Fale Conosco</h1>
            </div>

            <div id="body_about">
                <h2>Planos de Anuncio</h2>
                <p>Divulgue o seu negocio no passeio carioca</p>

                <h3>Plano Bronze</h3>
                <p>Contaremos a historia do seu estabelecimento e colocaremos em destaque do nosso mapa</p>

                <h3>Plano Ouro</h3>
                <p> Plano Bronze + inclusão do “Viva essa experiencia”, com um link para a sua rede social ou um QR code, que podera incluir um desconto ou um premio para o turista ou morador da cidade</p>

                <h3>Plano Diamante</h3>
                <p> Plano Bronze + Plano Prata + inclusão do seu estabelecimento na gameficacao do aplicativo, com possibilidade do turista realizar checkin presencial no local e divulgar em suas redes socias </p>

                <h4>Plano Bronze + Plano Prata + Plano Ouro + inclusão do seu estabelecimento em um dos passeios presenciais guiados</h4>

                <p>Consulte valores e tire duvidas</p>

                <Botao texto="Saiba Mais"></Botao>
            </div>
        </Base>
      
    )
  }
  
  export default Anuncie;