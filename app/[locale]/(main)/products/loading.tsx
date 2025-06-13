"use client";
import { motion } from 'motion/react';
export default function Loading() {
    return (
        <div className='flex items-center justify-center h-[80vh]'>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                className="col-span-3 row-span-2"
                >
                <div className='animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-gray-500'></div>
            </motion.div>
        </div>
    )
}

