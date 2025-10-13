import Text from "./Text.tsx";
import arrowDown from "../assets/img/arrowDown.svg";

const TitleWorks =() =>(
    <div className="title-works">
        <Text
            name="WORKS"
        />
        <img src={arrowDown} alt="arrow icon" />
    </div>
)

export default TitleWorks;
