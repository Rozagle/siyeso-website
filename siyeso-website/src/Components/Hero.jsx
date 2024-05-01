// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import herologo from '/logo-hero.png';
import herobg from '/herobg2.svg';

function Hero() {
  const { t, i18n } = useTranslation();
  const [currentLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'tr');

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  return (
    <>
      <div id='home' className='hero max-w-[6840px] max-h-[780px] lg:max-h-[630px] xxs:min-h-[530px] flex flex-col md:flex-row sm:flex-row ss:flex-row xs:flex-row xxs:flex-row items-center justify-center bg-cover bg-center text-white relative z-0' style={{
        backgroundImage: `url(${herobg})`,
      }}>

        {/* left-side Hero */}
        <div className="left-side flex flex-col justify-center px-16 text-center lg:w-4/5 md:w-1/2 sm:w-2/3 ss:w-4/5 xs:w-4/5 xxs:w-full lg:pb-32 md:pb-72 sm:pb-64 ss:pb-72 xs:pb-42 xs:pl-8 sm:me-2 xxs:p-8 sm:pl-6 ss:pl-4 xxs:pb-52 sm:mr-8 md:text-left sm:text-left sm:text-lg ss:text-left xs:text-left xxs:text-left ">

          <p className=" text-3xl pb-2 md:text-2xl sm:text-2xl ss:text-xl xs:text-sm xxs:text-xs xxs:pb-0 text-opacity-50 uppercase" style={{ fontFamily: "Arimo, sans-serif", fontWeight: 400 }}>{t('left_side_hero.subheading')}</p>
          <h1 className='text-2xl md:text-3xl sm:text-3xl xs:text-2xl xxs:text2xl xxs:mb-0  font-bold mb-2'>
            {t('left_side_hero.heading')}
          </h1>
          {/* <p className="  mb-6 lg:text-xl md:text-lg sm:text-sm ss:text-sm xs:text-sm xxs:hidden">
            {t('left_side_hero.description')}
          </p> */}

          {/* <button type="button" className="flex text-white text-inline justify-center outline font-medium rounded mb-2 text-sm lg:px-1 lg:py-1.5 lg:me-96 md:px-10 md:py-0.5 md:me-36 sm:px-4 sm:py-1.5 sm:me-20 xs:py-1.5 xs:me-32 xxs:me-20 ">
            {t('left_side_hero.button_text')}
          </button> */}

        </div>
        {/* Right-side Hero */}
        <div className="right-side flex lg:mr-40 lg:pt-8 md:w-1/2 sm:2/5">
          <img src={herologo} alt="" className="h-auto lg:w-3/4 md:w-4/5 xxs:w-full lg:mt-3 lg:ml-12 md:ml-30 sm:mr-20 sm:pb-72 ss:pb-96 xs:pb-72 xs:pr-6 xxs:pb-52 xxs:mr-32" />
        </div>
      </div>
    </>
  );
}

export default Hero;
