import { Bloco } from "./Style";

const infoImg = "imagens/icons/info.png"
const Secao = (props) => (
  <Bloco>
    <div className="secao">
        <div className="header">
            <div className="nav1">
                <h1>{props.nome}</h1>
                <a className="infoButton">
                    <img src={infoImg}/>
                </a>
            </div>

            {props.navbar}

            <a className="acessarButton">
                <img src={props.acessar}/>
            </a>
        </div>
        <div className="content">
            {props.conteudo}
        </div>
    </div>
  </Bloco>
)

export default Secao;