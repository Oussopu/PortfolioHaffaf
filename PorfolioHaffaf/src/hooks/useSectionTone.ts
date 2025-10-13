import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export type Tone = 'light' | 'dark';

export function useSectionTone(tone: Tone, onEnterTone: (t: Tone) => void) {
    const { ref, inView } = useInView({
        root: null,
        rootMargin: '-5% 0px -95% 0px',
        threshold: 0,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) onEnterTone(tone);
    }, [inView, tone, onEnterTone]);

    return ref;
}
