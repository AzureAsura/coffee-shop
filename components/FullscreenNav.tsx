'use client'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X, Instagram, Mail, Phone } from 'lucide-react'
import { navLinks } from '@/constants'
import { Link as ScrollLink } from 'react-scroll'

const FullscreenNav = ({ open, setOpen }: { open: boolean, setOpen: any }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  if (!mounted) return null

  return createPortal(
    <div
      className={`
        fixed inset-0 w-screen h-screen bg-white z-[9999]
        transform transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]
        ${open ? 'translate-y-0' : '-translate-y-full'}
      `}
    >

      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-100/30 blur-[120px] rounded-full -z-10" />


      <div className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center">
        <span className="text-xl md:text-2xl font-black tracking-tighter uppercase italic">
          Twenty One.
        </span>
        <button
          onClick={() => setOpen(false)}
          className="group border border-[#1A2F1A]/20 rounded-full p-3 md:p-4 hover:bg-[#1A2F1A] hover:text-white transition-all duration-300 cursor-pointer"
        >
          <X className='size-6 md:size-8 group-hover:rotate-90 transition-transform duration-500' />
        </button>
      </div>

      <div className="h-full flex flex-col md:flex-row items-start md:items-center px-6 md:px-24 pt-28 md:pt-10">

        <div className="flex flex-col space-y-1 md:space-y-4 text-5xl md:text-[7.5rem] font-black leading-[0.9] tracking-tighter w-full md:flex-1">
          {navLinks.map((item) => (
            <div key={item.name} className='group overflow-hidden'>
              <ScrollLink
                to={item.href.replace('#', '')}
                smooth={true}
                duration={800}
                offset={-80}
                onClick={() => setOpen(false)}
                className="hover:translate-x-4 md:hover:translate-x-8 hover:text-green-600 cursor-pointer transition-all duration-500 uppercase block"
              >
                {item.name}
              </ScrollLink>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-0 w-full md:w-auto flex flex-row md:flex-col justify-between md:justify-center md:space-y-16 border-t md:border-none border-[#1A2F1A]/10 pt-8 md:pt-0">

          <div className="space-y-4">
            <p className="uppercase text-[10px] md:text-[12px] tracking-[0.4em] text-[#1A2F1A]/40 font-bold">Socials</p>
            <div className="space-y-2 text-sm md:text-lg font-bold">
              <ScrollLink
                to={'follow'}
                smooth={true}
                duration={800}
                offset={-80}
                onClick={() => setOpen(false)}
                className='flex items-center gap-2 hover:text-green-600 cursor-pointer transition-colors'
              >
                <Instagram size={16} /> Instagram
              </ScrollLink>
            </div>
          </div>

          <div className="space-y-4">
            <p className="uppercase text-[10px] md:text-[12px] tracking-[0.4em] text-[#1A2F1A]/40 font-bold">Contact</p>
            <div className="space-y-2 text-sm md:text-lg font-bold text-right md:text-left">
              <p className="hover:text-green-600 cursor-pointer transition-colors">hello@twentyone.com</p>
              <p className="hover:text-green-600 cursor-pointer transition-colors">+62 821-xxxx-xxxx</p>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-10 hidden md:block text-[10px] tracking-[0.5em] uppercase opacity-20">
        Based in Indonesia &bull; EST 2026
      </div>
    </div>,
    document.body
  )
}

export default FullscreenNav