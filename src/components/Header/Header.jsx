import { Link } from "react-router-dom";
import { Top } from "./Style";
import Dropdown from "../Dropdown/Dropdown";
import Calibracoes from "../../pages/Calibracoes";

const Header = () => (
  <Top className="top-area">

  <div>
    <Link to="/">Home</Link>

    <Dropdown /></div>
    
  <div className="login">
    { window.sessionStorage.getItem('accessToken')
    ? <Link to="/logout">Logout</Link>
    : <Link to="/login">Login</Link>
    }
  </div>

    
  </Top>
)

export default Header;
