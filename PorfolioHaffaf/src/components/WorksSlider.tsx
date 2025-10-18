import { useEffect, useRef, useCallback } from "react";
import Text from "./Text.tsx";
import useEmblaCarousel from "embla-carousel-react";
import lizzysWorld from "../assets/img/Lw.png";
import justPrice from "../assets/img/Ljp.png";
import ohMyFood from "../assets/img/Omf.png";

const STEP_THRESHOLD = 160;
const QUIET_MS = 100;
const ENTER_MARGIN = 8;
const OPEN_DIRECTION: "up" | "down" = "down";
const STEP_COOLDOWN_MS = 520;

const bodyLock = {
    locked: false,
    scrollY: 0,
    lock() {
        if (this.locked) return;
        this.scrollY = window.scrollY || window.pageYOffset;
        const body = document.body;
        body.style.position = "fixed";
        body.style.top = `-${this.scrollY}px`;
        body.style.left = "0";
        body.style.right = "0";
        body.style.width = "100%";
        body.style.overscrollBehavior = "contain";
        this.locked = true;
    },
    unlock() {
        if (!this.locked) return;
        const body = document.body;
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        body.style.width = "";
        body.style.overscrollBehavior = "";
        window.scrollTo(0, this.scrollY);
        this.locked = false;
    },
};

const preventDefault = (e: Event) => e.preventDefault();

export default function WorksSlider() {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);

    const [emblaViewportRef] = useEmblaCarousel({
        axis: "y",
        loop: false,
        align: "start",
        dragFree: false,
        watchDrag: true,
    });

    const setSliderRef = useCallback((node: HTMLDivElement | null) => {
        sliderRef.current = node;
        emblaViewportRef(node);
        if (node) {
            const section =
                (node.closest('[data-section="works"]') as HTMLElement) ||
                (node.closest("section.works") as HTMLElement) ||
                (node.closest("#works") as HTMLElement) ||
                (node.parentElement as HTMLElement);
            sectionRef.current = section || null;
        } else {
            sectionRef.current = null;
        }
    }, [emblaViewportRef]);

    const stageRef = useRef<number>(0);
    const applyStageClass = useCallback((stage: number) => {
        const el = sliderRef.current;
        if (!el) return;
        el.classList.remove("open-0", "open-1", "open-2", "open-3");
        el.classList.add(`open-${stage}`);
    }, []);

    const accRef = useRef<number>(0);
    const lastTsRef = useRef<number>(0);
    const lastDirRef = useRef<-1 | 0 | 1>(0);
    const capturedRef = useRef<boolean>(false);
    const coolUntilRef = useRef<number>(0);
    const worksVisibilityRef = useRef(0);

    const getSectionRect = () => {
        const section = sectionRef.current;
        if (!section) return null;
        return section.getBoundingClientRect();
    };

    const isWorksActive = () => {
        const r = getSectionRect();
        if (!r) return false;
        const frames = r.top <= 0 && r.bottom >= window.innerHeight;
        return worksVisibilityRef.current >= 0.6 || frames;
    };

    const atBottomEdgeStrict = () => {
        const r = getSectionRect();
        if (!r) return false;
        return Math.abs(r.bottom - window.innerHeight) <= ENTER_MARGIN || r.bottom < window.innerHeight;
    };

    const atTopEdgeStrict = () => {
        const r = getSectionRect();
        if (!r) return false;
        return Math.abs(r.top) <= ENTER_MARGIN || r.top > 0;
    };

    const clampToBottomOfWorks = () => {
        const section = sectionRef.current;
        if (!section) return;
        const r = section.getBoundingClientRect();
        const target = Math.max(0, Math.round(window.scrollY + r.bottom - window.innerHeight));
        window.scrollTo(0, target);
    };

    const clampToTopOfWorks = () => {
        const section = sectionRef.current;
        if (!section) return;
        const r = section.getBoundingClientRect();
        const target = Math.max(0, Math.round(window.scrollY + r.top));
        window.scrollTo(0, target);
    };

    const onKeyDuringCapture = (e: KeyboardEvent) => {
        const block = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "];
        if (block.includes(e.key)) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (Date.now() < coolUntilRef.current) return;
        if (e.key === "ArrowUp" || e.key === "PageUp") stepOnce(mapOpenDirToDelta("up"));
        if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") stepOnce(mapOpenDirToDelta("down"));
    };

    const enterCaptureBottom = () => {
        if (capturedRef.current) return;
        capturedRef.current = true;
        accRef.current = 0;
        lastDirRef.current = 0;
        coolUntilRef.current = 0;
        clampToBottomOfWorks();
        bodyLock.lock();
        window.addEventListener("touchmove", preventDefault, { passive: false });
        window.addEventListener("keydown", onKeyDuringCapture as any, { passive: false } as any);
    };

    const enterCaptureTop = () => {
        if (capturedRef.current) return;
        capturedRef.current = true;
        accRef.current = 0;
        lastDirRef.current = 0;
        coolUntilRef.current = 0;
        clampToTopOfWorks();
        bodyLock.lock();
        window.addEventListener("touchmove", preventDefault, { passive: false });
        window.addEventListener("keydown", onKeyDuringCapture as any, { passive: false } as any);
    };

    const exitCapture = (direction: "down" | "up") => {
        if (!capturedRef.current) return;
        capturedRef.current = false;
        accRef.current = 0;
        lastDirRef.current = 0;

        bodyLock.unlock();
        window.removeEventListener("touchmove", preventDefault as any);
        window.removeEventListener("keydown", onKeyDuringCapture as any);

        if (direction === "down") {
            clampToBottomOfWorks();
        } else {
            clampToTopOfWorks();
        }
    };

    const forceReset = useCallback(() => {

        stageRef.current = 0;
        applyStageClass(0);

        if (capturedRef.current) {
            capturedRef.current = false;
            accRef.current = 0;
            lastDirRef.current = 0;
            coolUntilRef.current = 0;

            bodyLock.unlock();
            window.removeEventListener("touchmove", preventDefault as any);
            window.removeEventListener("keydown", onKeyDuringCapture as any);
        }
    }, [applyStageClass]);

    const mapOpenDirToDelta = (dir: "up" | "down"): 1 | -1 => {
        if (OPEN_DIRECTION === "up") return dir === "up" ? 1 : -1;
        return dir === "down" ? 1 : -1;
    };

    const stepOnce = useCallback((delta: -1 | 1) => {
        const next = Math.min(3, Math.max(0, stageRef.current + delta));
        if (next === stageRef.current) return;
        stageRef.current = next;
        applyStageClass(next);
        coolUntilRef.current = Date.now() + STEP_COOLDOWN_MS;
    }, [applyStageClass]);

    const normalizeDeltaY = (e: WheelEvent) => {
        let dy = e.deltaY;
        if (e.deltaMode === 1) dy *= 16;
        else if (e.deltaMode === 2) dy *= window.innerHeight;
        return dy;
    };

    useEffect(() => {
        const section = sectionRef.current;
        let disconnect = () => {};
        if (section) {
            const obs = new IntersectionObserver(
                ([entry]) => { worksVisibilityRef.current = entry.intersectionRatio; },
                { root: null, threshold: [0, 0.25, 0.5, 0.6, 0.75, 1] }
            );
            obs.observe(section);
            disconnect = () => obs.disconnect();
        }

        const handleResetEvent = () => {
            forceReset();
        };

        window.addEventListener('works-slider-reset', handleResetEvent);

        const onWheel = (e: WheelEvent) => {
            const now = e.timeStamp || performance.now();
            const dy = normalizeDeltaY(e);
            const dir: -1 | 1 = dy > 0 ? 1 : -1;
            const sameBurst = now - lastTsRef.current <= QUIET_MS;
            lastTsRef.current = now;

            if (capturedRef.current) {
                e.preventDefault();
                e.stopPropagation();

                if (Date.now() < coolUntilRef.current) return;

                const openWhen = OPEN_DIRECTION === "up" ? -1 : 1;
                const closeWhen = -openWhen as -1 | 1;

                if (dir !== lastDirRef.current) {
                    accRef.current = 0;
                    lastDirRef.current = dir;
                }

                accRef.current += Math.abs(dy);
                const threshold = sameBurst ? STEP_THRESHOLD * 0.9 : STEP_THRESHOLD;

                if (stageRef.current === 3 && dir === openWhen && accRef.current >= threshold) {
                    accRef.current = 0;
                    exitCapture("down");
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
                        exitCapture("up");
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

        window.addEventListener("wheel", onWheel, { passive: false });
        applyStageClass(stageRef.current);

        return () => {
            window.removeEventListener("wheel", onWheel as any);
            window.removeEventListener('works-slider-reset', handleResetEvent);
            disconnect();
            if (capturedRef.current) exitCapture("down");
        };
    }, [applyStageClass, stepOnce, forceReset]);

    return (
        <div
            className="works-slider embla open-0"
            ref={setSliderRef}
            aria-label="Works slider"
            role="region"
        >
            <div className="embla__container">
                <section className="embla__slide">
                    <div className="first-work">
                        <div className="first-work-title">
                            <div className="number-work">
                                <Text name="01" color="#f2f2f2" fontSize="20px" fontWeight="700" />
                            </div>
                            <div className="name-work">
                                <Text name="LIZZY'SWORLD" color="#f2f2f2" fontSize="20px" fontWeight="700" />
                            </div>
                        </div>
                        <div className="first-work-description">
                            <div className="image-wrapper">
                                <img src={lizzysWorld} alt="picture lizzy's world" />
                                <span className="dev-badge">STILL IN DEVELOPMENT</span>
                            </div>
                            <Text
                                name="STEP INTO LIZZY'S WORLD OF VINTAGE FASHION. THIS E-COMMERCE PLATFORM
                                      TRANSFORMS SECOND-HAND SHOPPING INTO AN IMMERSIVE EXPERIENCE THROUGH
                                      THOUGHTFUL DESIGN THAT HIGHLIGHTS EACH UNIQUE PIECE WHILE RESPECTING
                                      THE ARTISTIC SOUL OF THE COLLECTION."
                                color="#f2f2f2"
                                fontWeight="700"
                                fontSize="20px"
                            />
                        </div>

                    </div>
                </section>

                <section className="embla__slide">
                    <div className="second-work">
                        <div className="second-work-title">
                            <div className="number-work">
                                <Text name="02" color="#141414" fontSize="20px" fontWeight="700" />
                            </div>
                            <div className="name-work">
                                <Text name="THE PRICE IS RIGHT" color="#141414" fontSize="20px" fontWeight="700" />
                            </div>
                        </div>
                        <div className="second-work-description">
                            <div className="image-wrapper">
                                <a href="https://oussopu.github.io/jeux-le-juste-prix/" target="_blank" rel="noopener noreferrer">
                                    <img src={justPrice} alt="picture the game" />
                                </a>
                            </div>
                            <Text
                                name="INSPIRED BY THE ICONIC TV SHOW 'THE PRICE IS RIGHT', I BUILT AN
                      INTERACTIVE GUESSING GAME WHERE PLAYERS COMPETE AGAINST A RANDOM
                      PRICE GENERATOR. AN ACADEMIC PROJECT CHALLENGING ME TO DESIGN AND
                      DEPLOY A FULLY FUNCTIONAL GAME WITHIN A SINGLE DAY."
                                color="#141414"
                                fontWeight="700"
                                fontSize="20px"
                            />
                        </div>
                    </div>
                </section>
                <section className="embla__slide">
                    <div className="third-work">
                        <div className="third-work-title">
                            <div className="number-work">
                                <Text name="01" color="#f2f2f2" fontSize="20px" fontWeight="700" />
                            </div>
                            <div className="name-work">
                                <Text name="OH MY FOOD" color="#f2f2f2" fontSize="20px" fontWeight="700" />
                            </div>
                        </div>
                        <div className="third-work-description">
                            <div className="image-wrapper">
                                <a href="https://oussopu.github.io/OC-projet-3/index.html" target="_blank" rel="noopener noreferrer">
                                    <img src={ohMyFood} alt="picture oh my food" />
                                </a>
                            </div>
                            <Text
                                name="AS PART OF AN ACADEMIC PROJECT, I DEVELOPED A WEB APPLICATION
                      TO FACILITATE THE DISCOVERY OF RESTAURANTS IN MY CITY TO FIND
                      THE IDEAL RESTAURANT ACCORDING TO YOUR DESIRES OF THE MOMENT."
                                color="#f2f2f2"
                                fontWeight="700"
                                fontSize="20px"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
