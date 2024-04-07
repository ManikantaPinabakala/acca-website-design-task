import { IoMdMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import './index.css'

const Header = () => (
    <div className="app-header">
        <div className="logo-container">
            <IoMdMenu className="menu-icon" />
            <h1 className="website-name">IndigoLearn</h1>
        </div>

        <div className="header-sections-container">
            <h1 className="header-section">Buy Courses</h1>
            <h1 className="header-section">Programs</h1>
            <h1 className="header-section">Free Resources</h1>
            <h1 className="header-section">Free Courses</h1>
        </div>

        <button className="login-button">
            <FaUserCircle className="login-logo" />
            <p className="login-text">Log In/Sign Up</p>
        </button>
    </div>
)

export default Header