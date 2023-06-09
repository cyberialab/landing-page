import * as React from 'react';

export default function Products() {
  return (
    <>
      <section
        className='border-dashed-2 flex min-h-screen w-screen flex-col justify-center border-b border-white bg-black text-white'
        id='products'
      >
        <div className='m-auto max-w-7xl'>
          <h2 className='fun-text-shadow mb-3 text-center'>Products</h2>
          <div className='product-card flex w-full flex-wrap justify-center rounded-md border-2 border-solid border-white'>
            <div className='relative flex-1'>
              <img src='/images/provok.png' alt='provok' />
            </div>
            <div className='flex flex-1 flex-col justify-between p-7'>
              <div className='righteous fun-text-shadow text-3xl'>
                Provok.ai
              </div>
              <div className='cutive text-md mt-3 text-xl'>
                Provok.ai is a digital magazine that uses AI to generate
                content. Every month a new issues comes out, and every month the
                AI gets a little bit smarter. Collaborating with brands and
                creators alike, we are building a new kind of media.
              </div>

              <div className='align-center flex justify-center'>
                <span className='hero-button go-to-button'>
                  <a href='https://provok.ai' target='_blank' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
