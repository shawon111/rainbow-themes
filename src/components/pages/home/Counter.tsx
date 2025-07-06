'use client'
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Counter = ({
    value,
    duration = 3,
    ease = "power1.out"
}: {
    value: number;
    duration?: number;
    ease?: string;
}) => {
    const counterRef = useRef<HTMLSpanElement>(null);
    useGSAP(() => {
        if (counterRef.current) {
            gsap.fromTo(counterRef.current,
                { innerText: 0 },
                {
                    innerText: value,
                    duration,
                    ease,
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        if (counterRef.current) {
                            // Format with commas (optional)
                            counterRef.current.innerText = Math.floor(
                                this.targets()[0].innerText
                            ).toLocaleString();
                        }
                    }
                }
            );
        }
    }, [value]);
    return (
        <span
            ref={counterRef}
        >
            0
        </span>
    );
};

export default Counter;