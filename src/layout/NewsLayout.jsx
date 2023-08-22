import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Marquee from 'react-fast-marquee';
import RightComponent from '../pages/Shared/RightComponent/RightComponent';
import Qzone from '../pages/Shared/Qzone/Qzone';
import { Outlet } from 'react-router-dom';
import Navber from '../pages/Shared/navber/Navber';

const NewsLayout = () => {
    return (
        <div >
              <Header></Header>
                <div>
                <div className='flex mx-10 border-[2px] bg-slate-50 p-2 rounded-md mt-2'>
                          <button className='bg-blue-500 text-white text-xl rounded font-bold px-5 py-1 '>Lasts</button>
                            <Marquee  speed={100}>
                            <span className='text-red-500 font-bold'>  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as..</span>
                           </Marquee>
                    </div>
                    <div>
                        <Navber></Navber>
                    </div>
                       <div className='grid grid-cols-[3fr,1fr] mx-10'>
                         <div>
                                <Outlet></Outlet>
                            </div>
        
                            <div className='mt-3'>
                               <RightComponent></RightComponent>
                               <Qzone></Qzone>
                            </div>
                       </div>
                </div>
            </div>
    );
};

export default NewsLayout;