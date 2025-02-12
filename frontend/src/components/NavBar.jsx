import './NavBar.css';
import {useState} from "react";
import {Link} from "react-router-dom";
import Logo from '../assets/logo.png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src={Logo} alt="Logo" className="logo-img"/>
                    <Link to="/">Go Ducky</Link>
                </div>
                {/* Hamburger Menu */}
                <div className="burger" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </div>
                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/articles">Articles</Link></li>
                    <li><Link to="/how-to">How To?</Link></li>
                    <li><Link to="/code-editor">Code Editor</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;