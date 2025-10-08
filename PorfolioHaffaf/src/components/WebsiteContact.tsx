import arrow from "../assets/img/arrowUp.svg";
import Text from "./Text.tsx";

const WebsiteContact =() => (
    <div className="website-contact">
        <Text
            name="CONTACT ME"
            fontSize="20px"
        />
        <img src={arrow} alt="arrow icon" />
    </div>
)

export default WebsiteContact;
