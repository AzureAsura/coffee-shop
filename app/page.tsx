import Footer from '@/components/Footer'
import Hero from '@/sections/Hero'
import Listings from '@/sections/Listings'
import Maps from '@/sections/Maps'
import View from '@/sections/View'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden '>
        <Hero />
      <div className='mx-auto max-w-7xl sm:px-6 px-4'>
        <View/>
        <Listings/>
        <Maps/>
        <Footer/>

      </div>

    </div>
  )
}

export default page