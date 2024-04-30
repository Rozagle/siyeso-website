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
      <div id='hero' className="mx-auto w-4/6 bg-white p-1">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
          <div className="col-span-full sm:col-span-8">
            <img src={changingImages.imageUrl1} alt="" className="lg:w-full md:w-3/4 h-auto" />
          </div>
          <div className="col-span-full sm:col-span-4">
            <img src={changingImages.imageUrl2} alt="" className="lg:w-full md:w-3/4 h-auto lg:mt-12" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
          <div className="col-span-full sm:col-span-8">
            <img src={changingImages.imageUrl3} alt="" className="lg:w-full h-auto mt-4" />
          </div>
          <div className="col-span-full sm:col-span-4">
            <img src={changingImages.imageUrl4} alt="" className="lg:w-full h-auto lg:mt-12" />
          </div>
        </div>

      </div>
    </>
  );
}

export default ChangingNeeds;





