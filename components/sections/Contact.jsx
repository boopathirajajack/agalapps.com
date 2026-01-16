'use client';

import { motion } from 'framer-motion';
import { IoSend, IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-50 relative border-t border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">Let&apos;s Work Together</h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Have a project in mind? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                <IoLocationOutline size={24} />
              </div>
              <div>
                <h3 className="text-zinc-900 font-semibold mb-1">Our Office</h3>
                <p className="text-zinc-600  leading-relaxed">
                  M.S Complex, 1st Floor, No.3/6460,<br />
                  Uthukuli Main Road, Mannarai,<br />
                  Tirupur, Tamil Nadu 641 607, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                <IoMailOutline size={24} />
              </div>
              <div>
                <h3 className="text-zinc-900 font-semibold mb-1">Email Us</h3>
                <p className="text-zinc-600  leading-relaxed">
                  info@agalapps.com<br />
                  careers@agalapps.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                <IoCallOutline size={24} />
              </div>
              <div>
                <h3 className="text-zinc-900 font-semibold mb-1">Call Support</h3>
                <p className="text-zinc-600 ">
                  +91 63800 73200
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block  font-medium text-zinc-700 mb-2">Name</label>
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block  font-medium text-zinc-700 mb-2">Email</label>
                  <input type="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block  font-medium text-zinc-700 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-zinc-900 text-white font-bold rounded-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-zinc-900/20">
                Send Message <IoSend size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
