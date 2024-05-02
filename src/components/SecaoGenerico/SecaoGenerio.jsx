import { SecaoGenericoStyle } from "./Style";

const SecaoGenerio = (props) => (
  <SecaoGenericoStyle>
    <div className="secao">
        {props.children}
    </div>
  </SecaoGenericoStyle>
)

export default SecaoGenerio;