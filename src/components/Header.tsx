'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if on dashboard pages (not login)
  const isDashboardPage = pathname === '/admin' || pathname === '/doctor' || pathname === '/user' || pathname?.startsWith('/admin/');
  const isLoginPage = pathname === '/login';

  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg">
      <nav className="w-full">
        <div className="flex items-center px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center space-x-3 transition-transform hover:scale-105">
            <div className="flex h-10 w-10 items-center justify-center">
              <img src="/hospital-logo.svg" alt="City General Hospital Logo" className="h-10 w-10 object-contain" />
            </div>
            <span className="text-lg font-bold text-white">City General Hospital</span>
          </Link>

          {/* Desktop Navigation - Center (Hidden on auth pages) */}
          {!isLoginPage && !isDashboardPage && (
            <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
              <a href="#services" className="text-base text-blue-100 transition-colors hover:text-white font-semibold">
                Services
              </a>
              <a href="#about" className="text-base text-blue-100 transition-colors hover:text-white font-semibold">
                About
              </a>
              <a href="#contact" className="text-base text-blue-100 transition-colors hover:text-white font-semibold">
                Contact
              </a>
            </div>
          )}

          {/* Right Side - Conditional buttons */}
          <div className="flex items-center space-x-4 md:ml-auto">
            {isLoginPage && (
              <Link
                href="/"
                className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-blue-900 transition-all duration-300 hover:bg-blue-50 hover:shadow-lg"
              >
                Back to Home
              </Link>
            )}
            
            {!isLoginPage && !isDashboardPage && (
              <>
                <Link
                  href="/login"
                  className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-blue-900 transition-all duration-300 hover:bg-blue-50 hover:shadow-lg"
                >
                  Login
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="rounded-lg p-2 text-white transition-colors hover:bg-blue-800 md:hidden"
                  aria-label="Toggle menu"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu (Hidden on auth pages) */}
        {!isLoginPage && !isDashboardPage && isMenuOpen && (
          <div className="border-t border-blue-700 bg-blue-900 py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-blue-100 transition-colors hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-blue-100 transition-colors hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-blue-100 transition-colors hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
