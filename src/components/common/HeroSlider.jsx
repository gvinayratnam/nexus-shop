import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

const slides = [
    {
        tag: 'New Arrivals Just Dropped',
        title: ['Shop Without', 'Limits.', 'Live Without Compromise.'],
        desc: 'Discover thousands of premium products across beauty, fragrances, furniture and more. One store, endless possibilities.',
        glow: 'rgba(124,58,237,0.15)',
        img: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
        name: 'Essence Mascara',
        price: '$9.99',
        oldPrice: '$11.15',
        discount: '10',
    },
    {
        tag: 'Best Sellers This Week',
        title: ['Premium Quality,', 'Unbeatable', 'Prices.'],
        desc: 'Top rated products loved by thousands of customers. Shop the best, pay less, live more.',
        glow: 'rgba(59,130,246,0.15)',
        img: 'https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp',
        name: 'Calvin Klein CK One',
        price: '$49.99',
        oldPrice: '$50.95',
        discount: '2',
    },
    {
        tag: 'Top Rated Picks',
        title: ['Your Style,', 'Your Choice,', 'Your Store.'],
        desc: 'From fragrances to furniture — everything you need in one place, delivered fast to your door.',
        glow: 'rgba(251,191,36,0.12)',
        img: 'https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp',
        name: 'Annibale Colombo Bed',
        price: '$1899.99',
        oldPrice: '$2079.99',
        discount: '9',
    },
    {
        tag: 'Limited Time Deals',
        title: ['Big Discounts,', 'Bigger', 'Smiles.'],
        desc: 'Grab the hottest deals before they are gone. Updated daily with fresh offers just for you.',
        glow: 'rgba(239,68,68,0.13)',
        img: 'https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp',
        name: 'Knoll Conference Chair',
        price: '$499.99',
        oldPrice: '$510.20',
        discount: '2',
    },
]
const real_Count = slides.length
const extended = [slides[real_Count - 1], ...slides, slides[0]]
const HeroSlider = () => {
    return (
        <div className='relative bg-bg h-auto' >
            {/* slides wrapper */}
            <div className='flex h-full border border-red-400'>
                {
                    extended.map((slide, idx) => {
                        return (
                            <div key={idx} className='min-w-full flex itmes-center relative bg-bg text-white container-p'>
                                {/* background glow */}
                                
                                {/* Content grid */}
                                <div className=' border h-full w-full mx-auto px-6 py-10 grid items-center relative z-10' style={{gridTemplateColumns:'1.1fr 0.9fr',gap:'4rem'}}>
                                    {/* left */}
                                    <div >
                                        <div className='absolute pointer-events-none rounded-full w-100 h-100 left-[15%]'
                                        style={{
                                            background:`radial-gradient(circle,${slide.glow}0%,transparent 65%)`
                                        }}>

                                    </div>
                                        {/* tag */}
                                        <div className='inline-flex items-center gap-2
                                         bg-primary/10 border border-primary/30 text-primary rounded-full px-4 py-1.5 text-xs font-semibold mb-6 w-fit '>
                                            <span className='w-1.5 h-1.5 bg-primary rounded-full animate-ping'></span>
                                            {slide.tag}
                                        </div>
                                        <h1
                                        className='font-black leading-tight mb-5' style={{
                                            fontSize:'clamp(2.4rem,4.5vw,4rem)',lineHeight:'1.06'
                                        }} >
                                            <span className='block text-primary'
                                                >{slide.title[0]}
                                            </span>
                                            <span className='block bg-linear-to-r from-primary/20 to-secondary bg-clip-text text-transparent border '>
                                                {slide.title[1]}
                                            </span>
                                            <span className='block text-textprimary'>
                                                {slide.title[2]}
                                            </span>
                                        </h1>
                                        <p className='text-textsecondary leading-relaxed mb-8 max-w-md'> {slide.desc}</p>

                                        <div className='flex gap-4 flex-wrap mb-10'>
                                            <button className='flex items-center gap-2 text-white font-semibold text-lg px-7 py-3 rounded-xl transition-all duration-300 hover:scale-102 ' style={{
                                                background: 'linear-gradient(200deg, #ce5097, #c463b1, #b676c6, #a687d5, #9696e0, #8791db, #778bd5, #6786cf, #526dbd, #3f55aa, #2d3d96, #1b2582)'
                                            }}>
                                                Explore Products
                                                <FaArrowRightLong />
                                            </button>

                                            <button className='bg-transparent border border-border px-7 py-3 rounded-xl text-textprimary text-lg transition-all duration-300 hover:scale-102 hover:ring-1 hover:ring-blue-400 '> View Deals</button>
                                        </div>

                                        <div className="flex gap-10">
                                            {[
                                              { num: '194', suffix: '+', label: 'Products'   },
                                              { num: '12',  suffix: '+', label: 'Categories' },
                                              { num: '4.8', suffix: '★', label: 'Avg Rating' },
                                            ].map(({ num, suffix, label }) => (
                                              <div key={label}>
                                                <div className="font-bold text-textprimary" style={{ fontSize: '1.6rem', lineHeight: 1 }}>
                                                  {num}<span className="text-secondary">{suffix}</span>
                                                </div>
                                                <div className="text-xs text-textsecondary mt-1">{label}</div>
                                              </div>
                                            ))}
                                        </div>


                                    </div>
                                    {/* right  */}
                                        
                                    <div className=' flex items-center justify-center'>
                                        
                                        <div className='relative'>
                                            <div className='absolute rounded-full pointer-events-none' style={{
                                              inset: -18, zIndex: 0,
                                              background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)'
                                            }}>

                                            </div>
                                           
                                          
                                            <img className='relative w-full h-full object-contain hover:scale-150 transition-transform duration-500 '
                                      
                                             src={slide.img} alt={slide.name} 
                                             />
                                            
                                            <div className='bg-surface border border-border rounded-2xl shadow-2xl max-w-37.5 px-3 py-2 absolute -bottom-15 -left-20'>   
                                                <p className='text-textsecondary text-xs mb-0.5'>{slide.name}</p>
                                                <span className='font-bold text-secondary text-lg'>{slide.price}</span>
                                                <span className=' ml-1 line-through text-textsecondary'
                                                style={{
                                                    fontSize:'0.7rem'
                                                }}>{slide.oldPrice}</span>
                                            </div>
                                            <div className='flex items-center justify-center bg-danger text-white font-semibold rounded-lg shadow-xl px-2 py-1 w-20 absolute top-0 -right-10'>
                                                <span> -{slide.discount}% off </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        )

                    })
                }
                
            </div>
            <div className='border text-white text-2xl gap-3 flex items-center justify-center border-amber-100'>
                    <button className='border border-border rounded-2xl bg-surface text-textsecondary hover:text-textprimary hover:border-primary p-2'>
                        <IoIosArrowRoundBack />
                    </button>
                    <div className='flex gap-2'>
                        {
                            slides.map((_,idx)=><div className='h-2 rounded-full w-2 bg-surface p-1'></div>)
                        }
                    </div>
                    <button className='border border-border rounded-2xl bg-surface text-textsecondary hover:text-textprimary hover:border-primary p-2'>
                        <IoIosArrowRoundForward />
                    </button>
            </div>
        </div>
    )
}

export default HeroSlider
