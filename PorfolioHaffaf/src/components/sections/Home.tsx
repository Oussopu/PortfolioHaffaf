import MainTitleHome from "../MainTitleHome.tsx";
import MainPictureHome from "../MainPictureHome.tsx";
import MainDescriptionHome from "../MainDescriptionHome.tsx";
import { useSectionTone, type Tone } from "../../hooks/useSectionTone";

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
