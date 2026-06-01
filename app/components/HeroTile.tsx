'use client';

import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

export default function HeroTile() {
  const streak = 7;
  
  return (
    <motion.section
      className="col-span-full md:col-span-2 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 border border-gray-700 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.01,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Welcome back, <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Student!</span>
            </h2>
            <p className="text-gray-400">Ready to continue your learning journey?</p>
          </div>
          
          {/* Streak Indicator */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 py-2 rounded-full">
            <Flame size={20} className="text-orange-500" />
            <span className="font-bold text-white">{streak} day streak</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}