import { type Tone, useSectionTone } from '../../hooks/useSectionTone';
import TextAbout from '../TextAbout.tsx';
import TitleAbout from '../TitleAbout.tsx';

const About = ({ onEnterTone }: { onEnterTone: (t: Tone) => void }) => {
  const ref = useSectionTone('dark', onEnterTone);

  return (
    <section ref={ref} className="about-main">
      <TitleAbout />
      <TextAbout />
    </section>
  );
};

export default About;
