import Image from 'next/image'

export default function Loading() {
    return (
        <div className='flex items-center justify-center h-[80vh]'>
            <Image src='/loading.gif' alt='loading' width={100} height={100} />
        </div>
    )
}

