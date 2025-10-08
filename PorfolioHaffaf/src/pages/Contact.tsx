import '../assets/style/Contact.scss'
import MainTitleContact from "../components/MainTitleContact.tsx";
import MainFooterContact from "../components/MainFooterContact.tsx";
import ContactLinks from "../components/ContactLinks.tsx";

const Contact = () => {
    return (
        <section className="contact-section">
            <MainTitleContact />
            <ContactLinks />
            <MainFooterContact />
        </section>
    );
};

export default Contact;
