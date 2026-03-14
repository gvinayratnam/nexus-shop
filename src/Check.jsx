import { useEffect, useRef, useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const SLIDES = [
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

const REAL_COUNT = SLIDES.length
const extended   = [SLIDES[REAL_COUNT - 1], ...SLIDES, SLIDES[0]]

const HeroSlider = () => {
  const [current, setCurrent]           = useState(1)
  const [isTransition, setIsTransition] = useState(false)
  const [progress, setProgress]         = useState(0)

  const currentRef   = useRef(1)      // ← always holds latest current
  const isAnimating  = useRef(false)
  const autoplayRef  = useRef(null)
  const progressRef  = useRef(null)

  // Always keep currentRef in sync with current state
  const updateCurrent = (val) => {
    const resolved = typeof val === 'function' ? val(currentRef.current) : val
    currentRef.current = resolved
    setCurrent(resolved)
  }

  // ── Navigation ──
  const goTo = (idx) => {
    if (isAnimating.current) return
    isAnimating.current = true
    setIsTransition(true)
    updateCurrent(idx)
  }

  const next = () => {
    clearInterval(autoplayRef.current)
    goTo(currentRef.current + 1)
    startAutoplay()
  }

  const prev = () => {
    clearInterval(autoplayRef.current)
    goTo(currentRef.current - 1)
    startAutoplay()
  }

  // ── Silent clone jump — uses ref so never stale ──
  const handleTransitionEnd = () => {
    const c = currentRef.current   // ← always fresh value

    if (c === REAL_COUNT + 1) {
      setIsTransition(false)
      updateCurrent(1)
    } else if (c === 0) {
      setIsTransition(false)
      updateCurrent(REAL_COUNT)
    }

    isAnimating.current = false
  }

  // Re-enable transition after silent jump
  useEffect(() => {
    if (!isTransition) {
      const t = setTimeout(() => setIsTransition(true), 50)
      return () => clearTimeout(t)
    }
  }, [isTransition])

  // ── Progress bar ──
  const startProgress = () => {
    clearInterval(progressRef.current)
    setProgress(0)
    let p = 0
    progressRef.current = setInterval(() => {
      p += 1
      setProgress(p)
      if (p >= 100) clearInterval(progressRef.current)
    }, 50)
  }

  // ── Autoplay ──
  const startAutoplay = () => {
    clearInterval(autoplayRef.current)
    autoplayRef.current = setInterval(() => {
      if (isAnimating.current) return   // ← guard autoplay too
      isAnimating.current = true
      setIsTransition(true)
      updateCurrent(prev => prev + 1)
    }, 5000)
  }

  useEffect(() => { startProgress() }, [current])

  useEffect(() => {
    startAutoplay()
    return () => {
      clearInterval(autoplayRef.current)
      clearInterval(progressRef.current)
    }
  }, [])

  // ── Dot active index ──
  const dotIndex =
    current === 0              ? REAL_COUNT - 1 :
    current === REAL_COUNT + 1 ? 0              :
    current - 1

  return (
    <div className="relative overflow-hidden" style={{ height: 'calc(100vh - 64px)' }}>

      {/* ── Slides Wrapper ── */}
      <div
        onTransitionEnd={handleTransitionEnd}
        className="flex h-full"
        style={{
          transform:  `translateX(-${current * 100}%)`,
          transition: isTransition ? 'transform 0.85s cubic-bezier(0.77,0,0.18,1)' : 'none',
        }}
      >
        {extended.map((slide, idx) => (
          <div
            key={idx}
            className="min-w-full h-full flex items-center relative overflow-hidden bg-bg"
          >
            {/* Background glow */}
            <div
              className="absolute pointer-events-none rounded-full"
              style={{
                width: 700, height: 700,
                top: '50%', left: '38%',
                transform: 'translate(-50%, -50%)',
                background: `radial-gradient(circle, ${slide.glow} 0%, transparent 65%)`,
              }}
            />

            {/* Content grid */}
            <div
              className="max-w-7xl mx-auto px-6 w-full grid items-center relative z-10"
              style={{ gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem' }}
            >
              {/* ── Left ── */}
              <div>
                {/* Tag */}
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary rounded-full px-4 py-1.5 text-xs font-semibold mb-6 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {slide.tag}
                </div>

                {/* Title */}
                <h1
                  className="font-black leading-tight mb-5"
                  style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', lineHeight: 1.06 }}
                >
                  <span className="block text-textprimary">{slide.title[0]}</span>
                  <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {slide.title[1]}
                  </span>
                  <span className="block text-textprimary">{slide.title[2]}</span>
                </h1>

                {/* Description */}
                <p
                  className="text-textsecondary leading-relaxed mb-8 max-w-md"
                  style={{ fontSize: '1rem', lineHeight: 1.75 }}
                >
                  {slide.desc}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap mb-10">
                  <button
                    className="flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-xl transition-all hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg,#7C3AED,#9f5cf7)', boxShadow: '0 8px 24px rgba(124,58,237,0.3)' }}
                  >
                    Explore Products <FiArrowRight />
                  </button>
                  <button className="px-7 py-3 rounded-xl font-semibold border border-border text-textprimary hover:border-primary transition-all hover:-translate-y-0.5 bg-transparent">
                    View Deals
                  </button>
                </div>

                {/* Stats */}
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

              {/* ── Right ── */}
              <div className="flex items-center justify-center">
                <div className="relative" style={{ width: 340, height: 380 }}>

                  {/* Glow behind image */}
                  <div
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      inset: -18, zIndex: 0,
                      background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
                    }}
                  />

                  {/* Product image */}
                  <img
                    src={slide.img}
                    alt={slide.name}
                    loading="lazy"
                    className="relative w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    style={{ zIndex: 1, filter: 'drop-shadow(0 24px 48px rgba(124,58,237,0.25))' }}
                  />

                  {/* Price badge — bottom left */}
                  <div
                    className="absolute bg-surface border border-border rounded-2xl shadow-xl"
                    style={{ bottom: 30, left: -20, zIndex: 2, padding: '0.75rem 1rem', minWidth: 150 }}
                  >
                    <div className="text-textsecondary mb-0.5" style={{ fontSize: '0.68rem' }}>{slide.name}</div>
                    <span className="font-bold text-secondary" style={{ fontSize: '1.3rem' }}>{slide.price}</span>
                    <span className="text-textsecondary line-through ml-1" style={{ fontSize: '0.7rem' }}>{slide.oldPrice}</span>
                  </div>

                  {/* Discount badge — top right */}
                  <div
                    className="absolute bg-danger text-white font-bold rounded-xl shadow-lg"
                    style={{ top: 20, right: -10, zIndex: 2, fontSize: '0.75rem', padding: '0.4rem 0.75rem' }}
                  >
                    -{slide.discount}% OFF
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Controls ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        <button
          onClick={prev}
          className="w-9 h-9 flex items-center justify-center bg-surface border border-border rounded-xl text-textsecondary hover:border-primary hover:text-textprimary transition-all"
        >
          <FiArrowLeft />
        </button>

        {/* Dots */}
        <div className="flex gap-2 items-center">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => { clearInterval(autoplayRef.current); goTo(i + 1); startAutoplay() }}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width:      dotIndex === i ? 24 : 8,
                background: dotIndex === i ? '#7C3AED' : 'var(--color-border)',
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-9 h-9 flex items-center justify-center bg-surface border border-border rounded-xl text-textsecondary hover:border-primary hover:text-textprimary transition-all"
        >
          <FiArrowRight />
        </button>
      </div>

      {/* ── Progress bar ── */}
      <div
        className="absolute bottom-0 left-0 h-0.5 z-20 bg-gradient-to-r from-primary to-secondary"
        style={{ width: `${progress}%`, transition: 'width 50ms linear' }}
      />

    </div>
  )
}

export default HeroSlider