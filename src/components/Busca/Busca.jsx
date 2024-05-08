import { BuscaEstilo } from "./Style";


const Busca = (props) => (
  <BuscaEstilo>
    <div className="busca">
        <div className="dropdown">
            <button className="dropbtn">
                <span>
                    {props.opcao}
                </span>
                <span>
                    ▼
                </span>
            </button>
            <div className="dropdown-content">
                {props.opcoes}
            </div>
          </div>
        <div className="search-box">
            <div>
                <input onChange={props.onChance} type="text" className="input-busca" placeholder="Digite para pesquisar..."/>
            </div>

            <div>
                <button
                    onClick={props.onClick}
                    name="button"
                    type="submit"
                    className="btn btn-flat"
                >
                    <i className="fas fa-search"></i> Go
                </button>
            </div>
        </div>
    </div>
  </BuscaEstilo>
)

export default Busca;
