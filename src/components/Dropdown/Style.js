import styled from 'styled-components'

const Button = styled.button`
body{
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: var(--secundaria);
}

.dropdown {
  display: inline-block;
  position: relative;
  background-color: var(--secundaria);
}

p{
  border:none;
  border-radius:5px;
  font-size:18px;
  cursor:pointer;
  color: var(--background);
}

p:hover{
  background-color:#ddd;
}

.dropdown-options {
  display: none;
  position: absolute;
  overflow: auto;
  background-color:#fff;
  border-radius:5px;
  box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.4);
}

.dropdown:hover .dropdown-options {
  display: block;
}

.dropdown-options a {
  display: block;
  color: #000000;
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