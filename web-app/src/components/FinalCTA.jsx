import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="mb-section-gap relative">
      <div className="particle-bg rounded-3xl p-12 lg:p-24 text-center border border-primary/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold mb-8 leading-tight"
          >
            The Horizon Awaits <br/> <span className="text-primary">Your Evolution.</span>
          </motion.h2>
          <p className="text-on-surface-variant font-body-lg mb-12 max-w-xl mx-auto">
            Don't just watch the future happen. Build it. Secure your place in the next generation of AI architects.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-10 lg:px-16 py-5 lg:py-6 bg-primary text-on-primary-container font-bold text-lg lg:text-xl rounded-xl shadow-[0_0_50px_rgba(168,85,247,0.5)] hover:shadow-[0_0_70px_rgba(168,85,247,0.7)] transition-all font-space-grotesk tracking-widest uppercase"
          >
            Start Your Journey
          </motion.button>
        </div>
        
        {/* Visual flourishes */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full"></div>
      </div>
    </section>
  );
};

export default FinalCTA;
