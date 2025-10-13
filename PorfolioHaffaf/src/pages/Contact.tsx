import '../assets/style/contact.scss'
import MainTitleContact from "../components/MainTitleContact.tsx";
import MainFooterContact from "../components/MainFooterContact.tsx";
import ContactLinks from "../components/ContactLinks.tsx";
import { useSectionTone, type Tone} from "../hooks/useSectionTone.ts";




const Contact = ({ onEnterTone }: { onEnterTone: (t: Tone) => void }) => {
    const ref = useSectionTone('dark', onEnterTone);
    return (
        <section ref={ref} className="contact-section">
            <MainTitleContact />
            <ContactLinks />
            <MainFooterContact />
        </section>
    );
};

export default Contact;


