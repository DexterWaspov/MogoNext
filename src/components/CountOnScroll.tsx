'use client';
import { useEffect, useRef, useState } from "react";

export default function CountOnScroll({targetValue}: {targetValue: number}) {
    const ref = useRef<HTMLDivElement>(null);
    const [value, setValue] = useState<number>(0);
    const duration: number = Math.floor((Math.random() * 1000) + 1000); /* animation duration */

    useEffect(() => {
        let animationStarted: boolean = false;

        /* Counter Animation */
        const animate = () => {
            if (animationStarted) return;
            animationStarted = true;

            const start: number = performance.now();
            const step = (timestamp: number) => {
                const progress: number = Math.min((timestamp - start) / duration, 1);
                const current: number = Math.floor(progress * targetValue);
                setValue(current);

                if (progress < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
        };

        /* Trigger an action when scrolling to the viewport */
        const observer = new IntersectionObserver(
            ([entry] ) => {
                if (entry.isIntersecting) animate(); /* start animation */
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [targetValue]);

    return (
        <div ref={ref}>
            {value}
        </div>
    );
}