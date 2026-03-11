import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
  
      <footer className="bg-surface border-t border-border">
        <div className='max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10'>
          {/* social media */}
          <div className='flex flex-col gap-4'>
            <NavLink to={'/'}>
              <img src={'/nexusshoplogo.png'} alt="Nexus Shop" className='h-12 w-auto object-contain' />
            </NavLink>
            <p className='text-textsecondary text-sm leading-relaxed max-w-xs'>
              Your one-stop destination for premium products across every category. Quality you can trust, prices you'll love.
            </p>
            <div className='flex gap-3'>
              <a href="#" className='w-9 h-9 rounded-xl border border-border flex items-center justify-center  text-textsecondary hover:text-textprimary transition-all'><FaInstagram /></a>
              <a href="#" className='w-9 h-9 rounded-xl border border-border flex items-center justify-center  text-textsecondary hover:text-textprimary transition-all'><FaXTwitter /></a>
              <a href="#" className='w-9 h-9 rounded-xl border border-border flex items-center justify-center  text-textsecondary hover:text-textprimary transition-all'><FaFacebook /></a>
              <a href="#" className='w-9 h-9 rounded-xl border border-border flex items-center justify-center  text-textsecondary hover:text-textprimary transition-all'><FaYoutube /></a>
            </div>
          </div>
          {/* nexusshop links */}
          <div className='flex flex-col gap-4'>
            <h4 className='font-syne text-textprimary text-sm font-bold uppercase tracking-widest'>
              SHOP
            </h4>
            <ul className='flex flex-col gap-3'>
              <li><NavLink className={`text-textsecondary hover:text-textprimary text-sm transition-all`}>All Products</NavLink> </li>
              <li><NavLink className={`text-textsecondary hover:text-textprimary text-sm transition-all`}>Beauty</NavLink></li>
              <li><NavLink className={`text-textsecondary hover:text-textprimary text-sm transition-all`}>Fragrances</NavLink></li>
              <li><NavLink className={`text-textsecondary hover:text-textprimary text-sm transition-all`}>Furniture</NavLink></li>
              <li><NavLink className={`text-textsecondary hover:text-textprimary text-sm transition-all`}>Groceries</NavLink></li>
              {/* <li>New Arrivals New</li> */}
            </ul>
          </div>
          {/* Account Links */}
          <div className='flex flex-col gap-4'>
            <h4 className='font-syne text-textprimary text-sm font-bold uppercase tracking-widest'>Accounts</h4>
            <ul className='flex flex-col gap-3'>
              <li><NavLink className={`text-textsecondary hover:text-textprimary  text-sm transition-all`}>Login</NavLink></li>
              <li><NavLink className={`text-textsecondary hover:text-textprimary text-sm transition-all`}>Register</NavLink></li>
              <li><NavLink className={`text-textsecondary hover:text-textprimary text-sm transition-all`}>My Orders</NavLink></li>
              <li><NavLink className={`text-textsecondary hover:text-textprimary text-sm transition-all`}>Wishlist</NavLink></li>
              <li><NavLink className={`text-textsecondary hover:text-textprimary text-sm transition-all`}>Cart</NavLink></li>

            </ul>
          </div>
          {/* help */}
          <div className='flex flex-col gap-4'>
            <h4 className='font-syne text-textprimary text-sm font-bold uppercase tracking-widest'>help</h4>
            <ul className='flex flex-col gap-3'>
              <li><NavLink className={`text-textsecondary hover:text-textprimary text-sm transition-all`}>About Us</NavLink></li>
              <li><NavLink className={`text-textsecondary hover:text-textprimary text-sm transition-all`}>Contact</NavLink></li>
              <li><NavLink className={`text-textsecondary hover:text-textprimary text-sm transition-all`}>FAQ</NavLink></li>
              <li><NavLink className={`text-textsecondary hover:text-textprimary text-sm transition-all`}>Shipping Info</NavLink></li>
              <li><NavLink className={`text-textsecondary hover:text-textprimary text-sm transition-all`}>Returns</NavLink></li>

            </ul>
          </div>
        </div>

        <div className='max-w-7xl mx-auto px-6 py-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
          <div>
            <h5 className='text-textprimary font-bold text-sm mb-1'>Stay in the loop</h5>
            <p className='text-secondary text-sm'>Get the latest deals and new arrivals straight to your inbox.</p>
          </div>
          <div className='flex gap-2'>
            <input type="text"
              placeholder='your@mail.com'
              className='bg-bg border border-border rounded-xl px-4 py-2 text-sm text-textprimary placeholder:text-textprimary outline-none focus:ring-2 focus:ring-primary/20 transition-all w-56'
            />
            <button className='bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all'>Subscribe</button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-4 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-textsecondary text-xs">
            © 2025 <span className="text-secondary font-semibold">Nexus Shop</span>. All rights reserved. Made with ♥
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-textsecondary hover:text-textprimary text-xs transition-all">Privacy Policy</a>
            <a href="#" className="text-textsecondary hover:text-textprimary text-xs transition-all">Terms of Service</a>
            <a href="#" className="text-textsecondary hover:text-textprimary text-xs transition-all">Cookies</a>
          </div>
        </div>
      </footer>

  )
}

export default Footer
