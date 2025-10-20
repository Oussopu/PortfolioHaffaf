import { type KeyboardEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from '../assets/img/arrowDown.svg';
import { useResetWorksSlider } from '../hooks/useResetWorksSlider';
import useTextArrowAnimationHeader from '../hooks/useTextArrowAnimationHeader.ts';
import Text from './Text.tsx';

const WebsiteContact = () => {
  const navigate = useNavigate();
  const { resetWorksSlider } = useResetWorksSlider();

  useTextArrowAnimationHeader({
    selector: '.website-contact .text-arrow',
    arrowBaseRotation: 0,
    arrowHoverRotation: -45,
  });

  const handleClick = useCallback(() => {
    resetWorksSlider();
    navigate('/contact');
  }, [navigate, resetWorksSlider]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick],
  );

  return (
    <button
      type="button"
      className="website-contact"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label="Contact me"
      style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
    >
      <div className="text-arrow">
        <Text name="CONTACT ME" fontSize="20px" hasBorder={true} />
        <img src={arrow} alt="arrow icon" aria-hidden="true" />
      </div>
    </button>
  );
};

export default WebsiteContact;
