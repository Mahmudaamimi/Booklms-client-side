import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import { updateProfile } from 'firebase/auth';

const SignUpForm = () => {
    const {createUser} = useContext(AuthContext)
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate()
  const onSubmit = (data) => {
    createUser(data.email,data.password)
    .then((result) => {
        console.log(result.user)
        updateProfile(result.user,{
            displayName: data.name,
            photoURL: data.imageUrl,
          })
          .then(()=> {console.log('profile upload')
          navigate('/')
        })
          .catch()
    })
    .catch((error) => {
        console.error(error)
      });
};

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors && errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
        </div>

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
            {...register('password', { required: 'Password is required', minLength: 6 })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors && errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Image URL:</label>
          <input
            type="text"
            {...register('imageUrl', { required: 'Image URL is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors && errors.imageUrl && <p className="text-red-500 text-xs italic">{errors.imageUrl.message}</p>}
        </div>

        <div className="mb-6">
          <input
            type="submit"
            value="Sign Up"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
        </div>
        <p>Already account? <Link className='text-blue-500' to='/login'>Login</Link></p>
      </form>
    </div>
  );
};

export default SignUpForm;
