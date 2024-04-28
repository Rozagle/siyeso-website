// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';
import team1 from '../assets/team1.jpg';

const data = [
  {
    name: "naci be1y",
    img: team1,
    review: "manager designer"
  },
  {
    name: "naci bey2",
    img: team1,
    review: "manager designer"
  },
  {
    name: "naci bey3",
    img: team1,
    review: "manager designer"
  },
  {
    name: "naci bey4",
    img: team1,
    review: "manager designer"
  },
  {
    name: "naci bey5",
    img: team1,
    review: "manager designer"
  },
  {
    name: "naci bey6",
    img: team1,
    review: "manager designer"
  },

]

function Team() {


  return (
    <div id='team' className="w-full min-h-[600px] flex flex-col justify-center items-center text-neutral-700 bg-gray-500 ">

      <div className='flex space-y-2 flex-col text-center mb-14'>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-center mt-8 mb-4 capitalize">
          our Team
        </h1>
        <span className='text-2xl'>
          Meet with our team
        </span>
      </div>
      <section className="swiper-container mySwiper">
        <div className="swiper-wrapper w-full h-96 flex items-center">          {data.map((d, index) => (
          <div key={index} className=" w-80 h-100 bg-white rounded-xl shadow-lg p-6 flex items-center flex-col mx-8">
            <div className="bg-white text-black rounded-xl flex flex-col justify-center items-center">
              <div className="w-40 h-40 border-4 border-solid border-purple-600 rounded-full p-1 mb-4">
                <img src={d.img} alt="" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-2xl font-semibold relative top-1">{d.name}</p>
                <p className="text-lg text-center mb-4">{d.review}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </section>



    </div >
  );
}

export default Team;

