import TitleArrow from "./TitleArrow.tsx";
import Text from "./Text.tsx";

const MainDescriptionHome = () => (
    <div className="main-description">
        <div>
            <TitleArrow title="CONTACT ME"/>
            <Text
                name="O.HAFFAF.DEV@GMAIL.COM"
                fontSize="20px"
                hasBorder={true}
            />
        </div>
        <div>
            <TitleArrow title="LAST WORK"/>
            <Text
                name="LIZZY'SWORLD"
                fontSize="20px"
            />
        </div>
    </div>
)

export default MainDescriptionHome;
