import * as React from 'react';

export default function GetInTouch() {
  return (
    <>
      <section
        className='border-dashed-2 about-us flex w-screen flex-col justify-center border-b border-white bg-black py-10 text-white'
        id='get-in-touch'
      >
        <h2 className='fun-text-shadow mb-5 text-center'>Get in touch</h2>
        <div className='hero-buttons align-center flex flex-wrap justify-center'>
          <span className='hero-button contact-us-button'>
            <a href='mailto:jmromeroe@gmail.com?subject=Business opportunity' />
          </span>
          <span className='hero-button join-us-button'>
            <a href='mailto:jmromeroe@gmail.com?subject=Sending CV for future opportunities' />
          </span>
        </div>
      </section>
    </>
  );
}
