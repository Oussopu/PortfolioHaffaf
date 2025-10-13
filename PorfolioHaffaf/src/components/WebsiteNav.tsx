import Text from "./Text.tsx";
import { useNavHoverAnimation } from "../hooks/useNavHoverAnimation";
import { useTextSplitAnimation } from "../hooks/useTextSplitAnimation";
import { useNavigateToSection } from "../hooks/useNavigateToSection";

const WebsiteNav = () => {
    useNavHoverAnimation();

    useTextSplitAnimation({
        selector: '.website-nav ul li p',
        animationClass: 'char-animate',
        randomOrder: true,
        delayRange: [0, 150]
    });

    const { navigateToSection } = useNavigateToSection();

    return (
        <div className="website-nav">
            <ul>
                <li onClick={() => navigateToSection('about')}>
                    <Text name="ABOUT ME" fontSize="20px" fontWeight="100" />
                </li>
                <li onClick={() => navigateToSection('works')}>
                    <Text name="WORKS" fontSize="20px" fontWeight="100" />
                </li>
                <li onClick={() => navigateToSection('service')}>
                    <Text name="SERVICE" fontSize="20px" fontWeight="100" />
                </li>
            </ul>
        </div>
    );
};

export default WebsiteNav;
