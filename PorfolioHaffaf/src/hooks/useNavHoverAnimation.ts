import { useEffect } from 'react';

export const useNavHoverAnimation = (selector: string = '.website-nav ul li') => {
  useEffect(() => {
    const navItems = document.querySelectorAll<HTMLLIElement>(selector);

    const handlers = new Map<HTMLLIElement, { enter: () => void; leave: () => void }>();

    for (const li of navItems) {
      const handleMouseEnter = () => li.classList.add('hovered');
      const handleMouseLeave = () => li.classList.remove('hovered');

      li.addEventListener('mouseenter', handleMouseEnter);
      li.addEventListener('mouseleave', handleMouseLeave);

      handlers.set(li, { enter: handleMouseEnter, leave: handleMouseLeave });
    }

    return () => {
      for (const [li, { enter, leave }] of handlers) {
        li.removeEventListener('mouseenter', enter);
        li.removeEventListener('mouseleave', leave);
      }
    };
  }, [selector]);
};
