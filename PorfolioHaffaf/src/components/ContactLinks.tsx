import arrow from '../assets/img/arrowDown.svg';
import resumePdf from '../assets/resume/o.haffaf.dev.resume.pdf';
import { useTextArrowAnimationWebsite } from '../hooks/useTextArrowAnimationWebsite.ts';
import FadeEffect from './animations/FadeEffect.tsx';
import TypewriterEffect from './animations/TypewriterEffect.tsx';
import Text from './Text.tsx';

const ContactLinks = () => {
  useTextArrowAnimationWebsite({ selector: '.contact-links > *:nth-child(1)' });
  useTextArrowAnimationWebsite({ selector: '.main-contact-head' });

  useTextArrowAnimationWebsite({ selector: '.socials-link .linkedin' });
  useTextArrowAnimationWebsite({ selector: '.socials-link .github' });
  useTextArrowAnimationWebsite({ selector: '.socials-link .whatsapp' });

  const email = 'o.haffaf.dev@gmail.com';
  const subject = 'Contact via portfolio';
  const body = '';
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="contact-links">
      <a
        className="main-resume"
        href={resumePdf}
        download="Oussama_Haffaf_Resume.pdf"
        aria-label="Télécharger le CV de Oussama Haffaf"
      >
        <div className="text-arrow">
          <TypewriterEffect triggerOnLoad={true} delay={0}>
            <Text name="MY RESUME" fontSize="20px" color="#a3a3a3" />
          </TypewriterEffect>
          <img src={arrow} alt="arrow icon" />
        </div>
        <TypewriterEffect triggerOnLoad={true} delay={0}>
          <Text
            name="O.HAFFAF RESUME"
            color="#f2f2f2"
            fontSize="50px"
            hasBorder={true}
            borderColor="#f2f2f2"
          />
        </TypewriterEffect>
      </a>

      <div className="main-contact">
        <a className="main-contact-head" href={mailto}>
          <div className="text-arrow">
            <TypewriterEffect triggerOnLoad={true} delay={0}>
              <Text name="CONTACT ME" fontSize="20px" color="#a3a3a3" />
            </TypewriterEffect>
            <img src={arrow} alt="arrow icon" />
          </div>
          <TypewriterEffect triggerOnLoad={true} delay={0}>
            <Text
              name="O.HAFFAF.DEV@GMAIL.COM"
              color="#f2f2f2"
              fontSize="50px"
              hasBorder={true}
              borderColor="#f2f2f2"
            />
          </TypewriterEffect>
        </a>

        <TypewriterEffect triggerOnLoad={true} delay={0}>
          <Text name="+33 7 59 55 52 19" color="#f2f2f2" fontSize="50px" />
        </TypewriterEffect>

        <div className="socials-link">
          <a
            className="social-item linkedin"
            href="https://www.linkedin.com/in/oussama-haffaf-295b93258/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ouvrir le profil LinkedIn d'Oussama Haffaf"
          >
            <div className="text-arrow">
              <FadeEffect triggerOnLoad={true} delay={0}>
                <Text name="LINKEDIN" fontSize="20px" color="#a3a3a3" />
              </FadeEffect>
              <img src={arrow} alt="arrow icon" />
            </div>
          </a>

          <a
            className="social-item github"
            href="https://github.com/Oussopu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ouvrir le profil GitHub d'Oussama Haffaf"
          >
            <div className="text-arrow">
              <FadeEffect triggerOnLoad={true} delay={0}>
                <Text name="GITHUB" fontSize="20px" color="#a3a3a3" />
              </FadeEffect>
              <img src={arrow} alt="arrow icon" />
            </div>
          </a>

          <a
            className="social-item whatsapp"
            href="https://wa.me/15142697226"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Envoyer un message WhatsApp au +1 514 269 7226"
          >
            <div className="text-arrow">
              <FadeEffect triggerOnLoad={true} delay={0}>
                <Text name="WHATSAPP" fontSize="20px" color="#a3a3a3" />
              </FadeEffect>
              <img src={arrow} alt="arrow icon" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLinks;
