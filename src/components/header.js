import { Link } from "react-router-dom";
import headerSVG from "../images/header.svg";
import { HiHome } from "react-icons/hi2";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={headerSVG} alt="header" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <HiHome />
           
            </Link>
          </li>
          <li>
            <Link to="/user/register">register</Link>
          </li>
          <li>
            <Link to="/user/login">login</Link>
          </li>
          <li>
            <Link to="/item/create">create post</Link>
          </li>
          <li>
            <Link to="/user/logout">logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
