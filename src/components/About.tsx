'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 border-t-2 border-indigo-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            About Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Committed to Your Health & Well-being with excellence and compassion.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Column */}
          <motion.div 
            className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
              alt="Professional medical team"
              className="h-full w-full object-cover"
            />
            {/* Badge Overlay */}
            <motion.div 
              className="absolute bottom-8 left-8 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-lg border border-blue-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">25</p>
                <p className="text-sm text-gray-600">Years of Excellence</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-6 text-3xl font-bold text-gray-900">
              Providing Excellence in Healthcare
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>

            {/* Values List */}
            <div className="space-y-4">
              {[
                { title: 'Patient-Centered Care', desc: 'Your health and comfort are our top priority' },
                { title: 'Expert Medical Team', desc: 'Highly qualified and experienced professionals' },
                { title: 'State-of-the-Art Facilities', desc: 'Modern equipment and technology for accurate diagnosis' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <svg className="mr-3 h-6 w-6 shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
