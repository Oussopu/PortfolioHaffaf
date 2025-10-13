import { useInView } from 'react-intersection-observer';

type Tone = 'light' | 'dark';

export function ToneSentinel({
                                 tone,
                                 onEnter,
                             }: {
    tone: Tone;
    onEnter: (t: Tone) => void;
}) {
    const ROOT_MARGIN = '-10% 0px -90% 0px';

    const { ref } = useInView({
        root: null,
        rootMargin: ROOT_MARGIN,
        threshold: 0,
        onChange: (inView) => { if (inView) onEnter(tone); },
    });

    return (
        <span
            ref={ref}
            aria-hidden="true"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 1,
                height: 1,
                pointerEvents: 'none',
            }}
        />
    );
}
