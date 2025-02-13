import './NavBar.css';
import {useState} from "react";
import {NavLink, Link} from "react-router-dom";
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
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/articles">Articles</NavLink></li>
                    <li><NavLink to="/how-to">How To?</NavLink></li>
                    <li><NavLink to="/code-editor">Code Editor</NavLink></li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;