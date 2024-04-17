// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const navLink = [
    {
        path: '#home',
        key: 'home'
    },
    {
        path: '#about',
        key: 'about'
    },
    {
        path: '#ourExpertise',
        key: 'our_expertise'
    },
    {
        path: '#reference',
        key: 'reference'
    },
    {
        path: '#team',
        key: 'team'
    },
    {
        path: '#contact',
        key: 'contact'
    },

];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLanguage(lng);
        localStorage.setItem('selectedLanguage', lng);
        setMenuOpen(false); // Close the dropdown after selecting language
    };

    const [isSvgClicked, setIsSvgClicked] = useState(false);

    const handleClickSvg = () => {
        setIsSvgClicked(!isSvgClicked);
    };
    return (
        <nav className="navbar bg-transparent absolute top-0 left-0 right-0 z-10">
            <div className="navigationBar text-white flex justify-between items-center h-16 max-w-[1380px] mx-auto px-5 relative">
                <div className="w-36 h-9 relative flex items-center">
                    <img className="w-10 h-10 mr-2 rotate-[-4.99deg]" alt="" src="/siyeso-logo-nav.png" />
                    <div className="text-lg font-semibold ">siyeso</div>
                </div>

                {/* Menu Icon for Mobile screen */}
                <div className="lg:hidden flex items-center justify-end mr-0 ml-10">
                    {menuOpen ? (
                        <IoClose size={30} onClick={toggleMenu} />
                    ) : (
                        <IoMenuOutline size={30} onClick={toggleMenu} />
                    )}
                </div>

                {/* Dropdown Menu for Mobile */}
                <div className={`lg:hidden fixed mt-6 top-8 right-0 shadow w-56 bg-opacity-10 backdrop-blur-lg flex flex-col rounded-lg transition-all duration-500 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <ul className="menu py-2 text-sm dark:text-gray-900 capitalize" aria-labelledby="dropdownDefaultButton">
                        {navLink.map((item, index) => (
                            <li key={index} className="menu_items p-2 text-center hover:text-blue-400">
                                <a href={item.path} className="menu-link block px-4 py-2 hover:bg-gray-100 dark:hover:text-blue-400">{t(item.key)}</a>
                            </li>
                        ))}
                        <li onClick={() => changeLanguage(currentLanguage === 'en' ? 'tr' : 'en')} className="menu_items p-2 hover:text-blue-400 cursor-pointer">
                            <span className="menu-link block px-4 py-2 text-center hover:bg-gray-100 dark:hover:text-blue-400">{currentLanguage === 'en' ? 'English' : 'Turkish'}</span>
                        </li>
                    </ul>
                </div>

                {/* Navbar links Large Screen */}
                <ul className={`menu hidden lg:flex text-lg font-semibold capitalize ${menuOpen ? 'hidden' : ''}`}>
                    {navLink.map((item, index) => (
                        <li key={index} className="menu_items p-3 hover:dark:text-gray-900 ">
                            <a href={item.path} className="menu-link p-6">{t(item.key)}</a>
                        </li>
                    ))}

                    {/* Language Dropdown for Large Screen */}
                    <div className="relative lg:flex hidden sm:hidden">
                        <div className="flex items-center space-x-1" id="dropdown-container">
                            <button onMouseEnter={() => { setMenuOpen(true); handleClickSvg(); }} className="focus:outline-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`svg1 w-8 h-8 text-white hover:dark:text-gray-900 ${isSvgClicked ? 'clicked' : ''}`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                                    />
                                </svg>
                            </button>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className={`svg2 w-3 h-3 text-white hover:dark:text-gray-900  ${isSvgClicked ? 'rotate-180 ' : ''}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                    <button onChange={toggleMenu} className='language_btn2 lg:inline hidden sm:hidden hover:bg-blue-400 text-white font-bold py-2 px-4 rounded'>{currentLanguage === 'en' ? 'English' : 'Turkish'}</button>
                </ul>

                {/* Language menu Dropdown */}
                <div className="lg:inline hidden sm:hidden">
                    <button className="lg:hidden sm:hidden" onClick={() => setMenuOpen(true)}></button>
                    <div className={`languagedp fixed mt-6 top-8 right-48 shadow w-56 bg-opacity-20 backdrop-blur-lg flex flex-col rounded-lg transition-all duration-500 ease-in-out transform ${menuOpen ? '' : 'hidden'}`}>
                        <button onClick={() => changeLanguage('en')} className='language_btn2 lg:inline hidden sm:hidden hover:bg-blue-400 text-white font-bold py-2 px-4 rounded'>English</button>
                        <button onClick={() => changeLanguage('tr')} className='language_btn2 lg:inline hidden sm:hidden hover:bg-blue-400 text-white font-bold py-2 px-4 rounded'>Turkish</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

