// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import './Client.css'; // Make sure the path is correct
import { akbank, BurganBank, ziraatkatilim, ziraatteknoloji, DenizBank, hsbc, intertech, kalkilmayatirimbankasi, odeabank, evrensel } from '../assets/bank-logos/Banks';

function Client() {
    useEffect(() => {
        // Run this script after the component mounts
        var copyslide = document.querySelector(".logo-slides").cloneNode(true);
        document.querySelector('.logos').appendChild(copyslide);
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    return (
        <div>
            <h1 className="text-2xl font-bold">Our Clients</h1>

            <div className="logos overflow-hidden bg-white whitespace-nowrap relative py-10">
                {/* Corrected the class name to match CSS */}
                <div className="logo-slides">
                    <img src={akbank} alt="" className="inline-block h-10 mx-4" />
                    <img src={BurganBank} alt="" className="inline-block h-10 mx-4" />
                    <img src={ziraatkatilim} alt="" className="inline-block h-10 mx-4" />
                    <img src={ziraatteknoloji} alt="" className="inline-block h-10 mx-4" />
                    <img src={DenizBank} alt="" className="inline-block h-10 mx-4" />
                    <img src={hsbc} alt="" className="inline-block h-10 mx-4" />
                    <img src={intertech} alt="" className="inline-block h-10 mx-4" />
                    <img src={kalkilmayatirimbankasi} alt="" className="inline-block h-10 mx-4" />
                    <img src={odeabank} alt="" className="inline-block h-10 mx-4" />
                    <img src={evrensel} alt="" className="inline-block h-10 mx-4" />
                </div>
            </div>
        </div>
    );
}

export default Client;

