import { useNavigate } from 'react-router-dom';
import arrow from "../assets/img/arrowDown.svg";
import Text from "./Text.tsx";
import { useTextArrowAnimationHeader } from "../hooks/useTextArrowAnimationHeader.ts";

const WebsiteContact = () => {
    const navigate = useNavigate();

    useTextArrowAnimationHeader({
        selector: '.website-contact .text-arrow',
        arrowBaseRotation: 0,
        arrowHoverRotation: -45
    });

    const handleClick = () => {
        navigate('/contact');
    };

    return (
        <div className="website-contact" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className="text-arrow">
                <Text
                    name="CONTACT ME"
                    fontSize="20px"
                    hasBorder={true}
                />
                <img src={arrow} alt="arrow icon" />
            </div>
        </div>
    );
};

export default WebsiteContact;
