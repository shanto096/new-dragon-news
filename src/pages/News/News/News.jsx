import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInside from '../EditorInside/EditorInside';

const News = () => {

    const news = useLoaderData()
    const {_id,title,image_url,details,total_view,rating,author,category_id} = news;

    return (
        <div className='mx-10 mt-4 text-slate-500 mb-10'>
            <div className='mb-8  border-[2px] shadow-xl rounded '>
                <div className='p-6' >
                    <img src={image_url} alt="" />
                    <h1 className='font-bold my-4'>{title}</h1>
                    <p className='text-md'>{details}</p>
                  <Link to={`/category/${category_id}`}> <button className='bg-blue-500 px-2 py-1 rounded-md text-white mt-3 '><FaArrowLeft className='inline mr-1'></FaArrowLeft> All news category</button></Link>
                  </div> 
        </div>
           <EditorInside></EditorInside>
        </div>
    );
};

export default News;