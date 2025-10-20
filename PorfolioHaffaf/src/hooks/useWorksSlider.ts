import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useRef } from 'react';

const STEP_THRESHOLD = 160;
const QUIET_MS = 100;
const ENTER_MARGIN = 8;
const OPEN_DIRECTION: 'up' | 'down' = 'down';
const STEP_COOLDOWN_MS = 520;

const bodyLock = {
  locked: false,
  scrollY: 0,
  lock() {
    if (this.locked) return;
    this.scrollY = window.scrollY || window.pageYOffset;
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${this.scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.overscrollBehavior = 'contain';
    this.locked = true;
  },
  unlock() {
    if (!this.locked) return;
    const body = document.body;
    body.style.position = '';
    body.style.top = '';
    body.style.left = '';
    body.style.right = '';
    body.style.width = '';
    body.style.overscrollBehavior = '';
    window.scrollTo(0, this.scrollY);
    this.locked = false;
  },
};

const preventDefault = (e: Event): void => {
  e.preventDefault();
};

export function useWorksSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [emblaViewportRef] = useEmblaCarousel({
    axis: 'y',
    loop: false,
    align: 'start',
    dragFree: false,
    watchDrag: true,
  });

  const setSliderRef = useCallback(
    (node: HTMLDivElement | null) => {
      sliderRef.current = node;
      emblaViewportRef(node);
      if (node) {
        const section =
          (node.closest('[data-section="works"]') as HTMLElement) ||
          (node.closest('section.works') as HTMLElement) ||
          (node.closest('#works') as HTMLElement) ||
          (node.parentElement as HTMLElement);
        sectionRef.current = section || null;
      } else {
        sectionRef.current = null;
      }
    },
    [emblaViewportRef],
  );

  const stageRef = useRef<number>(0);
  const accRef = useRef<number>(0);
  const lastTsRef = useRef<number>(0);
  const lastDirRef = useRef<-1 | 0 | 1>(0);
  const capturedRef = useRef<boolean>(false);
  const coolUntilRef = useRef<number>(0);
  const worksVisibilityRef = useRef<number>(0);

  const applyStageClass = useCallback((stage: number) => {
    const el = sliderRef.current;
    if (!el) return;
    el.classList.remove('open-0', 'open-1', 'open-2', 'open-3');
    el.classList.add(`open-${stage}`);
  }, []);

  const mapOpenDirToDelta = useCallback((dir: 'up' | 'down'): 1 | -1 => {
    return OPEN_DIRECTION === 'up' ? (dir === 'up' ? 1 : -1) : dir === 'down' ? 1 : -1;
  }, []);

  const getSectionRect = useCallback((): DOMRect | null => {
    const section = sectionRef.current;
    return section ? section.getBoundingClientRect() : null;
  }, []);

  const isWorksActive = useCallback((): boolean => {
    const r = getSectionRect();
    if (!r) return false;
    const frames = r.top <= 0 && r.bottom >= window.innerHeight;
    return worksVisibilityRef.current >= 0.6 || frames;
  }, [getSectionRect]);

  const atBottomEdgeStrict = useCallback((): boolean => {
    const r = getSectionRect();
    if (!r) return false;
    return Math.abs(r.bottom - window.innerHeight) <= ENTER_MARGIN || r.bottom < window.innerHeight;
  }, [getSectionRect]);

  const atTopEdgeStrict = useCallback((): boolean => {
    const r = getSectionRect();
    if (!r) return false;
    return Math.abs(r.top) <= ENTER_MARGIN || r.top > 0;
  }, [getSectionRect]);

  const clampToBottomOfWorks = useCallback((): void => {
    const section = sectionRef.current;
    if (!section) return;
    const r = section.getBoundingClientRect();
    const target = Math.max(0, Math.round(window.scrollY + r.bottom - window.innerHeight));
    window.scrollTo(0, target);
  }, []);

  const clampToTopOfWorks = useCallback((): void => {
    const section = sectionRef.current;
    if (!section) return;
    const r = section.getBoundingClientRect();
    const target = Math.max(0, Math.round(window.scrollY + r.top));
    window.scrollTo(0, target);
  }, []);

  const normalizeDeltaY = useCallback((e: globalThis.WheelEvent): number => {
    let dy = e.deltaY;
    if (e.deltaMode === 1) dy *= 16;
    else if (e.deltaMode === 2) dy *= window.innerHeight;
    return dy;
  }, []);

  const stepOnce = useCallback(
    (delta: -1 | 1) => {
      const next = Math.min(3, Math.max(0, stageRef.current + delta));
      if (next === stageRef.current) return;
      stageRef.current = next;
      applyStageClass(next);
      coolUntilRef.current = Date.now() + STEP_COOLDOWN_MS;
    },
    [applyStageClass],
  );

  const onKeyDuringCapture = useCallback(
    (e: globalThis.KeyboardEvent): void => {
      const block = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '];
      if (block.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (Date.now() < coolUntilRef.current) return;
      if (e.key === 'ArrowUp' || e.key === 'PageUp') stepOnce(mapOpenDirToDelta('up'));
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        stepOnce(mapOpenDirToDelta('down'));
      }
    },
    [stepOnce, mapOpenDirToDelta],
  );

  const enterCaptureBottom = useCallback((): void => {
    if (capturedRef.current) return;
    capturedRef.current = true;
    accRef.current = 0;
    lastDirRef.current = 0;
    coolUntilRef.current = 0;
    clampToBottomOfWorks();
    bodyLock.lock();
    const options: AddEventListenerOptions = { passive: false };
    window.addEventListener('touchmove', preventDefault, options);
    window.addEventListener('keydown', onKeyDuringCapture, options);
  }, [clampToBottomOfWorks, onKeyDuringCapture]);

  const enterCaptureTop = useCallback((): void => {
    if (capturedRef.current) return;
    capturedRef.current = true;
    accRef.current = 0;
    lastDirRef.current = 0;
    coolUntilRef.current = 0;
    clampToTopOfWorks();
    bodyLock.lock();
    const options: AddEventListenerOptions = { passive: false };
    window.addEventListener('touchmove', preventDefault, options);
    window.addEventListener('keydown', onKeyDuringCapture, options);
  }, [clampToTopOfWorks, onKeyDuringCapture]);

  const exitCapture = useCallback(
    (direction: 'down' | 'up'): void => {
      if (!capturedRef.current) return;
      capturedRef.current = false;
      accRef.current = 0;
      lastDirRef.current = 0;
      bodyLock.unlock();

      const options: AddEventListenerOptions = { passive: false };
      window.removeEventListener('touchmove', preventDefault, options);
      window.removeEventListener('keydown', onKeyDuringCapture, options);

      if (direction === 'down') {
        clampToBottomOfWorks();
      } else {
        clampToTopOfWorks();
      }
    },
    [clampToBottomOfWorks, clampToTopOfWorks, onKeyDuringCapture],
  );

  const forceReset = useCallback(() => {
    stageRef.current = 0;
    applyStageClass(0);
    if (capturedRef.current) {
      capturedRef.current = false;
      accRef.current = 0;
      lastDirRef.current = 0;
      coolUntilRef.current = 0;

      bodyLock.unlock();

      const options: AddEventListenerOptions = { passive: false };
      window.removeEventListener('touchmove', preventDefault, options);
      window.removeEventListener('keydown', onKeyDuringCapture, options);
    }
  }, [applyStageClass, onKeyDuringCapture]);

  useEffect(() => {
    const section = sectionRef.current;
    let disconnect = () => {};
    if (section) {
      const obs = new IntersectionObserver(
        ([entry]) => {
          worksVisibilityRef.current = entry.intersectionRatio;
        },
        { root: null, threshold: [0, 0.25, 0.5, 0.6, 0.75, 1] },
      );
      obs.observe(section);
      disconnect = () => obs.disconnect();
    }

    const handleResetEvent = () => {
      forceReset();
    };

    window.addEventListener('works-slider-reset', handleResetEvent as EventListener);

    const onWheel = (e: globalThis.WheelEvent) => {
      const now = e.timeStamp || performance.now();
      const dy = normalizeDeltaY(e);
      const dir: -1 | 1 = dy > 0 ? 1 : -1;
      const sameBurst = now - lastTsRef.current <= QUIET_MS;
      lastTsRef.current = now;

      if (capturedRef.current) {
        e.preventDefault();
        e.stopPropagation();

        if (Date.now() < coolUntilRef.current) return;

        const openWhen = OPEN_DIRECTION === 'up' ? -1 : 1;
        const closeWhen = -openWhen as -1 | 1;

        if (dir !== lastDirRef.current) {
          accRef.current = 0;
          lastDirRef.current = dir;
        }

        accRef.current += Math.abs(dy);
        const threshold = sameBurst ? STEP_THRESHOLD * 0.9 : STEP_THRESHOLD;

        if (stageRef.current === 3 && dir === openWhen && accRef.current >= threshold) {
          accRef.current = 0;
          exitCapture('down');
          return;
        }

        if (dir === openWhen && accRef.current >= threshold) {
          stepOnce(+1);
          accRef.current = 0;
          return;
        }

        if (dir === closeWhen && accRef.current >= threshold) {
          if (stageRef.current === 0) {
            accRef.current = 0;
            exitCapture('up');
            return;
          }
          stepOnce(-1);
          accRef.current = 0;
          return;
        }
        return;
      }

      if (dir > 0 && isWorksActive() && atBottomEdgeStrict() && stageRef.current < 3) {
        e.preventDefault();
        e.stopPropagation();
        enterCaptureBottom();
        accRef.current = 0;
        lastDirRef.current = 0;
        return;
      }

      if (dir < 0 && isWorksActive() && atTopEdgeStrict() && stageRef.current === 3) {
        e.preventDefault();
        e.stopPropagation();
        enterCaptureTop();
        accRef.current = 0;
        lastDirRef.current = 0;
        return;
      }
    };

    const wheelOptions: AddEventListenerOptions = { passive: false };
    window.addEventListener('wheel', onWheel, wheelOptions);
    applyStageClass(stageRef.current);

    return () => {
      window.removeEventListener('wheel', onWheel, wheelOptions);
      window.removeEventListener('works-slider-reset', handleResetEvent as EventListener);
      disconnect();
      if (capturedRef.current) exitCapture('down');
    };
  }, [
    applyStageClass,
    stepOnce,
    forceReset,
    isWorksActive,
    atBottomEdgeStrict,
    atTopEdgeStrict,
    enterCaptureBottom,
    enterCaptureTop,
    exitCapture,
    normalizeDeltaY,
  ]);

  return {
    setSliderRef,
    sliderRef,
    sectionRef,
    stageRef,
    applyStageClass,
  };
}
