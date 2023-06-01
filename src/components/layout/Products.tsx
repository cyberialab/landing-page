import Image from 'next/image';
import * as React from 'react';

export default function Products() {
  return (
    <>
      <section
        className='flex h-screen w-screen flex-col justify-center bg-black text-white'
        id='services-container'
      >
        <div className='m-auto max-w-7xl'>
          <h2 className='mb-3 text-center' id='our-services-title'>
            Products
          </h2>
          <div className='product-card flex w-full flex-wrap justify-center rounded-md border-2 border-solid border-white'>
            <div className='relative flex-1'>
              <Image src='/images/provok.png' fill alt='provok' />
            </div>
            <div className='flex flex-1 flex-col justify-between p-7'>
              <div className='righteous fun-text-shadow text-4xl'>
                Provok.ai
              </div>
              <div className='cutive text-md mt-3 text-2xl'>
                Provok.ai is a digital magazine that uses AI to generate
                content. Every month a new issues comes out, and every month the
                AI gets a little bit smarter. Collaborating with brands and
                creators alike, we are building a new kind of media.
              </div>

              <div className='align-center flex justify-center'>
                <span className='hero-button go-to-button'>
                  <a href='https://provok.ai' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
