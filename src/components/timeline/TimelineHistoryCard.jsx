/**
 * TimelineHistoryCard - Parallax History Card với Tilt Effect
 * Thay thế bubble đơn giản bằng card 3D đẹp hơn
 *
 * Effort: M (3-5h)
 * Features:
 * - 3D tilt effect on mouse move
 * - Historical image with duotone
 * - Smooth animations with GSAP
 */

import { motion } from "framer-motion";
import TiltCard from "../ui/TiltCard";

const TimelineHistoryCard = ({
  item,
  index,
  isActive = false,
}) => {
  // Placeholder images for different eras
  const getEraImage = (year) => {
    if (year < 1920) return "/images/communist/1.png";
    if (year < 1930) return "/images/communist/2.png";
    if (year < 1945) return "/images/communist/3.png";
    return "/images/communist/4.png";
  };

  return (
    <TiltCard
      tiltMaxAngle={10}
      scale={isActive ? 1.05 : 1}
      glare={true}
      glareMaxOpacity={0.2}
      className="w-full"
    >
      <motion.article
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          scale: isActive ? 1 : 0.98,
        }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        className={`relative overflow-hidden rounded-2xl transition-all duration-300
          ${isActive 
            ? "bg-gradient-to-br from-white/90 to-white/70 shadow-2xl border-2 border-[#DA251D]/30" 
            : "bg-white/60 shadow-lg border border-white/40"
          }`}
      >
        {/* Duotone Image Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 grayscale"
            style={{
              backgroundImage: `url(${getEraImage(item.year)})`,
              mixBlendMode: "multiply",
            }}
          />
          {/* Duotone overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: isActive 
                ? "linear-gradient(135deg, rgba(218, 37, 29, 0.1) 0%, rgba(255, 205, 0, 0.1) 100%)"
                : "transparent",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-5 md:p-6">
          {/* Year Badge */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              {item.highlight && (
                <span className="px-2 py-0.5 text-xs font-bold uppercase tracking-wider 
                  bg-[#DA251D] text-white rounded-full">
                  Quan trọng
                </span>
              )}
              <span className={`font-bungee text-2xl md:text-3xl 
                ${isActive ? "text-[#DA251D]" : "text-gray-700"}`}>
                {item.year}
              </span>
            </div>
            {item.range && (
              <span className="text-xs text-gray-500 font-medium">
                {item.range}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className={`font-semibold text-base md:text-lg mb-2 leading-tight
            ${isActive ? "text-[#1A1A1A]" : "text-gray-800"}`}>
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3">
            {item.description}
          </p>

          {/* Impact on HCM */}
          {item.impactHCM && (
            <div className={`pt-3 border-t ${isActive ? "border-[#DA251D]/20" : "border-gray-200"}`}>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">
                Tác động đến Hồ Chí Minh
              </p>
              <p className={`text-sm italic leading-relaxed
                ${isActive ? "text-[#8B0000]" : "text-gray-700"}`}>
                {item.impactHCM}
              </p>
            </div>
          )}

          {/* Active Indicator */}
          {isActive && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DA251D] to-[#FFCD00] rounded-l-2xl"
            />
          )}
        </div>
      </motion.article>
    </TiltCard>
  );
};

export default TimelineHistoryCard;
