import TypewriterEffect from './animations/TypewriterEffect.tsx';
import WaveEffect from './animations/WaveEffect.tsx';
import Text from './Text.tsx';

const JobTitleHome = () => (
  <div className="job-title">
    <WaveEffect triggerOnLoad={true} delay={0}>
      <Text name="WEB DEVELOPER" fontSize="10.35vw" />
    </WaveEffect>
    <TypewriterEffect triggerOnLoad={true} delay={0.5}>
      <Text name="FRONT-END" fontSize="1.35vw" fontWeight="100" />
    </TypewriterEffect>
  </div>
);

export default JobTitleHome;
