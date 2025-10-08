import TitleArrow from "./TitleArrow.tsx";
import Text from "./Text.tsx";

const ContactLinks =() => (
    <div className="contact-links">
        <div className="main-resume">
            <TitleArrow title="MY RESUME"/>
            <Text
                name="O.HAFFAF RESUME"
                color="#f2f2f2"
                fontSize="50px"
                hasBorder={true}
                borderColor="#f2f2f2"
            />
        </div>
        <div className="main-contact">
            <TitleArrow title="CONTACT ME"/>
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
                <TitleArrow title="LINKEDIN"/>
                <TitleArrow title="GITHUB"/>
                <TitleArrow title="WHATSAPP"/>
            </div>
        </div>
    </div>
)

export default ContactLinks;
