import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="w-full px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <div className="mb-3 flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center">
                <img src="/hospital-logo.svg" alt="City General Hospital Logo" className="h-10 w-10 object-contain" />
              </div>
              <span className="text-base font-bold text-white">City General Hospital</span>
            </div>
            <p className="text-xs leading-relaxed">
              Providing compassionate and excellent healthcare services to our community with state-of-the-art facilities and experienced medical professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-white">Quick Links</h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/" className="transition-colors hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-blue-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-white">Our Services</h3>
            <ul className="space-y-1.5 text-xs">
              <li className="transition-colors hover:text-blue-400">Emergency Care</li>
              <li className="transition-colors hover:text-blue-400">Cardiology</li>
              <li className="transition-colors hover:text-blue-400">Pediatrics</li>
              <li className="transition-colors hover:text-blue-400">Laboratory Services</li>
              <li className="transition-colors hover:text-blue-400">Radiology & Imaging</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start">
                <svg className="mr-2 h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Medical Center Drive<br />Healthcare City, HC 12345</span>
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+977-9841234567</span>
              </li>
              <li className="flex items-center">
                <svg className="mr-2 h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@citygeneralhospital.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="w-full px-4 py-4">
          <div className="flex flex-col items-center justify-center text-xs">
            <p className="text-center">&copy; 2025 City General Hospital. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
