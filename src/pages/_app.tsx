/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */
/** @jsxImportSource @emotion/react */

import { gsap } from 'gsap';
import { AppProps } from 'next/app';
import React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', moveElements);
}
function moveElements(e: MouseEvent) {
  gsap.to('#svg-hexa', {
    duration: 0.7,
    x: e.clientX - 20,
    y: e.clientY - 20,
  });

  gsap.to('#svg-dot', {
    duration: 0.2,
    x: e.clientX - 4,
    y: e.clientY - 4,
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // adding scroll trigger animation to circle
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <div className='pointer-events-none fixed left-0 top-0 h-screen w-screen mix-blend-difference'>
        <div className='absolute left-0 top-0' id='svg-dot'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='6'
            height='6'
            viewBox='0 0 6 6'
          >
            <circle cx='3' cy='3' r='3' fill='white' />
          </svg>
        </div>
        <div
          className='absolute left-0 top-0 mix-blend-difference'
          id='svg-hexa'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 20 20'
          >
            <polygon
              points='10,2.5 16.7,6.5 16.7,13.5 10,17.5 3.3,13.5 3.3,6.5'
              fill='white'
            />
          </svg>
        </div>{' '}
      </div>
    </>
  );
}

export default MyApp;
