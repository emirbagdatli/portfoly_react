import logo from "../assets/emircodes_logo.png";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="max-w-36" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/emir-bağdatlı-274b4218a/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.github.com/emirbagdatli" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
                <a href="https://www.instagram.com/emir.bgt" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;