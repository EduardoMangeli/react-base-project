import Cartao from "../components/Cartao/Cartao";
import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base"

const dados = [
    {
        titulo: "Um titulo do Array",
        texto: "Um texto grande de Array"
    },
    {
        titulo: "Um outro titulo de Array",
        texto: "Um outro texto de Array"
    }
]

const SobreNos = () => (
<Base>
<ListContainer>
{
    dados.map((ele, i) =>
    (
        <Cartao 
        key={i}
        titulo={ele.titulo}
        texto={ele.texto}/>
    ))
}
</ListContainer>
</Base>
);

export default SobreNos;