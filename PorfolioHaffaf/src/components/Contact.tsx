import '../assets/style/Contact.scss'
import arrowDown from "../assets/img/arrowDown.svg";

const Header = () => {
    return (
        <section className="contact-section">
            <div className="main-title-contact">
                <h2>WEB DEVELOPER FRONT-END</h2>
            </div>
            <div className="contact-links">
                <div className="main-resume">
                    <div className="title-resume">
                        <h3>MY RESUME</h3>
                        <img src={arrowDown} alt="arrow icon" />
                    </div>
                    <div className="resume-link">
                        <p>O.HAFFAF.RESUME</p>
                    </div>
                </div>
                <div className="main-contact">
                    <div className="title-contact">
                        <h3>CONTACT ME</h3>
                        <img src={arrowDown} alt="arrow icon" />
                    </div>
                    <div className="contact-link">
                        <p>+33 59 55 52 19</p>
                    </div>
                    <div className="contact-link2">
                        <p>O.HAFFAF.DEV@GMAIl.COM</p>
                    </div>
                    <div className="socials-link">
                        <div className="linkedin-link">
                            <h3>LINKEDIN</h3>
                            <img src={arrowDown} alt="arrow icon" />
                        </div>
                        <div className="github-link">
                            <h3>GITHUB</h3>
                            <img src={arrowDown} alt="arrow icon" />
                        </div>
                        <div className="whatsapp-link">
                            <h3>WHATSAPP</h3>
                            <img src={arrowDown} alt="arrow icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-footer">
                <h1>HAFFAF OUSSAMA</h1>
                <p>© All right reserved. 2025 Haffafoussama</p>
            </div>
        </section>
    );
};

export default Header;
