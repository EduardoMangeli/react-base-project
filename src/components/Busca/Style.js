import styled from "styled-components";

const BuscaEstilo = styled.article`
.dropbtn {
  cursor: pointer;
  width: 100px;
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

.dropdown:hover .dropdown-content {
  display: block;
}

.search-box {
  display: inline-block;
}

.input-busca {
  border-radius: 20px;
  padding-left: 0.4rem;
}
`

export { BuscaEstilo };
