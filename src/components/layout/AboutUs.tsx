import Image from 'next/image';
import * as React from 'react';

export default function AboutUs() {
  return (
    <>
      <section
        className='border-dashed-2 about-us flex w-screen flex-col justify-center border-b border-white bg-black py-10 text-white'
        id='about-us'
      >
        <h2 className='mb-5 text-center' id='our-services-title'>
          About Us
        </h2>
        <div className='m-auto max-w-7xl'>
          <div className='us-cards flex w-full flex-wrap justify-center'>
            <div className='us-card mx-5 my-8 flex cursor-pointer flex-col'>
              <div className='us-card-image relative overflow-hidden rounded-md'>
                <Image
                  className='absolute top-0'
                  src='/images/jose1.jpg'
                  alt='jose1'
                  fill
                />
                <Image
                  className='top-image absolute top-0 z-10 opacity-0'
                  src='/images/jose2.jpg'
                  alt='jose1'
                  fill
                />
              </div>
              <div>
                <div>
                  <div className='righteous text-3xl'> Jose Romero </div>
                  <div className='cutive'> Co-founder & Tech guy</div>
                </div>
              </div>
            </div>
            <div className='us-card relative mx-5 my-8 flex cursor-pointer flex-col'>
              <div className='us-card-image relative top-0 flex h-full w-full items-center justify-center overflow-hidden rounded-md'>
                <Image
                  className='absolute top-0'
                  src='/images/diego1.jpg'
                  alt='jose1'
                  fill
                />
                <Image
                  className='top-image absolute top-0 z-10 opacity-0'
                  src='/images/diego2.jpg'
                  alt='jose1'
                  fill
                />
              </div>
              <div>
                <div>
                  <div className='righteous text-3xl'> Diego Salazar </div>
                  <div className='cutive'> Co-founder & Product guy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
