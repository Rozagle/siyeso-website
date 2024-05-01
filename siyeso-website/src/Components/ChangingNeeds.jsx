// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import enjson from '../Translations/En/en.json';
import trjson from '../Translations/TR/tr.json';

function ChangingNeeds() {
  const { i18n } = useTranslation();
  const [changingImages, setChangingImages] = useState(trjson.changing); // Initialize with 'tr' json

  useEffect(() => {
    const currentLanguage = localStorage.getItem('selectedLanguage') || 'tr';
    i18n.changeLanguage(currentLanguage);

    setChangingImages(currentLanguage === 'tr' ? trjson.changing : enjson.changing);
  }, [i18n.language]);

  return (
    <>
      <div id='hero' className="mx-auto lg:w-4/6 md:w-11/12 sm:w-11/12 ss:w-11/12 xs:w-11/12 xxs:w-full bg-white p-1">

        <div className="grid lg:grid-cols-12 sm:grid-cols-12 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
          <div className="lg:col-span-8  sm:col-span-8  xs:col-span-8 xxs:col-span-8 ">
            <img src={changingImages.imageUrl1} alt="" className="lg:w-full md:w-3/4  ss:w-full h-auto" />
          </div>
          <div className="col-span-4  sm:col-span-4">
            <img src={changingImages.imageUrl2} alt="" className="lg:w-full md:w-3/4 ss:w-full h-auto lg:mt-12 sm:mt-11 sm:ml-3 ss:ml-7 xs:ml-16 xxs:ml-6" />
          </div>
          <div className="col-span-6  sm:col-span-4">
            <img src={changingImages.imageUrl4} alt="" className="lg:w-full ss:w-full h-auto lg:mt-1 lg:ml-2 sm:mt-2 sm:ml-3 ss:ml-4 xs:ml-6 xxs:ml-2" />
          </div>
          <div className="col-span-6  sm:col-span-8">
            <img src={changingImages.imageUrl3} alt="" className="lg:w-full h-auto lg:mt-1 sm:mt-2 ss:ml-4 xs:ml-2 xxs:ml-2" />
          </div>
        </div>



      </div>
    </>
  );
}

export default ChangingNeeds;