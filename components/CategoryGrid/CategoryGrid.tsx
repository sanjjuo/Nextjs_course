import React from 'react'

const CategoryGrid = ({
    footwears,
    men,
    women
}: {
    footwears: React.ReactNode;
    men: React.ReactNode;
    women: React.ReactNode;
}) => {
    return (
        <div className='grid h-[400px] w-full grid-cols-1 lg:grid-cols-7 grid-rows-4 gap-2 mt-5'>
            <div className='col-span-3 row-span-2'>{men}</div>
            <div className='col-span-4 row-span-4'>{footwears}</div>
            <div className='col-span-3 row-span-2'>{women}</div>
        </div>
    )
}

export default CategoryGrid
