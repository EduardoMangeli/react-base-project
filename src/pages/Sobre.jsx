import NovoComponente from "../components/NovoComponente/NovoComponente";
import Cartao from "../components/cartao/cartao";
import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base";

const meusDados = [
    {
        titulo: "Um titulo",
        texto: "Um texto"
    },
    {
        titulo: "Outro titulo",
        texto: "Outro texto"
    }
]

const Sobre = () => 
    (<Base>
        <h1>Sobre Nós</h1>
        <NovoComponente/><br />
        <p>Um texto</p>
            <ListContainer>
                {
                    meusDados.map( (ele,i) => (
                        <Cartao
                            key={i}
                            titulo={ele.titulo}
                            texto={ele.texto}
                        />
                    ))
                }
            </ListContainer>
    </Base>)

export default Sobre;