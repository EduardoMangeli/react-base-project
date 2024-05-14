import styled from 'styled-components'

const Button = styled.a`


.dropdown {
  display: inline-block;
  position: relative;
  background-color: var(--secundaria);
  border:none;
}

span{
  border:none;
  cursor:pointer;
  color: var(--background);
}

p:hover{
  background-color:#ddd;
}

.dropdown-options {
  display: none;
  position: absolute;
  margin-left:-90px;
  overflow: auto;
  background-color: var(--secundaria);
  border:none;
  box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.4);
}

.dropdown:hover .dropdown-options {
  display: block;
}

.dropdown-options a {
  display: block;
  
  padding: 5px;
  text-decoration: none;
  padding:20px 40px;
}

.dropdown-options a:hover {
  color: #0a0a23;
  background-color: #ddd;
  border-radius:5px;
}
`

export {Button}