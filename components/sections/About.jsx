'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">
              About <span className="text-blue-600">Agal Apps</span>
            </h2>
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              We are a <span className="font-bold text-zinc-900">1 Million Dollar Startup</span> fueled by a passion for technology and innovation.
              Headquartered at the intersection of creativity and engineering, we specialize in delivering high-end digital solutions that define the future.
            </p>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              From complex mobile applications on iOS and Android to enterprise-grade web systems, our team is dedicated to perfection. We don&apos;t just write code; we architect success.
            </p>
            
            <div className="flex gap-8 border-t border-zinc-100 pt-8">
              <div>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
                <p className=" text-zinc-500 font-medium">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-purple-600 mb-2">24/7</h3>
                <p className=" text-zinc-500 font-medium">Support & Maintenance</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-emerald-600 mb-2">100%</h3>
                <p className=" text-zinc-500 font-medium">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
              <div className="absolute inset-0 bg-gradient-linear-tr from-blue-600/10 to-purple-600/10 z-10 pointer-events-none" />
              <Image
                src="/about-visual.png"
                alt="Agal Apps Technology"
                width={800}
                height={600}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
