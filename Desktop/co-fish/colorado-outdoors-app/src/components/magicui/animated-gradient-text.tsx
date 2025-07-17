'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 bg-size-200 bg-pos-0 bg-clip-text text-transparent animate-gradient-x",
        className
      )}
    >
      {children}
    </motion.div>
  );
}