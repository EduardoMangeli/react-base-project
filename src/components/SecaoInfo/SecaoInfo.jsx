import { SecaoInfoStyle } from "./Style";
import {Link} from "react-router-dom";
import SecaoGenerio from "../SecaoGenerico/SecaoGenerio";
import BotaoAvancarVoltar from "../BotaoAvancarVoltar/BotaoAvancarVoltar";

const infoImg = "imagens/icons/info.png"
const acessar = "imagens/icons/up-arrow.png"

const SecaoInfo = (props) => (
    <SecaoGenerio
    titulo="Informações"
    >
        <SecaoInfoStyle>

            <div className="container">
                <div className="tipo">
                    Clinica Dosimetria
                </div>

                <div className="info">
                    <div className="num">
                        <span>34</span> <div id="circulo-laranja"></div>Pedidos Abertos
                    </div>
                    <div className="num">
                        <span>134</span>  <div id="circulo-verde"></div>Pedidos Fechados
                    </div>
                </div>

                <BotaoAvancarVoltar></BotaoAvancarVoltar>

            </div>
        </SecaoInfoStyle>
    </SecaoGenerio>
)

export default SecaoInfo;