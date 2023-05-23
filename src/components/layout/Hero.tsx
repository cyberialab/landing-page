import { gsap } from 'gsap';
import * as React from 'react';
import Typewriter from 'typewriter-effect';

import TweakableTitle from '@/components/titles/TweakableTitle';

export default function Hero() {
  React.useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      gsap.to('#svg-hexa', {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
      });
    });

    window.addEventListener('mousemove', (e) => {
      gsap.to('#svg-dot', {
        duration: 0,
        x: e.clientX,
        y: e.clientY,
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
            width='3'
            height='3'
            viewBox='0 0 3 3'
          >
            <circle cx='1.5' cy='1.5' r='1.5' fill='white' />
          </svg>
        </div>
        <div className='absolute' id='svg-hexa'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
          >
            <polygon
              points='10,2.5 16.7,6.5 16.7,13.5 10,17.5 3.3,13.5 3.3,6.5'
              fill='none'
              stroke='white'
              stroke-width='1'
            />
          </svg>
        </div>{' '}
      </section>
    </>
  );
}
