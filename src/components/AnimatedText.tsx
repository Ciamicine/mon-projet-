import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p ref={paragraphRef} className={className}>
      {characters.map((char, index) => {
        const charProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
        const opacity = useTransform(charProgress, (progress: number) => {
          const charStart = index / characters.length;
          const charEnd = (index + 1) / characters.length;
          return progress < charStart
            ? 0.2
            : progress > charEnd
              ? 1
              : 0.2 + (progress - charStart) / (charEnd - charStart) * 0.8;
        });

        return (
          <motion.span key={index} style={{ opacity }}>
            {char}
          </motion.span>
        );
      })}
    </p>
  );
};
