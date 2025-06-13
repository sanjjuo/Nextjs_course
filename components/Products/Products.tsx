"use client";
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '../common/PageHeader/PageHeader';
import { motion } from 'motion/react'

const Products = ({ products }: { products: Product[] }) => {
    return (
        <div>
            <PageHeader header='our products' />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-5">
                {products.slice(0, 20).map((product) => (
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4}}
                        viewport={{once: true}}
                        key={product.id} className='w-full'>
                        <div className='relative overflow-hidden rounded-lg h-[300px]'>
                            <Link href={`/products/${product.id}`}>
                                <Image src={product?.images[0]} alt='' width={1000} height={300} className='rounded-lg hover:scale-110 h-full duration-300' />
                            </Link>
                        </div>
                        <div className='mt-2'>
                            <h6 className='flex items-center justify-between'>
                                <span className='overflow-hidden text-ellipsis whitespace-nowrap w-56'>{product.title}</span>
                                <span>${product.price}</span>
                            </h6>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Products
