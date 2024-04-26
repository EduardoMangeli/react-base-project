import Base from "./Base"
import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import Mapa from "../components/Mapa/Mapa";

const PageMapa = () => {

  return (
    <Base>
      <Banner titulo={"Mapa"} imagem={""}/>
      <div className="texto-mapa">
        <p>Se você quer conhecer um pouco mais da história do Rio caminhando por suas ruas, vielas e avenidas, você chegou ao lugar certo!</p>
        <p>Aqui você encontra informações sobre mais de 50 pontos históricos e culturais da cidade para programar a sua visita. Você pode estudá-los antes de sair de casa, ou então, se estiver caminhando pela rua e se deparar com algum edifício histórico ou ponto relevante da cidade, clicar no ícone e saber mais sobre ele.</p>
        <p>A função de “geolocalização” está disponível, portanto, consiguira interagir com alguns dos pontos registrado no aplicativo Passeio Carioca, você terá todas as informações disponíveis.
        </p>
      </div>
      <div className="containerMapa">
        <Mapa/>
      </div>

      <div><Botao texto="Baixe o app"/></div>
    </Base>
  )
}

export default PageMapa;
