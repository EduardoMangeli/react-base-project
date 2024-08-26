import { Link } from "react-router-dom";
import Base from "./Base";

const Protegida = (props) => {
  const Conteudo = () => (
    <>
    <h1>Página Privada, apenas para usuários logados</h1>
    <p>
    <Link to="/login">Faça Login</Link>
    </p>
    </>
  )

  return (
    <Base>
    {window.sessionStorage.getItem('accessToken')
    ? props.children
    : <Conteudo/>
    } 
    </Base>
  )
}

export default Protegida;