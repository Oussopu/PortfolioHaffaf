import '../assets/style/home.scss'
import '../assets/style/about.scss'
import '../assets/style/works.scss'
import me from '../assets/img/me.jpeg'
import arrowDown from "../assets/img/arrowDown.svg";

const Home = () => {
    return (
        <>
            <section className="home-main">
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
                            <img src={arrowDown} alt="arrow icon" />
                        </div>
                        <div className="description-contact-link">
                            <p>O.HAFFAF.DEV@GMAIL.COM</p>
                        </div>
                    </div>
                    <div>
                        <div className="description-work">
                            <p>LAST WORK</p>
                            <img src={arrowDown} alt="arrow icon" />
                        </div>
                        <div className="description-work-link">
                            <p>LIZZY'SWORLD.COM</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-main">
                <div className="title-about">
                    <h1>ABOUT ME</h1>
                </div>
                <div className="text-about">
                    <p className="about-text-one">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
                        n reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p className="about-text-two">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
                        n reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p className="about-text-three">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
                        n reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </section>
            <section className="works-main">
                <div className="title-works">
                    <h1>WORKS</h1>
                    <img src={arrowDown} alt="arrow icon" />
                </div>
                <div className="works-slider">
                    <div className="first-work">
                        <div className="number-work">
                            <p>01</p>
                        </div>
                        <div className="name-work">
                            <p>LIZZY'SWORLD</p>
                        </div>
                    </div>
                    <div className="second-work">
                        <div className="number-work">
                            <p>02</p>
                        </div>
                        <div className="name-work">
                            <p>TEST</p>
                        </div>
                    </div>
                    <div className="third-work">
                        <div className="number-work">
                            <p>03</p>
                        </div>
                        <div className="name-work">
                            <p>TEST2</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
