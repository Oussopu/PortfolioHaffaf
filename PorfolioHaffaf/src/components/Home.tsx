import '../assets/style/home.scss'
import me from '../assets/img/me.jpeg'
import arrow from "../assets/img/arrowDown.svg";

const Home = () => {
    return (
        <div className="home-main">
            <div className="main-title">
                <div className="job-title">
                    <h1 className="title">WEB DEVELOPER</h1>
                    <p className="title-speciality">FRONT-END</p>
                </div>
                <div className="title-location">
                    <div className="visible-title-location">
                        <h2>BASED</h2>
                        <h2>IN</h2>
                        <h2>FRANCE</h2>
                    </div>
                    <div className="invisible-title-location">
                        <p>FRONT-END</p>
                    </div>
                </div>
            </div>
            <div className="main-picture">
                <div className="grey-background"></div>
                <img src={me} alt="picture of me" />
                <div className="skills">
                    <h2>/ REACT</h2>
                    <h2>/ TYPESCRIPT</h2>
                    <h2>/ TAILWIND</h2>
                    <h2>/ SASS</h2>
                </div>
            </div>
            <div className="main-description">
                <div>
                    <div className="description-contact">
                        <p>CONTACT ME</p>
                        <img src={arrow} alt="arrow icon" />
                    </div>
                    <div className="description-contact-link">
                        <p>O.HAFFAF.DEV@GMAIL.COM</p>
                    </div>
                </div>
                <div>
                    <div className="description-work">
                        <p>LAST WORK</p>
                        <img src={arrow} alt="arrow icon" />
                    </div>
                    <div className="description-work-link">
                        <p>LIZZY'SWORLD.COM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
