import { type Tone, useSectionTone } from '../../hooks/useSectionTone';
import MainDescriptionHome from '../MainDescriptionHome.tsx';
import MainPictureHome from '../MainPictureHome.tsx';
import MainTitleHome from '../MainTitleHome.tsx';

const Home = ({ onEnterTone }: { onEnterTone: (t: Tone) => void }) => {
  const ref = useSectionTone('light', onEnterTone);

  return (
    <section ref={ref} className="home-main">
      <MainTitleHome />
      <MainPictureHome />
      <MainDescriptionHome />
    </section>
  );
};

export default Home;
