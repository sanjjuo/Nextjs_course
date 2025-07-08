"use client";
import { motion } from "motion/react";

const Loading = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      className="col-span-3 row-span-2"
    >
      <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-gray-500"></div>
    </motion.div>
  );
};

export default Loading;
