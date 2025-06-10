import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <Image src='/not_found.jpg' alt='/' width={800} height={100} />
        <Link href='/'><button className='app-btn'>back to home page</button></Link>
    </div>
  )
}

export default NotFound
