import Text from "./Text.tsx";
import arrowDown from "../assets/img/arrowDown.svg";

const MainDescriptionHome = () => (
    <div className="main-description">
        <div>
            <div className="text-arrow">
                <Text
                    name="CONTACT ME"
                    fontSize="20px"
                    color="#a3a3a3"
                />
                <img src={arrowDown} alt="arrow icon" />
            </div>
            <Text
                name="O.HAFFAF.DEV@GMAIL.COM"
                fontSize="20px"
                hasBorder={true}
            />
        </div>
        <div>
            <div className="text-arrow">
                <Text
                    name="LAST WORK"
                    fontSize="20px"
                    color="#a3a3a3"
                />
                <img src={arrowDown} alt="arrow icon" />
            </div>
            <Text
                name="LIZZY'SWORLD"
                fontSize="20px"
            />
        </div>
    </div>
)

export default MainDescriptionHome;
