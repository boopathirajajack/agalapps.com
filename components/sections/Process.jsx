'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Strategy & Planning',
    description: 'We analyze your requirements, conduct market research, and create a roadmap for success.',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description: 'Our designers craft intuitive and stunning interfaces that provide a seamless user experience.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'We code your application using the latest technologies, ensuring scalability and performance.',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'We handle the deployment and provide ongoing support to help your business grow.',
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">How We Work</h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Our proven process ensures we deliver high-quality results on time and within budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-6xl font-bold text-zinc-100 absolute top-4 right-4 pointer-events-none select-none">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3 mt-4">{step.title}</h3>
              <p className="text-zinc-600  leading-relaxed relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
