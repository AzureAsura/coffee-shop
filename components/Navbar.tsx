import NavbarButton from './NavbarButton'

const Navbar = () => {
    return (
        <nav className="w-full fixed px-[1rem] md:px-0 max-w-5xl z-50 py-0 md:py-4 left-1/2 -translate-x-1/2 top-2 md:top-0">
            {/* - bg-white/70 + backdrop-blur: efek kaca transparan yang modern
                - border-green-100: ganti abu-abu ke hijau sangat muda
                - shadow-green-900/5: shadow tipis kehijauan agar lebih blend
            */}
            <div className="flex flex-row items-center justify-between bg-white/75 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_30px_rgb(45,79,45,0.08)] border border-green-50 min-h-[4.5rem]">

                <a href="#home" className="flex items-center group">
                    <div className="relative overflow-hidden rounded-xl h-10 w-10 border border-green-100 shadow-sm transition-transform group-hover:scale-105">
                        <img 
                            src='logo.jpg' 
                            alt='logo' 
                            className='h-full w-full object-cover' 
                        />
                    </div>
                    
                    {/* Teks Logo: Pakai Deep Forest Green (#1A2F1A) */}
                    <div className="flex flex-col pl-3">
                        <span className="text-lg font-black leading-none text-[#1A2F1A] tracking-tight">
                            Twenty <span className="text-green-600">One</span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-700/60 leading-none mt-1">
                            Coffee & Eatery
                        </span>
                    </div>
                </a>

                <div className="flex flex-row items-center gap-2">
                    
                    <NavbarButton/>
                </div>
            </div>
        </nav >
    )
}

export default Navbar