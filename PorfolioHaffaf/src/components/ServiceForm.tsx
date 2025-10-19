import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Text from "./Text.tsx";
import arrow from "../assets/img/arrowDown.svg";
import { useTextArrowAnimationWebsite } from "../hooks/useTextArrowAnimationWebsite.ts";
import TypewriterEffect from "./animations/TypewriterEffect.tsx";

const ServiceForm = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState<null | "ok" | "err">(null);

    const buttonLabel =
        sending
            ? "SENDING..."
            : status === "ok"
                ? "MESSAGE SENT"
                : status === "err"
                    ? "ERROR — TRY AGAIN"
                    : "SEND ME A MESSAGE";

    useEffect(() => {
        if (status) {
            const t = setTimeout(() => setStatus(null), 3000);
            return () => clearTimeout(t);
        }
    }, [status]);

    useTextArrowAnimationWebsite({ selector: ".service-form" });

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        setSending(true);
        setStatus(null);

        try {
            await emailjs.sendForm(
                "service_slaamrc",
                "template_0xf01w4",
                formRef.current,
                { publicKey: "yXslOppb68GHyUaMZ" }
            );
            setStatus("ok");
            formRef.current.reset();
        } catch (err) {
            console.error(err);
            setStatus("err");
        } finally {
            setSending(false);
        }
    };

    return (
        <form className="service-form" ref={formRef} onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name"></label>
                <input type="text" id="name" name="name" placeholder="YOUR NAME *" required />
            </div>
            <div className="form-group">
                <label htmlFor="phone"></label>
                <input type="tel" id="phone" name="phone" placeholder="YOUR PHONE *" required />
            </div>
            <div className="form-group">
                <label htmlFor="email"></label>
                <input type="email" id="email" name="email" placeholder="YOUR EMAIL *" required />
            </div>
            <div className="form-group">
                <label htmlFor="message"></label>
                <textarea id="message" name="message" rows={5} placeholder="HOW CAN I HELP YOU *" required />
            </div>

            <button
                type="submit"
                disabled={sending}
                aria-busy={sending}
                aria-live="polite"
                className={`submit-btn ${sending ? "is-sending" : ""} ${status ?? ""}`}
            >
                <div className="text-arrow">
                    <TypewriterEffect triggerOnLoad={true} delay={0.5}>
                        <Text
                            name={buttonLabel}
                            fontSize="20px"
                            color="#a3a3a3"
                        />
                    </TypewriterEffect>
                    {!sending && <img src={arrow} alt="arrow icon" />}
                </div>
            </button>
        </form>
    );
};

export default ServiceForm;
