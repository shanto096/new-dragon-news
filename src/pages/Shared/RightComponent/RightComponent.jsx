import React from 'react';
import img1 from '../../../assets/assets/qZone1.png'
import img2 from '../../../assets/assets/qZone2.png'
import img3 from '../../../assets/assets/qZone3.png'
import { FaFacebook, FaGit, FaGithub, FaGoogle, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const RightComponent = () => {
    return (
        <div className='font-bold  text-slate-500'>
            <h1 className='mb-5 '>Login With</h1>
            <div className='grid grid-cols-1 '>
                <div className='flex items-center rounded border-2 mb-2 py-3 justify-center  hover:bg-blue-500 hover:text-white'>
                   <FaGoogle size={20}></FaGoogle>
                   <button className='ml-2' >  Login With Google</button>
               </div>
               <div className='flex items-center rounded border-2 mb-2 py-3 justify-center hover:bg-blue-500 hover:text-white'>
                   <FaGithub size={20}></FaGithub>
                   <button className='ml-2'>Login With GitHub</button>
               </div>
            </div>
            <h1 className='my-5'>Find Us On</h1>
            <div className='grid grid-cols-1 items-center '>
               <div className='flex items-center border-[1px] py-3 justify-between hover:bg-blue-500 hover:text-white'>
                   <FaFacebook className='ml-28' size={20}></FaFacebook>
                   <button className='mr-28'>Facebook</button>
                </div>
                <div className='flex items-center border-[1px] py-3 justify-between hover:bg-blue-500 hover:text-white'>
                   <FaTwitter className='ml-28' size={20}></FaTwitter>
                   <button className='mr-32'>Twitter</button>
                </div>
                <div className='flex items-center border-[1px] py-3 justify-between hover:bg-blue-500 hover:text-white'>
                <FaWhatsapp className='ml-28' size={20}></FaWhatsapp> 
                   <button className='mr-28'>WhatsApp</button>
                </div>
            </div>
            
        </div>
    );
};

export default RightComponent;