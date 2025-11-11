'use client';

import { User } from './UserForm';

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}

export default function UserTable({ users, onEdit, onDelete }: UserTableProps) {
  const formatDateTime = (dateTime: string) => {
    if (!dateTime) return 'N/A';
    const date = new Date(dateTime);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleDelete = (id: string, fullName: string) => {
    if (window.confirm(`Are you sure you want to delete ${fullName}?`)) {
      onDelete(id);
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-md">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-700">
          <tr>
            <th className="px-4 py-4">Full Name</th>
            <th className="px-4 py-4">Email</th>
            <th className="px-4 py-4">Phone</th>
            <th className="px-4 py-4">Role</th>
            <th className="px-4 py-4">Gender</th>
            <th className="px-4 py-4">Address</th>
            <th className="px-4 py-4">Appointment</th>
            <th className="px-4 py-4">Doctor</th>
            <th className="px-4 py-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.length === 0 ? (
            <tr>
              <td colSpan={9} className="px-4 py-8 text-center text-gray-500">
                No users found. Click "Add New User" to get started.
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr
                key={user.id}
                className={`transition-colors hover:bg-gray-50 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-25'
                }`}
              >
                <td className="px-4 py-4 font-medium text-gray-900">{user.fullName}</td>
                <td className="px-4 py-4 text-gray-600">{user.email}</td>
                <td className="px-4 py-4 text-gray-600">{user.phoneNumber}</td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      user.role === 'Doctor'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-4 text-gray-600">{user.gender}</td>
                <td className="px-4 py-4 text-gray-600">
                  <div className="max-w-xs truncate" title={user.address}>
                    {user.address}
                  </div>
                </td>
                <td className="px-4 py-4 text-gray-600">
                  {formatDateTime(user.appointmentTime)}
                </td>
                <td className="px-4 py-4 text-gray-600">
                  {user.assignedDoctor || 'N/A'}
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEdit(user)}
                      className="rounded-lg bg-blue-50 p-2 text-blue-600 transition-colors hover:bg-blue-100"
                      title="Edit user"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(user.id, user.fullName)}
                      className="rounded-lg bg-red-50 p-2 text-red-600 transition-colors hover:bg-red-100"
                      title="Delete user"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
