// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Footer() {


    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log(email)

    };

    const handlesubscriptionClick = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email.trim()) {
            setErrorMessage('Please enter an email address.');
        } else if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email address.');
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
            <footer className="bg-gray-800 text-gray-300">
                <div className="container mx-auto py-8 px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-bold mb-4">Our Information</h3>
                            <div className="mt-6">
                                <p style={{ marginBottom: '10px' }}>
                                    <a href="https://goo.gl/maps/LqEgX3RxspXzomoS7" className="text-gray-300 hover:text-gray-400">Sanayi Mah. Teknopark Bulvarı, No: 1 / 2C İç Kapı No: 2105 Pendik İSTANBUL</a>
                                </p>
                                <p style={{ marginBottom: '10px' }}>
                                    <a href="tel:+905325959709" className="text-gray-300 hover:text-gray-400">Office: +90 532 595 97 09</a>
                                </p>
                                <p>
                                    <a href="mailto:info@siyeso.com" className="text-gray-300 hover:text-gray-400">Support: info@siyeso.com</a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Others</h3>
                            <ul>
                                <li><a href="#" className="text-gray-300 hover:text-gray-400" style={{ marginBottom: '10px' }}>User FAQs</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-gray-400" style={{ marginBottom: '10px' }}>Contact Us</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-gray-400" style={{ marginBottom: '10px' }}>Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-gray-400">Terms and Conditions</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                            <p className="text-gray-300 mb-4">Subscribe to our newsletter and be the first to know about our updates</p>
                            <div className="mt-4">
                                <input className="bg-gray-900 text-gray-100 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 w-full" type="email" placeholder='Enter Email Address' value={email} onChange={handleEmailChange} required />
                                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                                <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300" onClick={handlesubscriptionClick}>Subscribe</button>
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
                    <h2>Thank you for subscribing!</h2>
                    <p>You will get updates about siyeso</p>
                </div>
            )}


        </>

    );
}

export default Footer;
