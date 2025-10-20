import { useId } from 'react';
import { type Tone, useSectionTone } from '../../hooks/useSectionTone';
import TitleWorks from '../TitleWorks.tsx';
import WorksSlider from '../WorksSlider.tsx';

const Works = ({ onEnterTone }: { onEnterTone: (t: Tone) => void }) => {
  const ref = useSectionTone('light', onEnterTone);
  const uniqueId = useId();

  return (
    <section ref={ref} id={uniqueId} data-section="works" className="works-main">
      <TitleWorks />
      <WorksSlider />
    </section>
  );
};

export default Works;
