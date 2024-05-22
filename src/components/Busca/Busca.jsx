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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
                </button>
            </div>
        </div>
    </div>
  </BuscaEstilo>
)

export default Busca;
