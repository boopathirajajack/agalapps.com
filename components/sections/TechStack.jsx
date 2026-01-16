'use client';

import { motion } from 'framer-motion';
import { 
  IoLogoReact, 
  IoLogoNodejs, 
  IoLogoPython, 
  IoLogoApple, 
  IoLogoAndroid, 
  IoCloudOutline,
  IoCodeSlash,
  IoServerOutline
} from 'react-icons/io5';

const techStack = [
  { icon: <IoLogoReact className="w-12 h-12 text-[#61DAFB]" />, name: 'React & Next.js' },
  { icon: <IoLogoNodejs className="w-12 h-12 text-[#339933]" />, name: 'Node.js' },
  { icon: <IoLogoPython className="w-12 h-12 text-[#3776AB]" />, name: 'Python' },
  { icon: <IoLogoApple className="w-12 h-12 text-zinc-900" />, name: 'iOS' },
  { icon: <IoLogoAndroid className="w-12 h-12 text-[#3DDC84]" />, name: 'Android' },
  { icon: <IoCloudOutline className="w-12 h-12 text-blue-500" />, name: 'Cloud Infra' },
  { icon: <IoCodeSlash className="w-12 h-12 text-purple-500" />, name: 'Clean Code' },
  { icon: <IoServerOutline className="w-12 h-12 text-zinc-600" />, name: 'DevOps' },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-white border-y border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">Technologies We Use</h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            We use the latest tools and frameworks to build robust, scalable, and high-performance applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 text-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-zinc-50 transition-colors"
            >
              <div className="bg-white p-4 rounded-full shadow-sm border border-zinc-100">
                {tech.icon}
              </div>
              <span className="font-semibold text-zinc-700 text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
