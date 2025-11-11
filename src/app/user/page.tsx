import RoleLayout from '@/components/RoleLayout';

export default function UserDashboard() {
  const icon = (
    <div className="rounded-full bg-blue-100 p-4">
      <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </div>
  );

  return (
    <RoleLayout heading="User Page" subtitle="Access your appointments and health information" icon={icon}>
      {/* Quick Actions */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <button className="rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-3 inline-block rounded-full bg-blue-100 p-3">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">Book Appointment</h3>
          </button>
          <button className="rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-3 inline-block rounded-full bg-green-100 p-3">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">View Records</h3>
          </button>
          <button className="rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-3 inline-block rounded-full bg-purple-100 p-3">
              <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">Lab Results</h3>
          </button>
          <button className="rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-3 inline-block rounded-full bg-orange-100 p-3">
              <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">My Profile</h3>
          </button>
        </div>

        {/* Upcoming Appointments */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h3 className="mb-6 text-xl font-bold text-gray-900">Upcoming Appointments</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-blue-100 p-3">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Dr. Sarah Johnson</p>
                  <p className="text-sm text-gray-600">General Checkup</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">Nov 15, 2025</p>
                <p className="text-sm text-gray-600">10:00 AM</p>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-green-100 p-3">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Dr. Michael Chen</p>
                  <p className="text-sm text-gray-600">Cardiology Consultation</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">Nov 22, 2025</p>
                <p className="text-sm text-gray-600">2:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </RoleLayout>
  );
}
