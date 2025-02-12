import "./Footer.css";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section */}
                <div className="footer-left">
                    <h2>GoDucky.in</h2>
                    <p>© 2025 Anoop Sharma. All rights reserved.</p>
                </div>

                {/* Center Section */}
                <nav className="footer-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>

                {/* Right Section */}
                <div className="footer-right">
                    <p>Contact: <a href="mailto:anoopksharma22@gmail.com">anoopksharma22@gmail.com</a></p>
                    <div className="footer-socials">
                        <a href="https://www.linkedin.com/in/anoopkumarsharma/" target="_blank"
                           rel="noopener noreferrer">
                            <CiLinkedin className="icon" />
                        </a>
                        <a href="https://github.com/anoopksharma22" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;