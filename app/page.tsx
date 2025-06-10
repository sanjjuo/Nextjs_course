import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center h-screen app-color'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className="home-text font-bold capitalize">Welcome to Centrepoint Outlet</h1>
        <p className="text-lg font-bold text-gray-600 mt-2">Discover the latest trends in fashion, footwear, beauty, and home all in one place.</p>
        <Link href='/products'>
          <button className='app-btn '>shop now</button>
        </Link>
      </div>
    </div>
  )
}

export default page
