'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoAdd, IoRemove } from 'react-icons/io5';

const faqs = [
  {
    question: "Do you develop both iOS and Android apps?",
    answer: "Yes, we specialize in developing native applications for both iOS and Android platforms, as well as cross-platform solutions using Flutter and React Native."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on complexity. A simple app might take 4-8 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during the planning phase."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely! We offer comprehensive maintenance and support packages to ensure your application remains up-to-date, secure, and performs optimally after launch."
  },
  {
    question: "Can you help with UI/UX design?",
    answer: "Yes, we have a dedicated team of UI/UX designers who create intuitive, user-friendly, and visually stunning designs tailored to your brand and target audience."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Got questions? We&apos;ve got answers. If you don&apos;t see your question here, feel free to contact us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-zinc-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-zinc-50 hover:bg-zinc-100 transition-colors text-left"
              >
                <span className="font-semibold text-zinc-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <IoRemove className="text-zinc-500 w-6 h-6 shrink-0" />
                ) : (
                  <IoAdd className="text-zinc-500 w-6 h-6 shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 bg-zinc-50 text-zinc-600 leading-relaxed border-t border-zinc-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
