"use client";
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from "motion/react" 

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/products");
    }, 500);
  };

  return (
    <div className='flex items-center justify-center h-screen app-color'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className="home-text font-bold capitalize">Welcome to Centrepoint Outlet</h1>
        <p className="text-lg font-bold text-gray-600 mt-2">Discover the latest trends in fashion, footwear, beauty, and home all in one place.</p>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className='app-btn'
          disabled={isLoading}
          onClick={handleClick}
        >
          {isLoading ? <span className='flex items-center justify-center gap-2'><Loader className='animate-spin' /> Ya llah...</span> : <span>shop now</span>}
        </motion.button>
      </div>
    </div>
  );
};

export default Page;
