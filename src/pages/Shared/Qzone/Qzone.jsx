import React from 'react';
import img1 from '../../../assets/assets/qZone1.png'
import img2 from '../../../assets/assets/qZone2.png'
import img3 from '../../../assets/assets/qZone3.png'


const Qzone = () => {
    return (
        <div className='mt-5 bg-slate-400'>
        <h1>Q-Zone</h1>
        <div className='ml-8'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        </div>
       

      </div>
    );
};

export default Qzone;