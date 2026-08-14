import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

export const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  className = '',
}: MagnetProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < padding) {
      setPosition({
        x: distanceX / strength,
        y: distanceY / strength,
      });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={
          position.x === 0 && position.y === 0
            ? { type: 'spring', damping: 15, stiffness: 100 }
            : undefined
        }
        style={{ willChange: 'transform' }}
      >
        {children}
      </motion.div>
    </div>
  );
};
