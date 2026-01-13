/**
 * Model3DSkeleton - Loading state cho 3D models
 *
 * Effort: S (1-2h)
 * Features:
 * - Animated skeleton
 * - Pulse effect
 * - Accessibility support
 */

import { motion } from "framer-motion";

const Model3DSkeleton = ({ className = "" }) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      role="status"
      aria-label="Đang tải mô hình 3D..."
    >
      {/* Outer ring */}
      <motion.div
        className="absolute w-48 h-48 rounded-full border-2 border-dashed border-[#DA251D]/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Middle ring */}
      <motion.div
        className="absolute w-36 h-36 rounded-full border-2 border-[#FFCD00]/40"
        animate={{ rotate: -360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner circle */}
      <motion.div
        className="w-24 h-24 rounded-full bg-gradient-to-br from-[#DA251D]/20 to-[#FFCD00]/20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center dot */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-[#DA251D]"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Loading text */}
      <div className="absolute -bottom-12 text-center">
        <p className="text-sm text-gray-500 font-medium">Đang tải mô hình 3D</p>
        <motion.div
          className="flex justify-center gap-1 mt-2"
          initial="start"
          animate="end"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 bg-[#DA251D] rounded-full"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Screen reader text */}
      <span className="sr-only">Đang tải mô hình 3D, vui lòng chờ...</span>
    </div>
  );
};

export default Model3DSkeleton;
