"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const ProductDetailsClient = ({ productDetails }: { productDetails: Product }) => {
    const router = useRouter();
    const placeOrder = () => (
        router.push('/place_order')
    );
    const [changeImage, setChangeImage] = React.useState(productDetails.images[0]);
    return (
        <div className='flex flex-col items-center justify-center relative'>
            <Link href='/products' className='absolute left-0 top-0 capitalize text-lg underline hover:text-blue-600'> back</Link>
            <h1 className='text-3xl'>{productDetails.title}</h1>
            <div className="mt-5 w-[500px]">
                <div key={productDetails.id} className='col-span-3 space-y-3'>
                    <div className='h-[500px] overflow-hidden rounded-lg'>
                        <Image
                            src={changeImage}
                            alt=''
                            width={1000}
                            height={50}
                            className='rounded-lg hover:scale-110 h-full duration-300 object-cover' />
                    </div>
                    <div className='flex items-center gap-3'>
                        {productDetails.images.length > 1 && productDetails.images.filter((item) => item !== changeImage).map((image, index) => (
                            <Image
                                onClick={() => setChangeImage(image)}
                                key={index}
                                src={image}
                                alt=''
                                width={100}
                                height={100}
                                className='rounded-lg cursor-pointer hover:scale-105 duration-300' />
                        ))}
                    </div>
                </div>
                <div className='mt-5'>
                    <h6 className='text-3xl'>
                        ${productDetails.price}
                    </h6>
                    <p>{productDetails.description}</p>
                </div>
                <div className='flex items-center justify-center'>
                    <button onClick={placeOrder} className='app-btn !w-80'>place order</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsClient
