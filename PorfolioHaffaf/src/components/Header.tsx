import '../assets/style/header.scss'
import arrow from '../assets/img/arrowUp.svg'

const Header = () => {
    return (
        <nav className="main-nav">
            <div className="website-logo">
                <h3>HAFFAF</h3>
                <h3>OUSSAMA</h3>
            </div>
            <div className="website-nav">
                <ul>
                    <li>
                        <p>ABOUT ME</p>
                    </li>
                    <li>
                        <p>WORKS</p>
                    </li>
                    <li>
                        <p>SERVICE</p>
                    </li>
                </ul>
            </div>
            <div className="website-contact">
                <p>CONTACT ME</p>
                <img src={arrow} alt="arrow icon" />
            </div>
        </nav>
    );
};

export default Header;
