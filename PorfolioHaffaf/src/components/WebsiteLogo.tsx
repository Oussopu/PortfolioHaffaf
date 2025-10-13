import Text from "./Text.tsx";
import { useNavigateToSection } from "../hooks/useNavigateToSection";

const WebsiteLogo = () => {
    const { navigateToSection } = useNavigateToSection();

    return (
        <div
            className="website-logo"
            onClick={() => navigateToSection('home')}
            style={{ cursor: 'pointer' }}
        >
            <Text
                name="HAFFAF"
                fontSize="24px"
            />
            <Text
                name="OUSSAMA"
                fontSize="24px"
            />
        </div>
    );
};

export default WebsiteLogo;
