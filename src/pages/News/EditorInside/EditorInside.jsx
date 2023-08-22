import React from 'react';
import img1 from '../../../assets/assets/1.png'
import img2 from '../../../assets/assets/2.png'
import img3 from '../../../assets/assets/3.png'
const EditorInside = () => {
    return (
        <div className='grid grid-cols-3 gap-10'>
            <div className='border-2 rounded'>
                <div className='p-3'>      
                <img src={img1} alt="" />
                <h1 className='my-2'> Hpsum dolor amet  elit.</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi eius ad sit alias dolores porro aut tempore aspernatur aliquid!</p>
                </div>
            </div>
            <div className='border-2 rounded'>
                <div className='p-3'>      
                <img src={img2} alt="" />
                <h1 className='my-2'> Tpsum dolor amet  elit.</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi eius ad sit alias dolores porro aut tempore aspernatur aliquid!</p>
                </div>
            </div>
            <div className='border-2 rounded'>
                <div className='p-3'>      
                <img src={img3} alt="" />
                <h1 className='my-2'> Kpsum dolor amet  elit.</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi eius ad sit alias dolores porro aut tempore aspernatur aliquid!</p>
                </div>
            </div>
            
        </div>
    );
};

export default EditorInside;