import { BuscaEstilo } from "./Style";

const BuscaEstilo = () => (
  <Busca>
    <div class="busca">
        <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
              <a href="#">Usuario</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div class="search-box">
            <input type="text" class="input-busca" placeholder="Digite para pesquisar...">
            <button name="button" type="submit" class="btn btn-flat">
                <i class="fas fa-search"></i> Search
              </button>
          </div>
    </div>
  </Busca>
)

export default BuscaEstilo;
