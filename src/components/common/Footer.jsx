import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 bg-bg'>
      <div>
        <NavLink>
            <img src={'/nexusshoplogo.png'} alt="Nexus Shop" className='h-12 w-auto object-contain' />
        </NavLink>
        <p className='text-textsecondary text-sm leading-relaxed max-w-xs'>
            Your one-stop destination for premium products across every category. Quality you can trust, prices you'll love.
        </p>
        <div className='flex gap-3'>
            <a href="#" className='w-9 h-9 rounded-xl border border-border flex items-center justify-center  text-textsecondary hover:text-textprimary transition-all'><FaInstagram/></a>
            <a href="#" className='w-9 h-9 rounded-xl border border-border flex items-center justify-center  text-textsecondary hover:text-textprimary transition-all'><FaXTwitter/></a>
            <a href="#" className='w-9 h-9 rounded-xl border border-border flex items-center justify-center  text-textsecondary hover:text-textprimary transition-all'><FaFacebook/></a>
            <a href="#" className='w-9 h-9 rounded-xl border border-border flex items-center justify-center  text-textsecondary hover:text-textprimary transition-all'><FaYoutube/></a>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <h4 className='font-syne text-textprimary text-sm font-bold uppercase tracking-widest'>
            SHOP
        </h4>
        <ul className='flex flex-col gap-3'>
            <li><NavLink className={`text-textsecondary hover:text-textsecondary text-sm transition-all`}>All Products</NavLink> </li>
            <li><NavLink className={`text-textsecondary hover:text-textsecondary text-sm transition-all`}>Beauty</NavLink></li>
            <li><NavLink className={`text-textsecondary hover:text-textsecondary text-sm transition-all`}>Fragrances</NavLink></li>
            <li><NavLink className={`text-textsecondary hover:text-textsecondary text-sm transition-all`}>Furniture</NavLink></li>
            <li><NavLink className={`text-textsecondary hover:text-textsecondary text-sm transition-all`}>Groceries</NavLink></li>
            {/* <li>New Arrivals New</li> */}
        </ul>
      </div>
    </div>
  )
}

export default Footer
