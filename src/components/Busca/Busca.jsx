import { BuscaEstilo } from "./Style";


const Busca = (props) => (
  <BuscaEstilo>
    <div className="busca">
        <div className="dropdown">
            <button className="dropbtn">{props.opcao}</button>
            <div className="dropdown-content">
                {props.opcoes}
            </div>
          </div>
          <div className="search-box">
            <input onChange={props.onChance} type="text" className="input-busca" placeholder="Digite para pesquisar..."/>
            <button
                onClick={props.onClick}
                name="button"
                type="submit"
                className="btn btn-flat"
            >
                <i className="fas fa-search"></i> Search
              </button>
          </div>
    </div>
  </BuscaEstilo>
)

export default Busca;
