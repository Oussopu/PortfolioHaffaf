import FadeEffect from './animations/FadeEffect.tsx';
import Text from './Text.tsx';

const TitleLocationHome = () => (
  <div className="title-location">
    <div className="visible-title-location">
      <FadeEffect triggerOnLoad={true} delay={0.5}>
        <Text name="BASED" fontSize="20px" />
      </FadeEffect>

      <FadeEffect triggerOnLoad={true} delay={0.7}>
        <Text name="IN" fontSize="20px" />
      </FadeEffect>

      <FadeEffect triggerOnLoad={true} delay={0.9}>
        <Text name="FRANCE" fontSize="20px" />
      </FadeEffect>
    </div>

    <div className="invisible-title-location">
      <FadeEffect triggerOnLoad={true} delay={0}>
        <Text name="FRONT-END" fontSize="20px" color="#f2f2f2" fontWeight="100" />
      </FadeEffect>
    </div>
  </div>
);

export default TitleLocationHome;
