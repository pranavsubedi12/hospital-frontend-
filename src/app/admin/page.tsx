import RoleLayout from '@/components/RoleLayout';
import Link from 'next/link';

export default function AdminDashboard() {
  const icon = (
    <div className="rounded-full bg-red-100 p-4">
      <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    </div>
  );

  return (
    <RoleLayout heading="Admin Dashboard" subtitle="Manage system and monitor operations" icon={icon}>
      {/* Stats Grid */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-2 text-sm font-semibold text-gray-600">Total Users</div>
            <div className="text-3xl font-bold text-blue-600">200</div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-2 text-sm font-semibold text-gray-600">Total Doctors</div>
            <div className="text-3xl font-bold text-green-600">156</div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-2 text-sm font-semibold text-gray-600">Appointments Today</div>
            <div className="text-3xl font-bold text-purple-600">89</div>
          </div>
        </div>

        {/* Admin Actions */}
        <div className="flex justify-center">
          <Link href="/admin/users" className="w-full max-w-sm rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-md transition-all hover:shadow-xl border border-blue-100">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Manage Users</h3>
            <p className="mb-4 text-sm text-gray-600">View, edit, and manage user accounts</p>
            <button className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
              View Users →
            </button>
          </Link>
        </div>
      </RoleLayout>
  );
}
