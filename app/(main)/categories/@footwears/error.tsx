"use client";
import React from 'react';

const ErrorBoundary = ({ error }: { error: Error }) => {
    return (
        <div className='flex items-center justify-center h-full bg-gray-200 rounded-xl'>
            <span className='text-red-500'>{error.message}</span>
        </div>
    )
}

export default ErrorBoundary
