"use client";

import { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";

export default function AnimatedMDXContent({ children }) {
    const containerRef = useRef(null);
    const [isHydrated, setIsHydrated] = useState(false);

    // Set hydrated flag after client-side hydration
    useEffect(() => {
        setIsHydrated(true);
    }, []);

    useLayoutEffect(() => {
        if (containerRef.current && isHydrated) {
            const children = Array.from(containerRef.current.children);

            // Skip the first element and animate the rest
            const elementsToAnimate = children.slice(1);

            gsap.fromTo(children[0] as any,
                { opacity: 0, x: -15 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: "power3.out",
                }
            )

            if (elementsToAnimate.length > 0) {
                // Start animation on all elements except the first
                gsap.fromTo(
                    elementsToAnimate,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        stagger: 0.07,
                        delay: 0.0,
                        ease: "power3.out",
                    }
                );
            }
        }
    }, [isHydrated]);

    return (
        <div
            ref={containerRef}
            style={{
                // Hide content until hydrated and animation starts
                opacity: isHydrated ? undefined : 0,
            }}
        >
            {children}
        </div>
    );
}
