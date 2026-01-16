'use client';

import { motion } from 'framer-motion';
import { IoPhonePortrait, IoGlobe, IoHardwareChip, IoMail, IoArrowForward } from 'react-icons/io5';

const services = [
  {
    icon: <IoPhonePortrait className="w-8 h-8 text-blue-600" />,
    title: 'Mobile App Development',
    description: 'Native iOS and Android applications built with cutting-edge technology for superior performance and user experience.',
  },
  {
    icon: <IoGlobe className="w-8 h-8 text-purple-600" />,
    title: 'Web Application',
    description: 'Scalable, modern web apps using Next.js and React. We build everything from landing pages to complex SaaS platforms.',
  },
  {
    icon: <IoHardwareChip className="w-8 h-8 text-emerald-600" />,
    title: 'IT Services & Consulting',
    description: 'Comprehensive IT solutions to streamline your business operations, including cloud infrastructure and digital strategy.',
  },
  {
    icon: <IoMail className="w-8 h-8 text-amber-500" />,
    title: 'Enterprise Mail & Solutions',
    description: 'Professional email hosting and enterprise communication tools designed for security and reliability.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">Our Expertise</h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            We deliver a full spectrum of digital services to help your business grow and succeed in the modern era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 p-4 rounded-full bg-white w-fit shadow-md group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">{service.title}</h3>
              <p className="text-zinc-600  leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center  font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Learn more <IoArrowForward className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
