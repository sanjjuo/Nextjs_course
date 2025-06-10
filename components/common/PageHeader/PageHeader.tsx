import React from 'react'

const PageHeader = ({ header }: { header: string }) => {
    return (
        <div>
            <h1 className='heading-text'>{header}</h1>
        </div>
    )
}

export default PageHeader
