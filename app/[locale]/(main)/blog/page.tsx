import PageHeader from '@/components/common/PageHeader/PageHeader'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Blog"
}

const Blog = () => {
  return (
    <div>
      <PageHeader header='my blog' />
    </div>
  )
}

export default Blog
