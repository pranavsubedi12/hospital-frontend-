'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface RoleLayoutProps {
  heading: string;
  subtitle?: string;
  children: ReactNode;
  icon?: ReactNode;
}

export default function RoleLayout({ heading, subtitle, children, icon }: RoleLayoutProps) {
  return (
    <div className="min-h-screen -mt-16">
      {/* Header */}
      <header className="bg-linear-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-bold text-white">{heading}</h1>
            {subtitle && <p className="mt-1 text-sm text-gray-200">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg"
            >
              Logout
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Welcome Card */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-6 flex items-center">
            {icon && (
              <div className="mr-4 rounded-full p-4">
                {icon}
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Welcome</h2>
              <p className="text-gray-600">You are logged in as {heading.replace(' Dashboard', '').replace(' Page', '')}</p>
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        {children}
      </main>
    </div>
  );
}
