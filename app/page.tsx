import Footer from '@/components/Footer'
import Toast from '@/components/Toast'
import Follow from '@/sections/Follow'
import Hero from '@/sections/Hero'
import Listings from '@/sections/Listings'
import Maps from '@/sections/Maps'
import View from '@/sections/View'

const page = () => {
  return (
    <div className='overflow-hidden '>
        <Hero />
      <div className='mx-auto max-w-7xl sm:px-6 px-4'>
        <View/>
        <Listings/>
        <Maps/>
        <Follow/>
        <Footer/>
        <Toast/>

      </div>

    </div>
  )
}

export default page