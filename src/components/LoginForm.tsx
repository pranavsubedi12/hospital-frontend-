'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Role = 'Admin' | 'Doctor' | 'User';

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'User' as Role,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Role-based redirection logic
    switch (formData.role) {
      case 'Admin':
        router.push('/admin');
        break;
      case 'Doctor':
        router.push('/doctor');
        break;
      case 'User':
        router.push('/user');
        break;
      default:
        router.push('/');
    }

    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 via-indigo-100 to-blue-200 px-4 py-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="mb-4 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
            <img src="/hospital-logo.svg" alt="City General Hospital Logo" className="h-16 w-16 object-contain" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-gray-600">Sign in to access your account</p>
        </div>

        {/* Login Form Card */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-2xl border border-blue-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Role Selection Dropdown */}
            <div>
              <label htmlFor="role" className="mb-2 block text-sm font-semibold text-gray-700">
                Select Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="User">User</option>
                <option value="Doctor">Doctor</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 disabled:cursor-not-allowed disabled:bg-blue-400 disabled:shadow-none"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="mr-2 h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
