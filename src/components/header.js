import { Link } from "react-router-dom"
import headerSVG from "../images/header.svg"

const Header = () => {
    return (
        <header>
                 <div><Link to="/"><img src={headerSVG} alt="header"/></Link></div>
            <nav>
                <ul>
                    <li><Link to="/user/register">register</Link></li>
                    <li><Link to="/user/login">login</Link></li>
                    <li><Link to="/item/create">create post</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header