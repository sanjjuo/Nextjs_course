import React from 'react'

const notFoundInBrowser = () => {
    return (
        <div>
            you cannot view this page in browser, please use the terminal to run the command <span className='text-red-500'>npm run dev</span> and then visit <span className='text-blue-500'>http://localhost:3000/products</span> to view the product list.
        </div>
    )
}

export default notFoundInBrowser
