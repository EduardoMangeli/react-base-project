import styled from "styled-components";

const BuscaEstilo = styled.article`

    button {
        font-weight: bold;
        background-color: white;
    }
    
    .busca {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;
        gap: 20px;
    }
    
    .dropbtn {
  cursor: pointer;
        display: flex;
        justify-content: space-between;
        width: 150px;
        height: 20px;
}

.dropdown {
  position: relative;
  display: inline-block;
    
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 0.5rem 0.3rem;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}
    
    .dropdown-content > button {
        background-color: #f1f1f1;
        border: none;
        cursor: pointer;
        width: 100%;
        text-align: left;
        padding: 0.5rem 0.3rem;
    }
    
.dropdown:hover .dropdown-content {
  display: block;
}

.search-box {
  display: flex;
    justify-items: center;
    align-items: center;
}
    
    .search-box input {
        width: 300px;
    }

    .search-box button {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        position: relative;
        left: -15px;
    }
    
    .search-box button:hover {
        background-color: #f1f1f1;
    }

.input-busca {
  border-radius: 20px;
  padding-left: 0.4rem;
}
`

export { BuscaEstilo };
