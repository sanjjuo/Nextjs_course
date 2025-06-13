import PageHeader from '@/components/common/PageHeader/PageHeader'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "About"
}

const About = () => {
  return (
    <div>
      <PageHeader header='about me' />
    </div>
  )
}

export default About
