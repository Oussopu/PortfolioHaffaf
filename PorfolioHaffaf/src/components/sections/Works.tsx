import TitleWorks from "../TitleWorks.tsx";
import WorksSlider from "../WorksSlider.tsx";
import { useSectionTone, type Tone } from "../../hooks/useSectionTone";

const Works = ({ onEnterTone }: { onEnterTone: (t: Tone) => void }) => {
    const ref = useSectionTone('light', onEnterTone);

    return (
        <section ref={ref} className="works-main">
            <TitleWorks />
            <WorksSlider />
        </section>
    );
};

export default Works;
