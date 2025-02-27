import navbarStyle from './navbar.module.css'
import cardImage from '../assets/logo.jpg';

function Navbar() {
    return(
        <nav>
            <div className={navbarStyle.navbar}>
                <div className={navbarStyle.logoName}>
                    <img src={cardImage} alt="logo" className={navbarStyle.logo} />
                    <h3>Welcome to Login Page</h3>
                </div>
                <div className={navbarStyle.tabs}>
                    <ul className={navbarStyle.tab}>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Service</li>
                        <li>About</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar