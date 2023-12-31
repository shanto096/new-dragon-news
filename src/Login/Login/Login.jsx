import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContextProvider';

const Login = () =>  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const location = useLocation()
    console.log("location",location);
    const from = location.state?.form?.pathname || "/category/0"


    const{loginUser} = useContext(AuthContext)
  
    const handleLogin = (e) => {
      e.preventDefault();
      loginUser(email,password)
      .then(result =>{
        const loggedUser = result.user
        console.log(loggedUser);
        navigate(from, {replace:true})
       })
      .catch(error =>{
            console.log(error);
      })
      // You can implement your login logic here
    };
  
    return (
      <div className="flex justify-center mt-10">
        <form onSubmit={handleLogin} className="w-full max-w-sm pb-8 pt-5 px-5 bg-amber-50 border-[1px] shadow-xl rounded ">
          <h2 className="text-2xl font-semibold text-center mb-4 border-b-2 pb-3">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className='text-sm text-center mt-3'>Don't have an Account? <Link to='/register'><span className='text-blue-500'>Register Now</span></Link></p>
        </form>
      </div>
    );
  };
  
  export default Login;
 