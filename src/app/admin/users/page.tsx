'use client';

import { useState } from 'react';
import Link from 'next/link';
import UserTable from '@/components/UserTable';
import UserForm, { User } from '@/components/UserForm';
import Modal from '@/components/Modal';
import initialUsers from '@/data/users.json';

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers as User[]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('');

  // Filter users based on search and role
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.phoneNumber.includes(searchQuery);
    const matchesRole = roleFilter === '' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  // Add new user
  const handleAddUser = (newUser: User) => {
    setUsers(prev => [...prev, newUser]);
    setIsModalOpen(false);
    setEditingUser(undefined);
  };

  // Edit existing user
  const handleEditUser = (updatedUser: User) => {
    setUsers(prev =>
      prev.map(user => (user.id === updatedUser.id ? updatedUser : user))
    );
    setIsModalOpen(false);
    setEditingUser(undefined);
  };

  // Delete user
  const handleDeleteUser = (id: string) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  // Open modal for adding
  const openAddModal = () => {
    setEditingUser(undefined);
    setIsModalOpen(true);
  };

  // Open modal for editing
  const openEditModal = (user: User) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingUser(undefined);
  };

  return (
    <div className="min-h-screen -mt-16">
      {/* Header */}
      <header className="bg-linear-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-bold text-white">User Management</h1>
            <p className="mt-1 text-sm text-gray-200">Add, edit, and manage user accounts</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600">Total Users</p>
                <p className="text-3xl font-bold text-blue-600">
                  {filteredUsers.filter(u => u.role === 'User').length}
                </p>
              </div>
              <div className="rounded-full bg-blue-100 p-3">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600">Total Doctors</p>
                <p className="text-3xl font-bold text-green-600">
                  {filteredUsers.filter(u => u.role === 'Doctor').length}
                </p>
              </div>
              <div className="rounded-full bg-green-100 p-3">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600">All Records</p>
                <p className="text-3xl font-bold text-purple-600">{filteredUsers.length}</p>
              </div>
              <div className="rounded-full bg-purple-100 p-3">
                <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mb-6 flex items-center justify-between rounded-xl bg-white p-4 shadow-md">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select 
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Roles</option>
              <option value="User">Users</option>
              <option value="Doctor">Doctors</option>
            </select>
          </div>
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add New User
          </button>
        </div>

        {/* User Table */}
        <UserTable
          users={filteredUsers}
          onEdit={openEditModal}
          onDelete={handleDeleteUser}
        />
      </main>

      {/* Modal for Add/Edit User */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={editingUser ? 'Edit User' : 'Add New User'}
      >
        <UserForm
          user={editingUser}
          onSubmit={editingUser ? handleEditUser : handleAddUser}
          onCancel={closeModal}
        />
      </Modal>
    </div>
  );
}
