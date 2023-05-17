import gsap from 'gsap';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      gsap.to('#pointer-hexa', {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
      });
    });

    window.addEventListener('mousemove', (e) => {
      // move #svg-point to mouse position without duration
      gsap.to('#svg-dot', {
        duration: 0,
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);

  // Put Header or Footer Here
  return <>{children}</>;
}
