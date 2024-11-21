import Base from "./Base";
import Cartao from "../components/Cartao/Cartao";
import ListContainer from "../components/ListContainer/ListContainer";

const dados = [
    {
        titulo: "Um titulo do Array",
        texto: "Um texto grande do Array."
    },
    {
        titulo: "Um outro titulo do Array",
        texto: "Um outro texto do Array."
    }
]

const SobreNos = () => {

return (
<Base>
<ListContainer>
   {dados.map((ele, i) =>
   (
    <Cartao 
    key={i}
    titulo={ele.titulo}
    texto={ele.texto}
    />
   ))}
</ListContainer>
</Base>
);
}
export default SobreNos;