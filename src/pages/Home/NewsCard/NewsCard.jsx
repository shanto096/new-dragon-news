import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaRegStar, FaShare, FaStar} from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({news}) => {
    const {_id,title,image_url,details,total_view,rating,author} = news;
    return (
        <div className='mb-8 mx-5 border-[2px] shadow-xl rounded text-slate-500'>
            <div className='bg-slate-100 p-2 flex justify-between items-center rounded'>
                <div className='flex '>
                <img className='h-14 rounded-[50%] mr-3' src={author?.img} alt="" />
                
                <div>
                    <h1>{author?.name}</h1>
                    <p>{moment(author?.published_date).format('yyyy-mm-d,  h:mm:ss a')}</p>
                </div>
                </div>
                <div className='flex mr-5'>
                    <div className='mr-4'>
                    <FaRegBookmark className='text-green-400' size={22}></FaRegBookmark>
                    </div>
                    <div style={{color: 'blue'}}>
                    <FaShare size={22}></FaShare>
                    </div>
                    
                    
                </div>
            </div>
            <div className='p-3'>
            <h1 className='my-2'>{title}</h1>
            <img className='p-5' src={image_url} alt="" />
            <p className='text-md'>{details.length < 300 ?<>{details}</>:<>{details.slice(0,300)}...<Link to={`/news/${_id}`}><span className='text-blue-400'><br /> read more...</span></Link></>}</p>
            </div>

            <div className='bg-slate-100 p-5 flex justify-between items-center rounded'>
                <div>
                <Rating
                   placeholderRating={rating?.number}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={<FaStar className='text-yellow-400'></FaStar>}
                      fullSymbol={<FaStar></FaStar>}
/>
                </div>
                <div className='flex items-center'>
                   <FaEye className='text-red-500' size={22}></FaEye>
                  <span className='mx-3'> {total_view}</span>
                </div>
            </div>
        </div>

        
    );
};

export default NewsCard;