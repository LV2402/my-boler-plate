import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; 

function Register() {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  const password = watch('password'); 
  const navigate = useNavigate(); 

  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigate('/login'); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-yellow-200">
      <form
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md transition-transform duration-300 ease-in-out transform hover:scale-105"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            {...register('username', { 
              required: "Username is required", 
              minLength: { value: 8, message: "Username must be at least 8 characters" }
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-yellow-200 transition duration-200 ease-in-out"
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            {...register('email', { required: "Email is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-yellow-200 transition duration-200 ease-in-out"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            {...register('password', { required: "Password is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-yellow-200 transition duration-200 ease-in-out"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword', { 
              validate: value => value === password || "Passwords do not match",
              required: "Confirm Password is required"
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-yellow-200 transition duration-200 ease-in-out"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:scale-105"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
