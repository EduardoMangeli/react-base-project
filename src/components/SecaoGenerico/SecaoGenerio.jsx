import { SecaoGenericoStyle } from "./Style";
import {Link} from "react-router-dom";

const SecaoGenerio = (props) => (
    <SecaoGenericoStyle>
        <div className="secao">
            <div className="header">
                <div className="nav1">
                    <h1>{props.titulo}</h1>
                </div>
            </div>
            {props.children}
        </div>
    </SecaoGenericoStyle>
)

export default SecaoGenerio;