import PageHeader from '@/components/common/PageHeader/PageHeader'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Profile"
}

const Profile = () => {
  return (
    <div>
      <PageHeader header='my profile' />
    </div>
  )
}

export default Profile
