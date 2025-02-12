import './NavBar.css';
import {useState} from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="navbar">
                <div className="logo">Go Ducky</div>
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