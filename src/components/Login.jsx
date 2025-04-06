import React from 'react';
import { useForm } from 'react-hook-form';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
function Login() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  function onSubmit (data) {
    console.log(data);
    reset(); 
  };

  const responseGoogle = (response) => {
    console.log(response); 
    reset(); 
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-yellow-200">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              {...register('username', { required: "Username is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-yellow-200 transition duration-200 ease-in-out"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register('password', { required: "Password is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-yellow-200 transition duration-200 ease-in-out"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:scale-105 mb-4"
          >
            Login
          </button>
          <GoogleLogin
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={renderProps => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:scale-105 mb-4"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Google_Logo.svg"
                  alt="Google logo"
                  className="inline-block h-4 mr-2"
                />
                Login with Google
              </button>
            )}
          />
        </form>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
