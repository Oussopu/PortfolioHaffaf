import '../assets/style/home.scss'
import '../assets/style/about.scss'
import '../assets/style/works.scss'
import '../assets/style/service.scss'
import Home from "../components/sections/Home.tsx";
import About from "../components/sections/About.tsx";
import Works from "../components/sections/Works.tsx";
import Service from "../components/sections/Service.tsx";

type Tone = 'light' | 'dark';

const Index = ({ onEnterTone }: { onEnterTone: (t: Tone) => void }) => {
    return (
        <>
            <section id="home">
                <Home onEnterTone={onEnterTone} />
            </section>
            <section id="about">
                <About onEnterTone={onEnterTone} />
            </section>
            <section id="works">
                <Works onEnterTone={onEnterTone} />
            </section>
            <section id="service">
                <Service onEnterTone={onEnterTone} />
            </section>
        </>
    );
};

export default Index;
