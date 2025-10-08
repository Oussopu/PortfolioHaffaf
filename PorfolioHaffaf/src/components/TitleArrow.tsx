import arrowDown from "../assets/img/arrowDown.svg";

const TitleWithArrow = ({title} : ({title: string })) => (
    <div className="title-with-arrow">
        <h3>{title}</h3>
        <img src={arrowDown} alt="arrow icon" />
    </div>
)

export default TitleWithArrow;
