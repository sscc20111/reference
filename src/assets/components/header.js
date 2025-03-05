import logo from "../../assets/image/logo.svg";



const Header = () => {

    return(
        <header className="header">
            <a>
                <h2 className="logo">
                    <img src={logo} alt="로고"/>
                </h2>
            </a>
            <div className="nav">
                <a href="/">Home</a>
                <a href="#sub">Work</a>
                <a href="/">Contact</a>
            </div>
        </header>
    )

};

export default Header