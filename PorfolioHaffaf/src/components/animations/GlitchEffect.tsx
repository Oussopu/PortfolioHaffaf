import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type ReactNode, useEffect, useRef } from 'react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface GlitchEffectProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  triggerOnLoad?: boolean;
}

export default function GlitchEffect({
  children,
  delay = 0,
  className = '',
  triggerOnLoad = false,
}: GlitchEffectProps) {
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
      tagName: 'span',
    });

    const chars = split.chars;
    if (!chars) return;

    gsap.set(chars, {
      opacity: 0,
      x: () => gsap.utils.random(-100, 100),
      y: () => gsap.utils.random(-100, 100),
      rotation: () => gsap.utils.random(-45, 45),
      scale: 0,
    });

    const animate = () => {
      animationRef.current = gsap.to(chars, {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        delay: delay,
        stagger: {
          amount: 0.4,
          from: 'random',
        },
        ease: 'power2.out',
      });
    };

    if (triggerOnLoad) {
      animate();
    } else {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 80%',
        once: true,
        onEnter: animate,
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
