import { Link } from "react-router-dom";    
import logo from "../../assets/image/logo.svg";
import { useLocation } from "react-router-dom";
import ScrollHandler from "../js/ScrollHandler";



const Header = () => {

    return(
        <header className="header">
            <Link to="/">
                <h2 className="logo">
                    <img src={logo} alt="로고"/>
                </h2>
            </Link>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/sub">Work</Link>
                <Link to="/#contact"
                      onClilck={() => ScrollHandler('contact')}
                >      
                      Contact
                </Link>
            </div>
        </header>
    )

};

export default Header