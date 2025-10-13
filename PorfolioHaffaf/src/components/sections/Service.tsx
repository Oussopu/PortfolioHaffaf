import TitleService from "../TitleService.tsx";
import ServiceForm from "../ServiceForm.tsx";
import { useSectionTone, type Tone } from "../../hooks/useSectionTone";

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
