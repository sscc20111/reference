import { Link } from "react-router-dom";    
import logo from "../../assets/image/logo.svg";



const Header = () => {
    const handleScroll = () => {
        setTimeout(() => {
            if (window.myElementRef?.current) {
                window.myElementRef.current.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('React 요소에 접근할 수 없습니다.');
            }
        }, 10);
    };

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
                <Link to="/" onClick={handleScroll}>Contact</Link>
            </div>
        </header>
    )

};

export default Header