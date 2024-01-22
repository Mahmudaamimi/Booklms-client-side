import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import { toast } from 'react-toastify';

const Login = () => {
    const{loginUser}=useContext(AuthContext);
    const { register, handleSubmit, errors } = useForm();
    const location = useLocation()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data)
        loginUser(data.email,data.password)
        .then((result) => {
            console.log(result.user)
            toast("Login success!" );
            navigate(location?.state ? location.state : '/');
        })
        .catch((error) => {
            console.error(error)
            toast(error)
          });
    };
    return (
        <div className="max-w-md mx-auto mt-8">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="text"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors && errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors && errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
          </div>
  
          <div className="mb-6">
            <input
              type="submit"
              value="Login"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            />
          </div>
          <p>Not user? <Link className='text-blue-500' to='/signup'>signup</Link></p>
        </form>
      </div>
    );
};

export default Login;