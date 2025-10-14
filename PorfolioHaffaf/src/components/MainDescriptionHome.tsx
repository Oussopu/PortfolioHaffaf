import Text from "./Text.tsx";
import arrowDown from "../assets/img/arrowDown.svg";
import { useTextArrowAnimationWebsite } from "../hooks/useTextArrowAnimationWebsite.ts";

const MainDescriptionHome = () => {
    useTextArrowAnimationWebsite({ selector: ".main-description > *:nth-child(1)" });
    useTextArrowAnimationWebsite({ selector: ".main-description > *:nth-child(2)" });

    const email = "o.haffaf.dev@gmail.com";
    const subject = "Contact via portfolio";
    const body = "";
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const figmaUrl =
        "https://www.figma.com/design/9Z1xeeH3nDuCRNTVQmXa31/Lizzy-s-World?node-id=0-1&p=f&t=RoutGYsCVzaiYENd-0";

    return (
        <div className="main-description">
            <a className="contact-link" href={mailto}>
                <div className="text-arrow">
                    <Text name="CONTACT ME" fontSize="20px" color="#a3a3a3" />
                    <img src={arrowDown} alt="arrow icon" />
                </div>
                <Text name="O.HAFFAF.DEV@GMAIL.COM" fontSize="20px" hasBorder={true} />
            </a>

            <a
                className="work-link"
                href={figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Lizzy's World on Figma"
            >
                <div className="text-arrow">
                    <Text name="LAST WORK" fontSize="20px" color="#a3a3a3" />
                    <img src={arrowDown} alt="arrow icon" />
                </div>
                <Text name="LIZZY'SWORLD" fontSize="20px" />
            </a>
        </div>
    );
};

export default MainDescriptionHome;
