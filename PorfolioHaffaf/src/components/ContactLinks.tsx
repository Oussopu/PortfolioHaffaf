import Text from "./Text.tsx";
import arrow from "../assets/img/arrowDown.svg";

const ContactLinks =() => (
    <div className="contact-links">
        <div className="main-resume">
            <div className="text-arrow">
                <Text
                    name="MY RESUME"
                    fontSize="20px"
                    color="#a3a3a3"
                />
                <img src={arrow} alt="arrow icon" />
            </div>
            <Text
                name="O.HAFFAF RESUME"
                color="#f2f2f2"
                fontSize="50px"
                hasBorder={true}
                borderColor="#f2f2f2"
            />
        </div>
        <div className="main-contact">
            <div className="text-arrow">
                <Text
                    name="CONTACT ME"
                    fontSize="20px"
                    color="#a3a3a3"
                />
                <img src={arrow} alt="arrow icon" />
            </div>
            <Text
                name="O.HAFFAF.DEV@GMAIL.COM"
                color="#f2f2f2"
                fontSize="50px"
                hasBorder={true}
                borderColor="#f2f2f2"
            />
            <Text
                name="+33 7 59 55 52 19"
                color="#f2f2f2"
                fontSize="50px"
            />
            <div className="socials-link">
                <div className="text-arrow">
                    <Text
                        name="LINKEDIN"
                        fontSize="20px"
                        color="#a3a3a3"
                    />
                    <img src={arrow} alt="arrow icon" />
                </div>
                <div className="text-arrow">
                    <Text
                        name="GITHUB"
                        fontSize="20px"
                        color="#a3a3a3"
                    />
                    <img src={arrow} alt="arrow icon" />
                </div>
                <div className="text-arrow">
                    <Text
                        name="WHATSAPP"
                        fontSize="20px"
                        color="#a3a3a3"
                    />
                    <img src={arrow} alt="arrow icon" />
                </div>
            </div>
        </div>
    </div>
)

export default ContactLinks;
