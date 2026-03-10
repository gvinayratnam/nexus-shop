import React from 'react'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { FaUser } from 'react-icons/fa'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { LuMenu } from 'react-icons/lu'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const navLinkClass = ({ isActive }) =>
        isActive? 'text-textprimary bg-surface px-3 py-2 rounded-lg text-sm font-medium transition-all': 'text-textsecondary hover:text-textprimary hover:bg-surface px-3 py-2 rounded-lg text-sm font-medium       transition-all'
    return (
        <nav className='fixed w-full top-0 left-0 z-50 border-b bg-bg'>
            <div className='max-w-7xl mx-auto px-6 h-16 flex items-center gap-6'>
                <NavLink to="/" className='flex items-center h-full '>
                    <img src="/nexusshoplogo.png" alt="nexusshoplogo" className='h-12 w-auto object-contain' />
                </NavLink>
                <div className="flex-1 max-w-xl relative">
                    <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-textsecondary text-lg" />
                    <input
                        type="text"
                        placeholder="Search products, brands…"
                        className="w-full bg-surface border border-border rounded-xl py-2 pl-9 pr-4 text-textprimary placeholder:text-textsecondary text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                </div>
                <ul className='hidden md:flex items-center gap-1'>
                    <li>
                        <NavLink to={'/'} className={navLinkClass}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/products'} className={navLinkClass}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/categories'} className={navLinkClass}>Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/deals'} className={navLinkClass}>Deals</NavLink>
                    </li>
                </ul>
                <div className='flex items-center justify-center gap-2 ml-auto '>

                    <NavLink className={`relative p-2 bg-surface border-2 border-border rounded-xl text-textsecondary hover:text-textprimary hover:border-primary  transition-all`}>
                        <CiHeart className="text-2xl" /> 
                        <span className='absolute -top-1 -right-1 text-black font-medium w-5 h-5 rounded-full flex justify-center items-center border-2 border-bg text-xs bg-secondary'>2</span>
                    </NavLink>

                    <NavLink className={`relative p-2 bg-surface border-2 border-border rounded-xl text-textsecondary hover:text-textprimary hover:border-primary  transition-all`}>
                        <CiShoppingCart className="text-2xl" />
                        <span className=' absolute -top-1 -right-1 text-black font-medium w-5 h-5 rounded-full flex justify-center items-center border-2 border-bg text-xs bg-secondary'>4</span>
                    </NavLink>

                    <NavLink className={`flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-xl font-semibold transition-all`}> 
                        <FaUser className="text-sm" /> 
                        <span>Login</span>
                    </NavLink>

                    <NavLink className={`md:hidden p-2 bg-surface border border-border rounded-xl text-textsecondary hover:text-textprimary transition-all`}>
                        <LuMenu className="text-xl " />
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
