import '../assets/style/contact.scss';
import ContactLinks from '../components/ContactLinks.tsx';
import MainFooterContact from '../components/MainFooterContact.tsx';
import MainTitleContact from '../components/MainTitleContact.tsx';
import { type Tone, useSectionTone } from '../hooks/useSectionTone.ts';

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
