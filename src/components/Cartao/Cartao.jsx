import { Container, Texto, Titulo } from "./style";

const Cartao = (props) => (
     <Container>
          <Titulo>{props.titulo}</Titulo>
          <Texto>{props.texto}</Texto>
     </Container>
)

export default Cartao