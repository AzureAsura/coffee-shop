import HeroButton from '@/components/HeroButton'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className='relative overflow-hidden mb-16 md:mt-10' id='home'>
            <div>
                <div className='mx-auto max-w-7xl sm:px-6 px-4 relative flex justify-between items-center h-screen md:h-screen overflow-hidden'>
                    <div className='relative z-2 lg:max-w-[512px] max-w-[388px]'>
                        <div className='text-[12px] font-bold leading-[16px] tracking-[0.3em] mb-5 text-p3 uppercase text-p3 text-green-700'>Twenty One Coffee & Eatery</div>
                        <h1 className='lg:mb-6 lg:text-[84px] font-black lg:leading-[84px] tracking-[-0.03em] md:mb-7 md:h2 mb-4 text-5xl leading-12 uppercase'>
                            START YOUR DAY WITH A <span className='text-green-600'>COFFEE</span>
                        </h1>
                        <p className='md:max-w-[440px] mb-14 body-1 mb-10'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vero, aperiam itaque expedita iste fugiat ut repellat accusamus quidem neque veritatisquia maiores porro et cumque.
                        </p>

                        <HeroButton/>

                        
                    </div>

                    <div className="pointer-events-none hidden md:block max-w-[550px] h-[620px] flex-shrink-0">
                        <div className="w-full h-full overflow-hidden rounded-t-full shadow-2xl border-x-[12px] border-t-[12px] border-transparent">
                            <img
                                src="https://images.unsplash.com/photo-1599898330165-6c3b93296d60?q=80&w=2033&auto=format&fit=crop"
                                alt="hero"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>


                    <div className='absolute inset-0 md:hidden -z-10'>
                        <div className='absolute inset-0 bg-white/80 z-10' />
                        <img
                            src="https://images.unsplash.com/photo-1599898330165-6c3b93296d60?q=80&w=2033&auto=format&fit=crop"
                            alt=""
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero