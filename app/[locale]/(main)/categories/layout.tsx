import CategoryGrid from '@/components/CategoryGrid/CategoryGrid';
import React from 'react'

const CategoryLayout = ({
    children,
    footwears,
    men,
    women
}: {
    children: React.ReactNode;
    footwears: React.ReactNode;
    men: React.ReactNode;
    women: React.ReactNode;
}) => {
    return (
        <div>
            <div>{children}</div>
            <CategoryGrid footwears={footwears} men={men} women={women} />
        </div>
    )
}

export default CategoryLayout
