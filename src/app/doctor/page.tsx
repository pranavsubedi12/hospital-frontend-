import RoleLayout from '@/components/RoleLayout';

export default function DoctorDashboard() {
  const icon = (
    <div className="rounded-full bg-green-100 p-4">
      <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </div>
  );

  return (
    <RoleLayout heading="Doctor Page" subtitle="View appointments and patient records" icon={icon}>
      {/* Stats Grid */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-2 text-sm font-semibold text-gray-600">Today's Appointments</div>
            <div className="text-3xl font-bold text-blue-600">12</div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-2 text-sm font-semibold text-gray-600">Pending Reviews</div>
            <div className="text-3xl font-bold text-orange-600">5</div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-2 text-sm font-semibold text-gray-600">Total Patients</div>
            <div className="text-3xl font-bold text-green-600">347</div>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h3 className="mb-6 text-xl font-bold text-gray-900">Today's Schedule</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-l-4 border-blue-600 bg-blue-50 p-4 rounded">
              <div>
                <p className="font-semibold text-gray-900">John Doe</p>
                <p className="text-sm text-gray-600">General Checkup</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">9:00 AM</p>
                <p className="text-sm text-gray-600">Room 101</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-l-4 border-green-600 bg-green-50 p-4 rounded">
              <div>
                <p className="font-semibold text-gray-900">Jane Smith</p>
                <p className="text-sm text-gray-600">Follow-up Consultation</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">10:30 AM</p>
                <p className="text-sm text-gray-600">Room 102</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-l-4 border-purple-600 bg-purple-50 p-4 rounded">
              <div>
                <p className="font-semibold text-gray-900">Mike Johnson</p>
                <p className="text-sm text-gray-600">Lab Results Review</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">2:00 PM</p>
                <p className="text-sm text-gray-600">Room 103</p>
              </div>
            </div>
          </div>
        </div>
      </RoleLayout>
  );
}
