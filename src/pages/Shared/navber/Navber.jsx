import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthContextProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navber = () => {
  const {user,logoutUser}=useContext(AuthContext)

    
  const singOut =()=> {
      logoutUser()
    .then(result =>{
      const singOutedUser = result.user
      console.log("out");
    })
    .catch(error =>{
          console.log(error);
    })
  }



    return (
      <nav className="bg-blue-50 border-2 mx-10 mt-4 rounded py-2 px-10">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className=" text-red-600 text-3xl font-bold">Dra<span className='text-yellow-500'>Gon</span> <span className='text-green-600'>Ne<span className='text-red-500'>Ws</span></span></a>
          <div className="flex space-x-10">
            <Link to='/category/0'><span className="text-green-500 text-xl font-bold hover:text-red-500">Home</span></Link>
            <Link><span className="text-green-500 text-xl font-bold hover:text-red-500">about</span></Link>
            <Link><span className="text-green-500 text-xl font-bold hover:text-red-500">career</span></Link>
            
          </div>
          <div className='flex items-center'>
            {
              user&& <FaUserCircle className='mr-4' size={35}></FaUserCircle>
            }
            {
              user? <button onClick={singOut} className='border px-5 p-1 text-white rounded font-bold  bg-blue-500 text-xl'>Logout</button>:
              <Link to='/login'><button className='border px-5 p-1 text-white rounded font-bold  bg-blue-500 text-xl'><span className="">Login</span></button></Link>
             }
            </div>
        </div>
      </nav>
    );
  };

export default Navber;