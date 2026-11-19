import React from 'react'
import Card from '../components/Card'

const Dashboard = () => {
  return (
    <div className='p-5'>
      <div className='flex justify-between py-5'>
          <Card />
          <Card />
          <Card />
      </div>
    </div>
  )
}

export default Dashboard
