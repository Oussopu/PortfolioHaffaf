import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type ReactNode, useEffect, useRef } from 'react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface TypeWriterEffectProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  triggerOnLoad?: boolean;
  speed?: number;
}

export default function TypeWriterEffect({
  children,
  delay = 0,
  className = '',
  triggerOnLoad = false,
  speed = 0.05,
}: TypeWriterEffectProps) {
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
      x: -20,
    });

    const animate = () => {
      animationRef.current = gsap.to(chars, {
        opacity: 1,
        x: 0,
        duration: speed,
        delay: delay,
        stagger: speed,
        ease: 'none',
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
  }, [delay, speed, triggerOnLoad]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
