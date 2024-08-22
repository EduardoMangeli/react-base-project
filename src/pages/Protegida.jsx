import { Link } from "react-router-dom";
import Base from "./Base";

const Protegida = (props) => {
  const Conteudo = () => (
    <>
    <h1>Página Privada</h1>
    <Link to="/login">Faça Login</Link>
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