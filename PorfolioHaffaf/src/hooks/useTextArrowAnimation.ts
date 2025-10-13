import { useEffect } from 'react';

interface UseTextArrowAnimationOptions {
    selector: string;
    arrowBaseRotation?: number;
    arrowHoverRotation?: number;
}

export const useTextArrowAnimation = ({
                                          selector,
                                          arrowBaseRotation = 0,
                                          arrowHoverRotation = -45
                                      }: UseTextArrowAnimationOptions) => {
    useEffect(() => {
        const containers = document.querySelectorAll<HTMLElement>(selector);

        containers.forEach(container => {
            const text = container.querySelector('p');
            const arrow = container.querySelector<HTMLImageElement>('img');

            if (!arrow) return;

            arrow.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            arrow.style.transformOrigin = 'center';
            arrow.style.transform = `rotate(${arrowBaseRotation}deg)`;

            if (text) {
                const computedStyle = window.getComputedStyle(text);
                const borderBottom = computedStyle.borderBottomWidth;

                if (borderBottom !== '0px') {
                    text.style.position = 'relative';
                    text.style.display = 'inline-block';
                }
            }

            const handleMouseEnter = () => {
                arrow.style.transform = `rotate(${arrowHoverRotation}deg)`;

                if (text) {
                    const computedStyle = window.getComputedStyle(text);
                    const borderBottom = computedStyle.borderBottomWidth;

                    if (borderBottom !== '0px') {
                        text.classList.add('border-animate');
                    }
                }
            };

            const handleMouseLeave = () => {
                arrow.style.transform = `rotate(${arrowBaseRotation}deg)`;

                if (text) {
                    text.classList.remove('border-animate');
                }
            };

            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            };
        });
    }, [selector, arrowBaseRotation, arrowHoverRotation]);
};
