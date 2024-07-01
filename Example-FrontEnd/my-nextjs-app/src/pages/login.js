import React, { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button'; // Assuming you have a Button component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        setError(null);
        setSuccessMessage('Login successful');
        console.log('Login successful');
        // Redirect to dashboard or set user session here
      } else {
        setError('Login failed');
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  // Function to close the success message
  const closeSuccessMessage = () => {
    setSuccessMessage('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Sign in to your account</h2>
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Error Message */}
            {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}
            {/* Success Message Popup */}
            {successMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline"> {successMessage}</span>
                
              </div>
            )}
            {/* Form Inputs */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Sign In
              </Button>
            </div>
          </form>
        </div>
        {/* Redirect Link */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            Don't have an account?{' '}
            <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
