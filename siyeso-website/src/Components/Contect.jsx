// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Contect() {
  const [firstName, setFirstName] = useState('');
  const [comName, setComName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const { t, i18n } = useTranslation();
  const [currentLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'tr');
  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);


  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    if (!event.target.value.trim()) {
      setErrorMessage(t('contactus.erroremptyname'));
    } else {
      setErrorMessage('');
    }
  };
  const handleComNameChange = (event) => {
    setComName(event.target.value);
    if (!event.target.value.trim()) {
      setErrorMessage(t('contactus.erroremptycompany'));
    } else {
      setErrorMessage('');
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNotifyClick = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!firstName.trim()) {
      setErrorMessage(t('contactus.erroremptyname'));
    } else if (!comName.trim()) {
      setErrorMessage(t('contactus.erroremptycompany'));
    } else if (!email.trim()) {
      setErrorMessage(t('contactus.erroremail'));
    } else if (!emailRegex.test(email)) {
      setErrorMessage(t('contactus.errorvalidemail'));
    } else {
      setSubscriptionSuccess(true);

      setEmail('');
      setFirstName('');
      setComName('');
      setErrorMessage('');
      // Reset messages after 3 seconds
      setTimeout(() => {
        setSubscriptionSuccess(false);
      }, 3000);
    }

    setTimeout(() => {
      setErrorMessage('');
    }, 5000);
};



  return (
    <>

      <div id='contact' className=' w-full py-16 text-black bg-[#6391FF] px-4'>
        <div className='max-w-[1240px] max-h-[420px] xxs:max-h-[500px]  mx-auto grid lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold py-6'> {t('contactus.heading')}</h1>
            <h2 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>{t('contactus.subheading')}</h2>
            <p>{t('contactus.signupdescription')}</p>
          </div>
          <div className='my-4'>
            <div className='flex flex-col sm:flex-cols items-center justify-between w-full'>
              <input className='p-3 m-2 flex w-full rounded-md text-black' type="text" placeholder={t('contactus.placeholdername')} value={firstName} onChange={handleFirstNameChange} required />
              <input className='p-3 m-2 flex w-full rounded-md text-black' type="text" placeholder={t('contactus.placeholdercompanyname')} value={comName} onChange={handleComNameChange} required />
              <input className='p-3  m-2 flex w-full rounded-md text-black' type="email" placeholder={t('contactus.placeholderemail')}value={email} onChange={handleEmailChange} required />
              <div className="flex flex-col items-start">
                <p>{t('contactus.policydescription')} <span className=' text-blue-600 text' style={{ textDecoration: 'underline' }}>{t('contactus.policydescriptionspan')}</span>.</p>
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
              </div>
              <div>
                <button className="bg-black text-white rounded-md font-medium w-[200] ml-62 my-2 px-6 py-4" style={{ whiteSpace: 'nowrap' }} onClick={handleNotifyClick}>{t('contactus.notifymebtn')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {subscriptionSuccess && (
        <div className="fixed top-5 left-10 w-[300px] bg-green-500 bg-opacity-50 text-white p-4 rounded-lg shadow-md transition-opacity duration-500">
          <h2 className='subscriptionSuccesstxt'>{t('contactus.subscriptionSuccesstxt')}</h2>
          <p className='subscriptionSuccesstxt2'>{t('contactus.subscriptionSuccesstxt2')}</p>
        </div>
      )}
    </>

  );
}

export default Contect;

