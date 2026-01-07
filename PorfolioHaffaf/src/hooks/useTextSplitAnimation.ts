import { useEffect } from 'react';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';

interface UseTextSplitOptions {
  selector: string;
  animationClass?: string;
  triggerOnHover?: boolean;
  randomOrder?: boolean;
  delayRange?: [number, number];
}

export const useTextSplitAnimation = ({
  selector,
  animationClass = 'char-animate',
  triggerOnHover = true,
  randomOrder = false,
  delayRange = [0, 300],
}: UseTextSplitOptions) => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    Splitting({ target: elements, by: 'chars' });

    if (triggerOnHover) {
      const handlers = new Map<
        HTMLElement,
        {
          enter: () => void;
          leave: () => void;
        }
      >();

      for (const el of elements) {
        const chars = Array.from(el.querySelectorAll<HTMLElement>('.char'));

        const handleMouseEnter = () => {
          for (const char of chars) {
            char.classList.remove(animationClass);
          }

          void el.offsetWidth;

          if (randomOrder) {
            for (const char of chars) {
              const randomDelay = Math.random() * (delayRange[1] - delayRange[0]) + delayRange[0];
              char.style.animationDelay = `${randomDelay}ms`;
            }
          }

          requestAnimationFrame(() => {
            for (const char of chars) {
              char.classList.add(animationClass);
            }
          });
        };

        const handleMouseLeave = () => {
          const maxDelay = randomOrder ? delayRange[1] : 0;
          const animationDuration = 400;

          setTimeout(
            () => {
              for (const char of chars) {
                char.classList.remove(animationClass);
              }
            },
            maxDelay + animationDuration + 100,
          );
        };

        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);

        handlers.set(el, {
          enter: handleMouseEnter,
          leave: handleMouseLeave,
        });
      }

      return () => {
        for (const [el, { enter, leave }] of handlers) {
          el.removeEventListener('mouseenter', enter);
          el.removeEventListener('mouseleave', leave);
        }
      };
    }
  }, [selector, animationClass, triggerOnHover, randomOrder, delayRange]);
};
