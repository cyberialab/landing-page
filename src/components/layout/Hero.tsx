import * as React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import Typewriter from 'typewriter-effect';

import TweakableTitle from '@/components/titles/TweakableTitle';

export default function Hero() {
  const particlesInit = React.useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = React.useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <>
      <section
        className='flex h-screen w-screen flex-col bg-black text-white'
        id='hero-container'
      >
        <Particles
          id='tsparticles'
          className='absolute left-0 top-0 z-0 h-full w-full'
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: 'black',
              },
            },
            fpsLimit: 50,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                color: '#ffffff',
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 40,
              },
              opacity: {
                value: 0.4,
              },
              shape: {
                type: 'triangle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className='flex h-screen w-screen flex-col items-center justify-center gap-10'>
          <div className='flex flex-1 flex-col justify-end'>
            <TweakableTitle
              text='CyberIA LABS'
              className='hero-title '
              titleClassName=''
              angleScale={3}
            ></TweakableTitle>
          </div>
          <div className='hero-subtitles flex flex-1 flex-col justify-center gap-2 pb-4'>
            <div>
              {' '}
              Pioneering Innovation for a <b>Digital Revolution.</b>{' '}
            </div>
            <div>
              {' '}
              We take companies to the <b>next level.</b>{' '}
            </div>
            <div className='flex'>
              <span className='mr-2'>We are </span>
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('<b> prompt engineering </b>')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('<b>product design</b>')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('<b> software development</b>')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('<b> Web3</b>')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('<b> artificial intelligence</b>')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('<b> creative</b>')
                    .deleteAll()
                    .start();
                }}
              ></Typewriter>
            </div>
            <div className='hero-buttons align-center flex justify-center'>
              <span className='hero-button contact-us-button'>
                <a href='#contact-us' />
              </span>
              <span className='hero-button join-us-button'>
                <a href='#join-us' />
              </span>
            </div>
          </div>
        </div>
        <div className='relative mb-3 flex'>
          <div className='h-2 flex-1 bg-white'></div>
          <div
            id='animated-circle-hero'
            className='absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-solid border-white bg-white'
          ></div>
          <div className='h-2 flex-1 bg-white'></div>
        </div>
      </section>
    </>
  );
}
