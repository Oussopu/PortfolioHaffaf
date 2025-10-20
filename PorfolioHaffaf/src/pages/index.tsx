import '../assets/style/home.scss';
import '../assets/style/about.scss';
import '../assets/style/works.scss';
import '../assets/style/service.scss';
import About from '../components/sections/About.tsx';
import Home from '../components/sections/Home.tsx';
import Service from '../components/sections/Service.tsx';
import Works from '../components/sections/Works.tsx';

type Tone = 'light' | 'dark';

const Index = ({ onEnterTone }: { onEnterTone: (t: Tone) => void }) => {
  return (
    <>
      <section data-section="home">
        <Home onEnterTone={onEnterTone} />
      </section>
      <section data-section="about">
        <About onEnterTone={onEnterTone} />
      </section>
      <section data-section="works">
        <Works onEnterTone={onEnterTone} />
      </section>
      <section data-section="service">
        <Service onEnterTone={onEnterTone} />
      </section>
    </>
  );
};

export default Index;
