'use client';

import { motion } from 'framer-motion';
import { IoPhonePortrait, IoArrowForward, IoStar, IoOpenOutline } from 'react-icons/io5';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    title: 'Agal Tamil Calendar 2026',
    description: 'Tamil Calendar with Panchangam, Daily Timings & Auspicious Days. The most comprehensive Tamil calendar app.',
    icon: (
      <Image 
        src="/assets/images/agal-tamil-calendar.webp" 
        alt="Agal Tamil Calendar Icon" 
        width={48} 
        height={48} 
        className="w-12 h-12 object-contain"
      />
    ),
    color: 'bg-gradient-to-br from-orange-500 to-red-600',
    link: 'https://play.google.com/store/apps/details?id=com.agal.tamilcalendar&hl=en_IN',
    status: 'Live',
    rating: '4.8',
  },
  {
    title: 'Agal QR Scanner',
    description: 'Fast and secure QR code and barcode scanner with history and generation features.',
    icon: <IoPhonePortrait className="w-12 h-12 text-blue-600" />,
    color: 'bg-blue-100',
    link: '#',
    status: 'Coming Soon',
    rating: null,
  },
  {
    title: 'Agal Notes',
    description: 'Simple, secure, and efficient note-taking app for all your daily needs.',
    icon: <IoPhonePortrait className="w-12 h-12 text-purple-600" />,
    color: 'bg-purple-100',
    link: '#',
    status: 'Coming Soon',
    rating: null,
  },
  {
    title: 'Agal Daily Quotes',
    description: 'Start your day with inspiring quotes and daily motivation delivered to your phone.',
    icon: <IoPhonePortrait className="w-12 h-12 text-emerald-600" />,
    color: 'bg-emerald-100',
    link: '#',
    status: 'Coming Soon',
    rating: null,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">Our Products</h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Experience our high-quality applications designed to enhance your daily life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200 overflow-hidden flex flex-col"
            >
              <div className="p-8 grow">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl ${product.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {product.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                     <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      product.status === 'Live' ? 'bg-green-100 text-green-700' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {product.status}
                    </span>
                    {product.rating && (
                      <div className="flex items-center text-amber-500 text-xs font-bold">
                        <IoStar className="w-3 h-3 fill-current mr-1" /> {product.rating}
                      </div>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-zinc-500 mb-6 leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>

              <div className="px-8 pb-8 mt-auto">
                {product.status === 'Live' ? (
                  <Link 
                    href={product.link}
                    target="_blank"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white text-sm font-semibold rounded-xl hover:bg-zinc-800 transition-colors group-hover:shadow-lg"
                  >
                    Download App <IoArrowForward className="ml-2 w-4 h-4" />
                  </Link>
                ) : (
                  <button disabled className="w-full inline-flex items-center justify-center px-6 py-3 bg-zinc-100 text-zinc-400 text-sm font-semibold rounded-xl cursor-not-allowed">
                    Notify Me
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
             href="https://play.google.com/store/apps/developer?id=iMac+Developers"
             target="_blank"
             className="inline-flex items-center gap-2 text-zinc-600 font-semibold hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-600 pb-0.5"
          >
            View More Apps on Play Store <IoOpenOutline size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
