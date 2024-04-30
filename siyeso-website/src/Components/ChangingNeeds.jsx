// eslint-disable-next-line no-unused-vars
import React from 'react';
import frame1 from '../assets/Frame34.svg';
import frame2 from '../assets/Frame30.svg';
import frame3 from '../assets/Frame37.svg';
import frame4 from '../assets/Frame36.svg';


function ChangingNeeds() {
  return (
    <div className="mx-auto max-w-[1150px] bg-white p-1">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
        <div className="col-span-full sm:col-span-8">
          <img src={frame1} alt="" className="w-full h-auto" />
        </div>
        <div className="col-span-full sm:col-span-4">
          <img src={frame2} alt="" className="w-full h-auto mt-10" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
        <div className="col-span-full sm:col-span-8">
          <img src={frame4} alt="" className="w-full h-auto mt-4" />
        </div>
        <div className="col-span-full sm:col-span-4">
          <img src={frame3} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default ChangingNeeds;




