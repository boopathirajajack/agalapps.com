'use client';

import { motion } from 'framer-motion';
import { IoStar } from 'react-icons/io5';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechVision',
    content: "Agal Apps transformed our business with their exceptional mobile app development. The team is professional, skilled, and delivered on time.",
    rating: 5,
  },
  {
    name: 'Sarah Williams',
    role: 'Founder, EcoLife',
    content: "The web application they built for us is top-notch. It's fast, responsive, and looks amazing. Highly recommend their services!",
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'CTO, FutureSoft',
    content: "Their IT consulting services helped us streamline our cloud infrastructure, saving us significant costs. A true partner in growth.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">Client Testimonials</h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <IoStar key={i} className="text-amber-500 w-5 h-5" />
                ))}
              </div>
              <p className="text-zinc-600 mb-6 italic leading-relaxed grow">
                &ldquo;{item.content}&rdquo;
              </p>
              <div className="mt-auto">
                <h4 className="font-bold text-zinc-900">{item.name}</h4>
                <p className="text-sm text-zinc-500">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
