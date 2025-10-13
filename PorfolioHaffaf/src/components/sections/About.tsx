import TitleAbout from "../TitleAbout.tsx";
import TextAbout from "../TextAbout.tsx";
import { useSectionTone, type Tone } from "../../hooks/useSectionTone";

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
