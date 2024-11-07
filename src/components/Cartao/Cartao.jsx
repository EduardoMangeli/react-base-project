import { Container, Texto, Titulo } from "./Style";

const Cartao = (props) => (
    <Container>
        <Titulo>{props.titulo}</Titulo>
        <Texto>{props.texto}</Texto>
    </Container>
)

export default Cartao;