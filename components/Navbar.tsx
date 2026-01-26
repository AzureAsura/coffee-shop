'use client'
import React from 'react'


import Image from 'next/image'
import clsx from 'clsx'
import { Menu } from 'lucide-react'



const NavbarTrx = () => {


    return (
        <nav className="w-full fixed px-[1rem] md:px-0 max-w-5xl z-50 py-0 md:py-4 left-1/2 -translate-x-1/2 top-2 md:top-0">
            <div className="flex flex-row items-center justify-between bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-gray-100 min-h-[4.5rem]">

                <a href="" className="flex items-center">
                    <img src='logo.jpg' alt='logo' className='h-10 w-10 rounded-xl' />
                    <span className="flex items-center text-lg font-bold pl-2">Twenty 1</span>
                </a>


                <div className="flex flex-row items-center gap-2">
                    <button className='bg-gray-100 text-black rounded-3xl px-4 py-2 transition-all duration-200 items-center justify-center hover:bg-gray-100 text-sm font-medium sm:flex'
                    >
                        <Menu/>
                    </button>

                </div>
            </div>
        </nav >
    )
}

export default NavbarTrx