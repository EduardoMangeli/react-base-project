import Cartao from "../components/Cartao/Cartao";
import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base";

const meusDados = [
{
titulo:"um tittulo",
texto: "um texto grande."

},
{
    titulo:"outro titulo",
    texto:"outro texto"
}

]

const SobreNos = () => (
    <>

<Base>
<ListContainer>
    { 
meusDados.map((ele,i) => (
    <Cartao
    key={i}
    titulo={ele.titulo}
    texto={ele.titulo}
    />
    ))

}

</ListContainer>
</Base>

</>
);


export default SobreNos;

