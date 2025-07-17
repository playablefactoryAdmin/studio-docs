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
      const children = containerRef.current.children;
      
      // Start animation
      gsap.fromTo(children, 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out"
        }
      );
    }
  }, [isHydrated]);

  return (
    <div 
      ref={containerRef}
      style={{
        // Hide content until hydrated and animation starts
        opacity: isHydrated ? undefined : 0
      }}
    >
      {children}
    </div>
  );
}
