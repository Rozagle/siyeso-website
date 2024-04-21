// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import herologo from '/logo-hero.png';
import herobg from '/herobg.svg';

function Hero() {
  const { t } = useTranslation();
  return (
    <>
      <div className='hero max-w-[6840px] min-h-[700px] flex flex-col md:flex-row items-center justify-center bg-cover bg-center text-white relative z-0' style={{
        backgroundImage: `url(${herobg})`,
      }}>

        {/* left-side Hero */}
        <div className="left-side lg:w-3/5 md:w-1/2 flex flex-col justify-center text-center md:text-left px-16 lg:pb-32 md:pb-28">

          <p className=" text-3xl pb-2 md:text-2xl text-opacity-50 uppercase" style={{ fontFamily: "Arimo, sans-serif", fontWeight: 400 }}>{t('left_side_hero.subheading')}</p>
          <h1 className='text-2xl md:text-3xl font-bold mb-4 pb-2'>
            {t('left_side_hero.heading')}
          </h1>
          <p className=" lg:text-xl mb-6 md:text-lg">
            {t('left_side_hero.description')}
          </p>

          <button type="button" className="flex text-white text-inline justify-center outline font-medium rounded text-sm lg:px-2 lg:py-1.5 lg:me-96 mb-2 md:px-10 md:py-0.5 md:me-36">
            {t('left_side_hero.button_text')}
          </button>

        </div>
        {/* Right-side Hero */}
        <div className="right-side md:w-1/2 flex ">
          <img src={herologo} alt="" className="lg:w-3/6 md:w-3/5 h-auto lg:mb-80 lg:ml-32 md:mb-80 md:ml-30" />
        </div>
      </div>
    </>
  );
}

export default Hero;
