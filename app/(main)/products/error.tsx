"use client"; // Error boundaries must be Client Components
import { useRouter } from 'next/navigation';
import React, { startTransition } from 'react'

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    }
    return (
        <div className='flex flex-col items-center justify-center h-[80vh]'>
            <span className='text-lg'>wtf are you doing mahn there is an error..</span>
            <span className='text-red-500'>{error.message}</span>
            <button onClick={reload} className='app-btn'>try again</button>
        </div>
    )
}

// dont call this error.tsx (ErrorBoundary) in async Server Component bcoz it is a Client component

// It refreshes the current page using router.refresh().

// It resets the error state using reset().

// Because it's wrapped in startTransition, it won't block the UI while doing this.
