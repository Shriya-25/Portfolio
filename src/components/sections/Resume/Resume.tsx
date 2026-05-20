'use client';

import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/Shriya_Kulkarni_Resume.pdf';
    link.download = 'Shriya_Kulkarni_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="resume"
      className="relative py-12 xs:py-16 sm:py-20 px-4 xs:px-5 sm:px-6"
      style={{ background: 'transparent' }}
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-10 sm:mb-12"
        >
          {/* Heading — matches GitHub Activity style exactly */}
          <h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 xs:mb-3 uppercase tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif', fontWeight: 800 }}
          >
            My <span className="text-rainbow-gradient">Resume</span>
          </h2>

          {/* Subheading */}
          <p className="text-muted text-sm xs:text-base sm:text-lg max-w-2xl mx-auto px-2">
            Download my resume to know more about my education, projects, skills, and experience.
          </p>
        </motion.div>

        {/* Download Button — gradient style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <button
            onClick={handleDownload}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #FF5C29 0%, #FF1493 100%)',
              boxShadow: '0 8px 32px rgba(255, 92, 41, 0.3)',
            }}
            aria-label="Download Shriya Kulkarni Resume PDF"
          >
            <FileDown
              size={20}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            Download
          </button>
        </motion.div>
      </div>
    </section>
  );
}
