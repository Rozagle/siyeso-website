// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Aboutusreg from '../assets/Aboutusreg.svg';
import Aboutusblob from '../assets/Aboutusblob.svg';


function OurExpertise() {

    const { t, i18n } = useTranslation();
    const [currentLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'tr');

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    return (
        <>


            <div id='ourexpertise' className="px-3 md:lg:xl:px-40 py-20 bg-opacity-10 max-w-[1400px] mx-auto">
                <img src={Aboutusreg} alt="" className='absolute mb-24 xxl:left-[200px] lg:left-[1000px] lg:max-w-[80%] lg:mb-48 md:left-[750px] md:max-w-[87%] sm:left-[600px] ss:left-[500px] ss:max-w-[70%] xs:left-[900px] xs:max-w-[30%] xxs:left-[300px] ' style={{ zIndex: -1 }} />
                <img src={Aboutusblob} alt="" className='absolute lg:right-[1100px] md:right-[800px] md:max-w-[80%] md:mt-42 sm:right-[620px]  sm:max-w-[60%] ss:right-[600px] ss:max-w-[50%] xs:right-[400px] xs:max-w-[80%] xxs:right-[282px] xxs:w-[25%] xxs:mt-42 ' style={{ zIndex: -1 }} />
                <div className='flex space-y-2 flex-col text-center mb-14 '>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-center mt-8 mb-4 capitalize">
                        {t('OurExpertise.heading')}
                    </h1>
                    <span className='text-2xl'>
                        {t('OurExpertise.subheading')}
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 group bg-none rounded-3xl  ">

                    <div className="p-10 flex flex-col items-center text-center group bg-white rounded-3xl hover:bg-slate-50 cursor-pointer shadow-md">
                        <span className="p-4 rounded-full bg-red-500 text-white shadow-lg shadow-red-200"></span>
                        <p className="text-2xl font-medium text-slate-700 m-3">{t('OurExpertise.firstgridheading')}</p>
                        <p className="mt-2 text-md text-slate-500">{t('OurExpertise.firstgridsubheading')}</p>
                    </div>

                    <div className="p-10 flex flex-col items-center text-center group bg-white  rounded-3xl hover:bg-slate-50 cursor-pointer shadow-md">
                        <span className="p-4 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200"></span>
                        <p className="text-2xl font-medium text-slate-700 m-3">{t('OurExpertise.secondgridheading')}</p>
                        <p className="mt-2 text-md text-slate-500">{t('OurExpertise.secondgridsubheading')}</p>
                    </div>

                    <div className="p-10 flex flex-col items-center text-center group bg-white  rounded-3xl hover:bg-slate-50 cursor-pointer shadow-md">
                        <span className="p-4 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200"></span>
                        <p className="text-2xl font-medium text-slate-700 m-3">{t('OurExpertise.thirdgridhaeding')}</p>
                        <p className="mt-2 text-md text-slate-500">{t('OurExpertise.thirdgridsubhaeding')}</p>
                    </div>

                    <div className="p-10 flex flex-col items-center text-center group bg-white  rounded-3xl hover:bg-slate-50 cursor-pointer shadow-md">
                        <span className="p-4 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200"></span>
                        <p className="text-2xl font-medium text-slate-700 m-3">{t('OurExpertise.forthgridheading')}</p>
                        <p className="mt-2 text-md text-slate-500">{t('OurExpertise.forthgridsubheading')}</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default OurExpertise;
