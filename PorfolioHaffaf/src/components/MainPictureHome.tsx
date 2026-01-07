import me from '../assets/img/me.jpeg';
import FadeEffect from './animations/FadeEffect';
import Text from './Text.tsx';

const MainPictureHome = () => (
  <div className="main-picture">
    <div className="grey-background">
      <div className="skills">
        <FadeEffect triggerOnLoad={true} delay={0.5}>
          <Text name="/ REACT" fontSize="1.35vw" />
        </FadeEffect>

        <FadeEffect triggerOnLoad={true} delay={0.7}>
          <Text name="/ TYPESCRIPT" fontSize="1.35vw" />
        </FadeEffect>

        <FadeEffect triggerOnLoad={true} delay={0.9}>
          <Text name="/ TAILWIND" fontSize="1.35vw" />
        </FadeEffect>

        <FadeEffect triggerOnLoad={true} delay={1.1}>
          <Text name="/ SASS" fontSize="1.35vw" />
        </FadeEffect>
      </div>
    </div>
    <img src={me} alt="me" />
  </div>
);

export default MainPictureHome;
