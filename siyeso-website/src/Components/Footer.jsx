// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {


    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
    const { t, i18n } = useTranslation();
    const [currentLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'tr');
    useEffect(() => {
      i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log(email)

    };

    const handlesubscriptionClick = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email.trim()) {
            setErrorMessage(t('contactus.erroremail'));
        } else if (!emailRegex.test(email)) {
            setErrorMessage(t('contactus.errorvalidemail'));
        } else {
            setSubscriptionSuccess(true);
            setEmail('');
            setErrorMessage('');
            // Reset messages after 1 minute
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
            <footer className="bg-black text-white">
                <div className="container mx-auto py-8 px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-bold mb-4">{t('Footer.heading1')}</h3>
                            <div className="mt-6">
                                <p style={{ marginBottom: '10px' }}>
                                    <a href="https://goo.gl/maps/LqEgX3RxspXzomoS7" className="text-white hover:text-gray-400">{t('Footer.address')}</a>
                                </p>
                                <p style={{ marginBottom: '10px' }}>
                                    <a href="tel:+905325959709" className="text-white hover:text-gray-400">{t('Footer.phone')}</a>
                                </p>
                                <p>
                                    <a href="mailto:info@siyeso.com" className="text-white hover:text-gray-400">{t('Footer.mail')}</a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">{t('Footer.heading2')}</h3>
                            <ul>
                                <li><a href="#" className="text-white hover:text-gray-400" style={{ marginBottom: '10px' }}>{t('Footer.contactus')}</a></li>
                                <li><a href="#" className="text-white hover:text-gray-400" style={{ marginBottom: '10px' }}>{t('Footer.policy')}</a></li>
                                <li><a href="#" className="text-white hover:text-gray-400">{t('Footer.terms')}</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">{t('Footer.newsletter')}</h3>
                            <p className="text-white mb-4">{t('Footer.newsletterdescription')}</p>
                            <div className="mt-4">
                                <input className="bg-gray-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 w-full" type="email" placeholder='Enter Email Address' value={email} onChange={handleEmailChange} required />
                                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                                <button className="mt-2 bg-[#6391FF] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300" onClick={handlesubscriptionClick}>{t('Footer.Subscribe')}</button>
                            </div>
                        </div>
                    </div>
                    <hr className="my-8 border-gray-700" />
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm">&copy; 2024 All rights reserved.</p>
                        <img src="/group-7@2x.png" alt="Logo" className="md:ml-auto h-8" />
                    </div>
                </div>
            </footer>
            {subscriptionSuccess && (
                <div className="fixed top-5 left-10 w-[300px] bg-green-500 bg-opacity-50 text-white p-4 rounded-lg shadow-md transition-opacity duration-500">
                    <h2>{t('Footer.subscriptionSuccesstxt')}</h2>
                    <p>{t('Footer.subscriptionSuccesstxt2')}</p>
                </div>
            )}


        </>

    );
}

export default Footer;
