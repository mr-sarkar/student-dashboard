'use client';

import { motion } from 'framer-motion';

export default function ActivityTile() {
  // Mock activity data (last 7 days)
  const activityData = [20, 45, 30, 65, 55, 80, 70];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return (
    <motion.section
      className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ 
        scale: 1.01,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
    >
      <h3 className="text-xl font-semibold mb-4 text-white">Learning Activity</h3>
      
      {/* Activity Graph */}
      <div className="flex items-end gap-3 h-40">
        {activityData.map((height, index) => (
          <motion.div
            key={index}
            className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-lg cursor-pointer hover:opacity-80"
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>
      
      {/* Day labels */}
      <div className="flex justify-around mt-3 text-xs text-gray-500">
        {days.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </div>
    </motion.section>
  );
}