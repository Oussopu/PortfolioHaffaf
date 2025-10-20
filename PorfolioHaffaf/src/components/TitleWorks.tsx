import arrowDown from '../assets/img/arrowDown.svg';
import Text from './Text.tsx';

const TitleWorks = () => (
  <div className="title-works">
    <Text name="WORKS" />
    <img src={arrowDown} alt="arrow icon" />
  </div>
);

export default TitleWorks;
