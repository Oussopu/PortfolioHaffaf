import { useId } from 'react';
import arrow from '../assets/img/arrowDown.svg';
import { useServiceForm } from '../hooks/useServiceForm';
import { useTextArrowAnimationWebsite } from '../hooks/useTextArrowAnimationWebsite';
import TypewriterEffect from './animations/TypewriterEffect';
import Text from './Text';

const ServiceForm = () => {
  const { formRef, sending, status, buttonLabel, onSubmit } = useServiceForm();

  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const messageId = useId();

  useTextArrowAnimationWebsite({ selector: '.service-form' });

  return (
    <form className="service-form" ref={formRef} onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor={nameId} className="visually-hidden">
          Your Name
        </label>
        <input
          type="text"
          id={nameId}
          name="name"
          placeholder="YOUR NAME *"
          required
          aria-label="Your Name"
        />
      </div>

      <div className="form-group">
        <label htmlFor={phoneId} className="visually-hidden">
          Your Phone
        </label>
        <input
          type="tel"
          id={phoneId}
          name="phone"
          placeholder="YOUR PHONE *"
          required
          aria-label="Your Phone"
        />
      </div>

      <div className="form-group">
        <label htmlFor={emailId} className="visually-hidden">
          Your Email
        </label>
        <input
          type="email"
          id={emailId}
          name="email"
          placeholder="YOUR EMAIL *"
          required
          aria-label="Your Email"
        />
      </div>

      <div className="form-group">
        <label htmlFor={messageId} className="visually-hidden">
          Your Message
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={5}
          placeholder="HOW CAN I HELP YOU *"
          required
          aria-label="Your Message"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        aria-busy={sending}
        aria-live="polite"
        className={`submit-btn ${sending ? 'is-sending' : ''} ${status ?? ''}`}
      >
        <div className="text-arrow">
          <TypewriterEffect key={buttonLabel} triggerOnLoad={true} delay={0.5}>
            <Text name={buttonLabel} fontSize="20px" color="#a3a3a3" />
          </TypewriterEffect>
          {!sending && <img src={arrow} alt="arrow icon" />}
        </div>
      </button>
    </form>
  );
};

export default ServiceForm;
