import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface WaveEffectProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    triggerOnLoad?: boolean;
}

export default function WaveEffect({
                                       children,
                                       delay = 0,
                                       className = '',
                                       triggerOnLoad = false
                                   }: WaveEffectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        if (animationRef.current) {
            animationRef.current.kill();
        }

        const textElement = ref.current.querySelector('[data-text]') || ref.current;
        const split = new SplitType(textElement as HTMLElement, {
            types: 'chars',
            tagName: 'span'
        });

        const chars = split.chars;
        if (!chars) return;

        gsap.set(chars, {
            y: 100,
            opacity: 0
        });

        const animate = () => {
            animationRef.current = gsap.to(chars, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: delay,
                stagger: 0.03,
                ease: 'elastic.out(1, 0.5)'
            });
        };

        if (triggerOnLoad) {
            animate();
        } else {
            ScrollTrigger.create({
                trigger: ref.current,
                start: 'top 70%',
                once: true,
                onEnter: animate
            });
        }

        return () => {
            split.revert();
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, [delay, triggerOnLoad]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
