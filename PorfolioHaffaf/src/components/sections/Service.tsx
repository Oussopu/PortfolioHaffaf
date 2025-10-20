import { type Tone, useSectionTone } from '../../hooks/useSectionTone';
import ServiceForm from '../ServiceForm.tsx';
import TitleService from '../TitleService.tsx';

const Service = ({ onEnterTone }: { onEnterTone: (t: Tone) => void }) => {
  const ref = useSectionTone('light', onEnterTone);

  return (
    <section ref={ref} className="service-section">
      <TitleService />
      <ServiceForm />
    </section>
  );
};

export default Service;
