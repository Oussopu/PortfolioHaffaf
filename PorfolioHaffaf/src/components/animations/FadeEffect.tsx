import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface FadeEffectProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    triggerOnLoad?: boolean;
}

export default function FadeEffect({
                                       children,
                                       delay = 0,
                                       className = '',
                                       triggerOnLoad = false
                                   }: FadeEffectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        if (animationRef.current) {
            animationRef.current.kill();
        }

        const textElement = ref.current.querySelector('[data-text]') || ref.current;
        const split = new SplitType(textElement as HTMLElement, {
            types: 'words',
            tagName: 'span'
        });

        const words = split.words;
        if (!words) return;

        gsap.set(words, {
            opacity: 0,
            y: 30
        });

        const animate = () => {
            animationRef.current = gsap.to(words, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: delay,
                stagger: 0.1,
                ease: 'power2.out'
            });
        };

        if (triggerOnLoad) {
            animate();
        } else {
            ScrollTrigger.create({
                trigger: ref.current,
                start: 'top 60%',
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
