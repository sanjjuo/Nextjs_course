import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col items-center justify-center h-[70vh]'>
            <Image
                src='/check.gif'
                alt='place order'
                width={500}
                height={500}
                className='object-cover'
            />
            <p className='capitalize text-lg'>order placed successfully !!</p>
            <Link href='/'>
                <button className='app-btn !w-80'>go to home</button>
            </Link>
        </div>
    )
}

export default page
