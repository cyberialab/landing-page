import * as React from 'react';

const closeButton = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='16'
      height='16'
    >
      <path d='M5.14 3.28L3.72 4.72L10.28 11.28L3.72 17.84L5.14 19.28L11.7 12.72L18.28 19.28L19.7 17.84L13.14 11.28L19.7 4.72L18.28 3.28L11.7 9.84Z' />
    </svg>
  );
};

const minimizeButton = () => {
  return (
    <svg viewBox='0 0 24 24' width='16' height='16'>
      <path d='M5 12h14v2H5z' />
    </svg>
  );
};

export default function Hero() {
  return (
    <div className='flex h-screen bg-black text-white'>
      <div className='container mx-auto my-auto'>
        <div className='flex flex-col items-center text-center'>
          <div className='hero-video-frame margin-auto relative mb-3 max-w-sm overflow-hidden rounded-md'>
            <div className='hero-video-header flex h-6 w-full items-center justify-end'>
              <div className='video-frame-header-btns z-10 flex'>
                <div className='video-frame-header-btn mr-1 cursor-pointer overflow-hidden rounded-full bg-yellow-500'>
                  {minimizeButton()}
                </div>
                <div className='video-frame-header-btn mr-1 cursor-pointer overflow-hidden rounded-full bg-red-400'>
                  {closeButton()}
                </div>
              </div>
            </div>
            <video
              src='/videos/hero-video.mp4'
              className='hero-video'
              autoPlay
              loop
              muted
            />
          </div>
          <h1 className='text-4xl font-bold'>CyberIA Labs</h1>
        </div>
      </div>
    </div>
  );
}
