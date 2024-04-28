import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import ListContainer from "../components/ListContainer/ListContainer";
import PasseioCard from "../components/PasseioCard/PasseioCard";
import Rodape from "../components/Rodape/Rodape";
import Base from "./Base"
import passeio from "../data/passeios.json"

const Passeios = () => {

    return (
        <Base>
        <Banner titulo={"Passeios"} imagem={"url da imagem"}/>
        <div><Botao texto="Baixe o app"/></div>
        <ListContainer>
            {passeio.map(
                (e, index) => (
                <PasseioCard 
                    key={index}
                    nome={e.nome}
                    imagem={e.imagem}
                    data={e.data}
                    local={e.local}
                    hora={e.hora}
                    valor={e.valor}
                />
                )
                )
                }
        </ListContainer>
        <div><Botao texto="Saiba Mais"></Botao></div>
        </Base>
    )
  }
  
  export default Passeios;