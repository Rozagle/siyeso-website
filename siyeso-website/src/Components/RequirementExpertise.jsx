// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// import Aboutusreg from '../assets/Aboutusreg.svg';
// import Aboutusblob from '../assets/Aboutusblob.svg';


function RequirementExpertise() {

    const { t, i18n } = useTranslation();
    const [currentLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'tr');

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    return (
        <>

            <div className="my-24 md:px-14 px-4 max-w-[1400px] mx-auto">
                {/* <img src={Aboutusreg} alt="" className='absolute mb-24 xxl:left-[200px] lg:left-[1000px] lg:max-w-[80%] lg:mb-48 md:left-[750px] md:max-w-[87%] sm:left-[600px] ss:left-[500px] ss:max-w-[70%] xs:left-[900px] xs:max-w-[30%] xxs:left-[300px] ' style={{ zIndex: -1 }} />
                <img src={Aboutusblob} alt="" className='absolute lg:right-[1100px] md:right-[800px] md:max-w-[80%] md:mt-42 sm:right-[620px]  sm:max-w-[60%] ss:right-[600px] ss:max-w-[50%] xs:right-[400px] xs:max-w-[80%] xxs:right-[282px] xxs:w-[25%] xxs:mt-42 ' style={{ zIndex: -1 }} /> */}
                <div className='flex space-y-2 flex-col text-center mb-14 '>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-center mt-8 mb-4 capitalize">
                        {t('RequirementExpertise.heading')}                        </h1>
                    <span className='text-2xl'>
                        {t('RequirementExpertise.subheading')}                        </span>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10 ">

                    <div className='w-full lg:w-3/4'>
                        <div className='grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8  '>
                            <div className='bg-[##ffffff66] rounded-lg h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-500  '>
                                <div>
                                    <h5 className='text-2xl font-semibold text-black px-5 text-center mt-5'>conventient study schedules</h5>
                                    <p>
                                    Kurumlar, hızla gelişen piyasa ekonomisine paralel olarak sürekli yeni teknolojik uygulamalara ihtiyaç duyuyor.
                                    </p>
                                </div>
                            </div>
                            <div className='bg-[##ffffff66] rounded-lg h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-500  '>
                                <div>
                                    <img src="" alt="" />
                                    <h5 className='text-2xl font-semibold text-black px-5 text-center mt-5'>conventient study schedules</h5>
                                </div>
                            </div>
                            <div className='bg-[##ffffff66] rounded-lg h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-500  '>
                                <div>
                                    <img src="" alt="" />
                                    <h5 className='text-2xl font-semibold text-black px-5 text-center mt-5'>conventient study schedules</h5>
                                </div>
                            </div>
                            <div className='bg-[##ffffff66] rounded-lg h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-500  '>
                                <div>
                                    <img src="" alt="" />
                                    <h5 className='text-2xl font-semibold text-black px-5 text-center mt-5'>conventient study schedules</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
}

export default RequirementExpertise;







