import { motion } from 'framer-motion';

export const LiveProjectButton = () => {
  return (
    <motion.button
      className="rounded-full px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest border-2 border-[#D7E2EA] text-[#D7E2EA]"
      whileHover={{ backgroundColor: 'rgba(215, 226, 234, 0.1)' }}
      whileTap={{ scale: 0.95 }}
    >
      Découvrir
    </motion.button>
  );
};
