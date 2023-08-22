import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Marquee from 'react-fast-marquee';
import LeftComponent from '../pages/Shared/LeftComponent/LeftComponent';
import RightComponent from '../pages/Shared/RightComponent/RightComponent';
import Qzone from '../pages/Shared/Qzone/Qzone';
import { Outlet } from 'react-router-dom';
import Navber from '../pages/Shared/navber/Navber';

const Main = () => {
    return (
            <div>
              <Header></Header>
                <div>
                    <div className='flex mx-10 border-[2px] bg-slate-50 p-2 rounded-md mt-2'>
                          <button className='bg-blue-500 text-white text-xl rounded font-bold px-5 py-1 '>Lasts</button>
                            <Marquee speed={100}>
                             <span className='text-red-500 font-bold'> Match Highlights: Germany vs Spain — as it happened   ! Match Highlights: Germany vs Spain — as it happened   !  Match Highlights: Germany vs Spain as..</span>
                           </Marquee>
                    </div>
                    <div>
                          <Navber></Navber>
                    </div>
                       <div className='grid grid-cols-[1fr,800px,1fr] mx-10 my-5'>
                            <div>
                                 <LeftComponent></LeftComponent>
                                 
                            </div>
        
                            <div>
                                <Outlet></Outlet>
                            </div>
        
                            <div>
                               <RightComponent></RightComponent>
                               <Qzone></Qzone>
                            </div>
                       </div>
                </div>
            </div>
    );
};

export default Main;