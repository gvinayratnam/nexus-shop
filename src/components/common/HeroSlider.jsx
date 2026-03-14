import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

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
        <div className='relative ' style={{ height: 'calc(100vh-64px)' }}>
            {/* slides wrapper */}
            <div>
                {
                    extended.map((slide, idx) => {
                        return (
                            <div key={idx} className='h-full'>
                                {/* background glow */}
                                {/* Content grid */}
                                <div className='max-w-7xl h-full w-full mx-auto'>
                                    {/* left */}
                                    <div>
                                        {/* tag */}
                                        <div className='text-primary'>
                                            <span></span>
                                            {slide.tag}
                                        </div>
                                        <h1>
                                            {
                                                slide.title.map(title => {
                                                    return (
                                                        <span>{title}</span>
                                                    )
                                                })
                                            }
                                        </h1>
                                        <p>{slide.desc}</p>

                                        <div>
                                            <button>
                                                Explore Products
                                                <FaArrowRightLong />
                                            </button>

                                            <button> View Deals</button>
                                        </div>

                                        <div>
                                            {
                                                [
                                                    { num: '194', suffix: '+', label: 'Products' },
                                                    { num: '12', suffix: '+', label: 'Categories' },
                                                    { num: '4.8', suffix: '★', label: 'Avg Rating' },
                                                ].map(({ num, suffix, label }) => {
                                                    <div>
                                                        <h3><span>{num}</span><span>{suffix}</span></h3>
                                                        <p>{label}</p>
                                                    </div>
                                                })
                                            }
                                        </div>


                                    </div>
                                    {/* right  */}
                                        
                                    <div>
                                        {/* glow */}
                                        <div className='relative'>
                                            <div>

                                            </div>
                                            <div>

                                            </div>
                                            <div>
                                                <img src={slide.img} alt={slide.name} />
                                            </div>
                                            <div>   

                                            </div>
                                            <div>
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
        </div>
    )
}

export default HeroSlider
