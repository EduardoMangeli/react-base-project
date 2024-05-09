import { Link } from "react-router-dom";
import { Top } from "./Style";
import Dropdown from "../Dropdown/Dropdown";
import Calibracoes from "../../pages/Calibracoes";

const Header = () => (
  <Top>

  <div>
    <Link to="/">Home</Link>
    <Link to="/calibracoes">Calibrações</Link>
    <Dropdown /></div>
    
    
    { window.sessionStorage.getItem('accessToken')
    ? <Link to="/logout">Logout</Link>
    : <Link to="/login">Login</Link>
    }

  <div class="user">Ola, User2103</div>
    
  </Top>
)

export default Header;
