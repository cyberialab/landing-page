/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { gsap } from 'gsap';
import * as React from 'react';
import Typewriter from 'typewriter-effect';

import TweakableTitle from '@/components/titles/TweakableTitle';

export default function Hero() {
  React.useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      gsap.to('#svg-hexa', {
        duration: 0.7,
        x: e.clientX - 20,
        y: e.clientY - 20,
      });
    });

    window.addEventListener('mousemove', (e) => {
      gsap.to('#svg-dot', {
        duration: 0.2,
        x: e.clientX - 4,
        y: e.clientY - 4,
      });
    });
  }, []);

  return (
    <>
      <section
        className='flex h-screen w-screen bg-black text-white'
        id='hero-container'
      >
        <div className='flex h-screen w-screen flex-col items-center justify-center gap-10'>
          <TweakableTitle
            text='CyberIA LABS'
            className='hero-title '
            titleClassName=''
            angleScale={3}
          ></TweakableTitle>

          <div className='hero-subtitles'>
            <div className='flex'>
              <span className='mr-2'>We are </span>
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(' prompt engineering')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(' product design')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(' software development')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(' Web3')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(' artificial intelligence')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(' creative')
                    .deleteAll()
                    .start();
                }}
              ></Typewriter>
            </div>
          </div>
        </div>
        <div className='absolute' id='svg-dot'>
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
          className='absolute'
          id='svg-hexa'
          css={css`
            mix-blend-mode: difference;
          `}
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
      </section>
    </>
  );
}
