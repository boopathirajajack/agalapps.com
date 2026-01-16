'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoRocketOutline, IoArrowForward, IoCodeSlash, IoLogoApple, IoLogoAndroid } from 'react-icons/io5';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]" />
      <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Floating Icons Background (Subtle) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-[10%] text-zinc-200/50"
          >
            <IoCodeSlash size={64} />
          </motion.div>
          <motion.div 
             animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute top-20 right-[15%] text-zinc-200/50"
          >
            <IoLogoApple size={56} />
          </motion.div>
           <motion.div 
             animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
             transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
             className="absolute bottom-20 left-[20%] text-zinc-200/50"
          >
            <IoLogoAndroid size={60} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white border border-zinc-200 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-zinc-600 font-medium text-sm tracking-wide">
              1 Million Dollar Startup Vision
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
            Transforming Ideas into <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
              Digital Reality
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            We are Agal Apps. We craft high-performance mobile and web solutions that redefine user experiences and drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="group w-full sm:w-auto px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <IoRocketOutline className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Start Your Project
            </Link>
            <Link
              href="/products"
              className="group w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 font-semibold rounded-full border border-zinc-200 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50/50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Explore Products
              <IoArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-400 font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-zinc-300 to-transparent"></div>
      </motion.div>
    </section>
  );
}
