import { Container, Texto, Titulo } from "./style";

const Cartao = ( props ) => (
    <Container>
        <Titulo>{props.titulo}</Titulo>
        <Texto>Um texto que deveria ser grande</Texto>
    </Container>
);

export default Cartao;