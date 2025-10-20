import TypewriterEffect from './animations/TypewriterEffect.tsx';
import WaveEffect from './animations/WaveEffect.tsx';
import Text from './Text.tsx';

const JobTitleHome = () => (
  <div className="job-title">
    <WaveEffect triggerOnLoad={true} delay={0}>
      <Text name="WEB DEVELOPER" fontSize="150px" />
    </WaveEffect>
    <TypewriterEffect triggerOnLoad={true} delay={0.5}>
      <Text name="FRONT-END" fontSize="20px" fontWeight="100" />
    </TypewriterEffect>
  </div>
);

export default JobTitleHome;
