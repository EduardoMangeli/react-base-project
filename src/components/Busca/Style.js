import styled from "styled-components";

const BuscaEstilo = styled.article`

    button {
        background-color: #f3f3f4;
        border-radius: 8px;
        border: none;
        cursor: pointer;
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
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 190px;
}
    
    .search-box input {
      width: 100%;
      height: 40px;
      line-height: 28px;
      padding: 0 1rem;
      padding-left: 1.0rem;
      border: 2px solid transparent;
      border-radius: 8px;
      outline: none;
      background-color: #f3f3f4;
      color: #0d0c22;
      transition: .3s ease;
    }

    .search-box input::placeholder {
      color: #9e9ea7;
    }

    .search-box input:focus, search-box input:hover {
      outline: none;
      border-color: #002D55;
      background-color: #fff;
      box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);

    .search-box div svg {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        position: relative;
        left: -15px;
    }
    
    .search-box button:hover, search-box button:focus {
        background-color: #fff;
    }

.input-busca {
  border-radius: 20px;
  padding-left: 0.4rem;
}
`

export { BuscaEstilo };
