import CategoryCard from '@/components/common/CategoryCard/CategoryCard'
import React from 'react'

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function DefaultFootwearsPage() {
  await wait(2000) // Simulate 2s delay
  return (
    <CategoryCard
      image='/footwear.jpg'
      title='footwears'
      link='/view-all-footwears'
    />
  )
}
