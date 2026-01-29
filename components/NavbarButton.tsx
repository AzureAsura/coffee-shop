'use client'
import { useState } from "react"
import { Menu } from "lucide-react"
import FullscreenNav from "./FullscreenNav"

const NavbarButton = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-gray-100 text-black rounded-3xl px-4 py-2 cursor-pointer"
      >
        <Menu />
      </button>


      <FullscreenNav open={open} setOpen={setOpen} />
    </>
  )
}

export default NavbarButton
