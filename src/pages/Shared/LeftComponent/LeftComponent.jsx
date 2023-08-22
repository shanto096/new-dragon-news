import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryDwon from '../../Home/Category/CategoryDwon/CategoryDwon';

const LeftComponent = () =>  {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/category")
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h1 className='text-lg font-bold mb-3 text-slate-500'>All Category</h1>
           <div className='ml-8 '>
           {
                categories.map(category => <p className='mb-4 mr-3 text-md ps-5 rounded-md  text-slate-500 hover:bg-blue-500 hover:text-white  border-[2px] py-2' key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
           </div>
           <div className='ml-8 mr-3'>
           <CategoryDwon></CategoryDwon>
           </div>
        </div>
    );
};

export default LeftComponent;