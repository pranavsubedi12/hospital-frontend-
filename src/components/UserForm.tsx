'use client';

import { useState, useEffect } from 'react';
import doctorsList from '@/data/doctors.json';

export interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  role: 'User' | 'Doctor';
  gender: 'Male' | 'Female' | 'Other';
  address: string;
  appointmentTime: string;
  assignedDoctor: string;
}

interface UserFormProps {
  user?: User;
  onSubmit: (user: User) => void;
  onCancel: () => void;
}

export default function UserForm({ user, onSubmit, onCancel }: UserFormProps) {
  const [formData, setFormData] = useState<User>({
    id: user?.id || '',
    fullName: user?.fullName || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || '',
    role: user?.role || 'User',
    gender: user?.gender || 'Male',
    address: user?.address || '',
    appointmentTime: user?.appointmentTime || '',
    assignedDoctor: user?.assignedDoctor || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate ID for new users
    const userData = {
      ...formData,
      id: formData.id || Date.now().toString(),
    };
    
    onSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="mb-1 block text-sm font-semibold text-gray-700">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="Enter full name"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-semibold text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter email address"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phoneNumber" className="mb-1 block text-sm font-semibold text-gray-700">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          placeholder="+977-9841234567"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Role and Gender - Side by Side */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="role" className="mb-1 block text-sm font-semibold text-gray-700">
            Role <span className="text-red-500">*</span>
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="User">User</option>
            <option value="Doctor">Doctor</option>
          </select>
        </div>

        <div>
          <label htmlFor="gender" className="mb-1 block text-sm font-semibold text-gray-700">
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="mb-1 block text-sm font-semibold text-gray-700">
          Address <span className="text-red-500">*</span>
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          placeholder="Enter full address"
          rows={2}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Appointment Time (only for Users) */}
      {formData.role === 'User' && (
        <div>
          <label htmlFor="appointmentTime" className="mb-1 block text-sm font-semibold text-gray-700">
            Appointment Time
          </label>
          <input
            type="datetime-local"
            id="appointmentTime"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {/* Assigned Doctor (only for Users) */}
      {formData.role === 'User' && (
        <div>
          <label htmlFor="assignedDoctor" className="mb-1 block text-sm font-semibold text-gray-700">
            Assigned Doctor
          </label>
          <select
            id="assignedDoctor"
            name="assignedDoctor"
            value={formData.assignedDoctor}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a doctor</option>
            {doctorsList.map((doctor) => (
              <option key={doctor.id} value={doctor.name}>
                {doctor.name} - {doctor.specialization}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-gray-300 px-6 py-2 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          {user ? 'Update User' : 'Add User'}
        </button>
      </div>
    </form>
  );
}
