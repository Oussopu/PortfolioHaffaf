import { useEffect } from 'react';

interface UseTextArrowAnimationOptions {
    selector: string;
    arrowBaseRotation?: number;
    arrowHoverRotation?: number;
}

export const useTextArrowAnimationWebsite = ({
                                                 selector,
                                                 arrowBaseRotation = 0,
                                                 arrowHoverRotation = -45
                                             }: UseTextArrowAnimationOptions) => {
    useEffect(() => {
        const containers = document.querySelectorAll<HTMLElement>(selector);
        if (!containers.length) return;

        const cleanups: Array<() => void> = [];

        containers.forEach(container => {
            const arrowRow = container.querySelector<HTMLElement>('.text-arrow');
            const arrow = arrowRow?.querySelector<HTMLImageElement>('img');

            const targetP =
                container.querySelector<HTMLElement>('.text-arrow + .text p') ||
                arrowRow?.nextElementSibling?.querySelector<HTMLElement>('p') ||
                undefined;

            if (!arrowRow || !arrow) return;

            arrow.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            arrow.style.transformOrigin = 'center';
            arrow.style.transform = `rotate(${arrowBaseRotation}deg)`;

            const handleEnter = () => {
                arrow.style.transform = `rotate(${arrowHoverRotation}deg)`;
                if (targetP) targetP.classList.add('border-animate');
            };

            const handleLeave = () => {
                arrow.style.transform = `rotate(${arrowBaseRotation}deg)`;
                if (targetP) targetP.classList.remove('border-animate');
            };

            container.addEventListener('mouseenter', handleEnter);
            container.addEventListener('mouseleave', handleLeave);

            cleanups.push(() => {
                container.removeEventListener('mouseenter', handleEnter);
                container.removeEventListener('mouseleave', handleLeave);
            });
        });

        return () => cleanups.forEach(fn => fn());
    }, [selector, arrowBaseRotation, arrowHoverRotation]);
};
