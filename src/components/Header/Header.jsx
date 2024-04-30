import { Link } from "react-router-dom";
import { Top } from "./Style";
import Dropdown from "../Dropdown/Dropdown";

const Header = () => (
  <Top>

    <Link to="/">Dosimagem</Link>
    <Dropdown />
    
    { window.sessionStorage.getItem('accessToken')
    ? <Link to="/logout">Logout</Link>
    : <Link to="/login">Login</Link>
    }
    
  </Top>
)

export default Header;
