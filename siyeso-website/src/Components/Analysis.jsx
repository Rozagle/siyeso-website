// eslint-disable-next-line no-unused-vars
import React from 'react';
import Lottie from 'lottie-react';
import analysis from '../assets/analysis.json';

function Analysis() {
    return (
        <div className='w-full bg-[#00df9a] py-16 px-4 '>
            <div className='max-w-[940px] mx-auto grid md:grid-cols-2'>
                <Lottie className='w-[500px] mx-auto my-4 ' animationData={analysis} style={{ width: '85%', height: '85%' }} />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold '>DATA ANALYSIS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Manage data analysis centrally
                    </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae consectetur unde rerum? Libero quis magnam exercitationem quia vero ipsum odio dicta aliquam? Necessitatibus provident obcaecati nemo magni soluta at quas.</p>
                </div>

            </div>
        </div>
    );
}

export default Analysis;
