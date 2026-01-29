'use client' 

import { Link } from 'react-scroll' 

const HeroButton = () => {
    return (
        <Link 
            to='products'
            spy={true} 
            smooth={true}
            duration={800}
            offset={-80}
            className='group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white bg-black rounded-full overflow-hidden transition-all duration-300 hover:bg-[#1A2F1A] hover:shadow-[0_10px_20px_rgba(45,79,45,0.2)] active:scale-95 text-lg cursor-pointer'
        >

            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <span className="relative flex items-center gap-2">
                Order Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
            </span>
        </Link>
    )
}

export default HeroButton