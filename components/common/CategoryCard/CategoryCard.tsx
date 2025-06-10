import Image from 'next/image';
import Link from 'next/link';

const CategoryCard = ({
  image,
  title,
  link
}: {
  image: string;
  title: string;
  link: string;
}) => {
  return (
    <div className='h-full relative overflow-hidden'>
      <Image
        src={image}
        width={1000}
        height={100}
        alt={title}
        className='w-full h-full rounded-xl object-cover'
      />
      <div className='absolute bg-black opacity-50 h-full inset-0 rounded-xl'></div>
      <h3 className='absolute inset-0 flex items-center justify-center text-white text-3xl font-bold tracking-wider'>{title}</h3>
      <Link href={`/categories/${link}`}>
        <p className='absolute right-5 text-white bottom-5'>View All</p>
      </Link>
    </div>
  )
}

export default CategoryCard
