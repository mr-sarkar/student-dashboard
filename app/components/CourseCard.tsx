'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useEffect, useState } from 'react';

interface CourseCardProps {
  title: string;
  progress: number;
  iconName: string;
}

export default function CourseCard({ title, progress, iconName }: CourseCardProps) {
  const [currentProgress, setCurrentProgress] = useState(0);
  
  // Dynamically get the icon component
  const IconComponent = (Icons as any)[iconName] || Icons.BookOpen;

  useEffect(() => {
    // Animate progress bar from 0 to actual progress
    const timer = setTimeout(() => {
      setCurrentProgress(progress);
    }, 100);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <motion.article
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 border border-gray-700 hover:border-purple-500/50 transition-colors cursor-pointer group"
      whileHover={{ 
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background gradient effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Icon */}
      <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 w-fit">
        <IconComponent size={24} className="text-purple-400" />
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
      
      {/* Progress Section */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Progress</span>
          <span className="text-purple-400">{currentProgress}%</span>
        </div>
        
        {/* Animated Progress Bar */}
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${currentProgress}%` }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </div>
    </motion.article>
  );
}