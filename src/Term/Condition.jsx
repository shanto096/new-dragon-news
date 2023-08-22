import React from 'react';
import { Link } from 'react-router-dom';

const Condition = () =>  {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget lectus in
            neque volutpat volutpat ac id elit. Nunc dictum, metus ut tempus porttitor, nunc
            arcu maximus dui, ut ullamcorper elit ante eu urna.
          </p>
          {/* Add more terms and conditions content here */}
          <p className="mt-4 text-gray-700">
            By using this application, you agree to the above terms and conditions.
          </p>

          <p className='text-green-500 mt-4'>Go Back <Link to="/register"><span className='text-blue-600 underline'>Register Now</span></Link></p>

        </div>
      </div>
    );
  };

export default Condition;