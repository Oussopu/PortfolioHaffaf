import { useEffect } from 'react';

interface UseTextArrowAnimationOptions {
  selector: string;
  arrowBaseRotation?: number;
  arrowHoverRotation?: number;
}

const useTextArrowAnimationHeader = ({
  selector,
  arrowBaseRotation = 0,
  arrowHoverRotation = -45,
}: UseTextArrowAnimationOptions) => {
  useEffect(() => {
    const containers = document.querySelectorAll<HTMLElement>(selector);
    if (!containers.length) return;

    const cleanups: (() => void)[] = [];

    containers.forEach((container) => {
      const text =
        container.querySelector<HTMLElement>('.text p') ||
        container.querySelector<HTMLElement>('p');

      const arrow = container.querySelector<HTMLImageElement>('img');
      if (!arrow) return;

      arrow.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      arrow.style.transformOrigin = 'center';
      arrow.style.transform = `rotate(${arrowBaseRotation}deg)`;

      const handleMouseEnter = () => {
        arrow.style.transform = `rotate(${arrowHoverRotation}deg)`;
        if (text) text.classList.add('border-animate');
      };

      const handleMouseLeave = () => {
        arrow.style.transform = `rotate(${arrowBaseRotation}deg)`;
        if (text) text.classList.remove('border-animate');
      };

      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      cleanups.push(() => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      });
    });

    return () => {
      for (const cleanup of cleanups) {
        cleanup();
      }
    };
  }, [selector, arrowBaseRotation, arrowHoverRotation]);
};

export default useTextArrowAnimationHeader;
