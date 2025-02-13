import "./Footer.css";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section */}
                <div className="footer-left">
                    {/*<h2>GoDucky.in</h2>*/}
                    <p>© 2025 GoDucky All rights reserved.</p>
                </div>

                {/* Center Section */}
                <nav className="footer-nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/articles">About</Link></li>
                        <li><Link to="/how-to">How To</Link></li>
                        <li><Link to="/code-editor">Code Editor</Link></li>
                    </ul>
                </nav>

                {/* Right Section */}
                <div className="footer-right">
                    <p>Contact: <a href="mailto:anoopksharma22@gmail.com">anoopksharma22@gmail.com</a></p>
                    <div className="footer-socials">
                        <p>Social Links:</p>
                        <div>
                            <a href="https://itsanoop.in" target="_blank"
                               rel="noopener noreferrer">
                                <CiLink className="icon" />
                            </a>

                            <a href="https://www.linkedin.com/in/anoopkumarsharma/" target="_blank"
                               rel="noopener noreferrer">
                                <CiLinkedin className="icon"/>
                            </a>
                            <a href="https://github.com/anoopksharma22" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;