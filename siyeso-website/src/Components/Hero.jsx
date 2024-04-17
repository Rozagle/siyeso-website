// eslint-disable-next-line no-unused-vars
import React from 'react';
import herologo from '/logo-hero.png';

function Hero() {
  return (
    <>
      <div className='hero max-w-[1840px] min-h-[650px] flex flex-col md:flex-row items-center justify-center bg-cover bg-center text-white relative z-0' style={{
        backgroundImage: `url(/herobg.svg)`,
      }}>
        <div className="left-side md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
          <h1 className='text-2xl md:text-4xl font-bold mb-4 pb-2'>
            One-step solutions for your projects?
          </h1>
          <p className="text-lg mb-6">Create for your projects.</p>
        </div>
        <div className="right-side md:w-1/2 flex justify-center items-center">
          <img src={herologo} alt="" className="w-2/3 md:w-1/3 h-auto  mb-72 ml-62" />
        </div>
      </div>
    </>
  );
}

export default Hero;


