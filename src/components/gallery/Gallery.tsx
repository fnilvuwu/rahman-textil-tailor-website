import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const imgs = [
    new URL('../../data/public/model_kemeja_putih_kancing_hitam-no_bg.png', import.meta.url).href,
    new URL('../../data/public/model_baju_khaki-no_bg.png', import.meta.url).href,
    new URL('../../data/public/model_baju_korpri-no_bg.png', import.meta.url).href,
    new URL('../../data/public/model_baju_pgri-no_bg.png', import.meta.url).href,
    new URL('../../data/public/model_kemeja_kemenag_style_1-no_bg.png', import.meta.url).href,
    new URL('../../data/public/model_kemeja_kemenag_style_2-no_bg.png', import.meta.url).href,
    new URL('../../data/public/model_kemeja_putih_kancing_putih-no_bg.png', import.meta.url).href,
]

const loopedImgs = [...imgs, ...imgs, ...imgs]

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [zoomSrc, setZoomSrc] = useState<string | null>(null)
    const [zoomAlt, setZoomAlt] = useState('')
    const trackRef = useRef<HTMLDivElement>(null)
    const slideRefs = useRef<(HTMLDivElement | null)[]>([])
    const isInitializedRef = useRef(false)

    const openZoom = (src: string, alt: string) => {
        setZoomSrc(src)
        setZoomAlt(alt)
    }

    const closeZoom = () => {
        setZoomSrc(null)
        setZoomAlt('')
    }

    useEffect(() => {
        const track = trackRef.current

        if (!track) {
            return
        }

        const getCopyWidth = () => {
            const firstSlide = slideRefs.current[0]
            const middleSlide = slideRefs.current[imgs.length]

            if (!firstSlide || !middleSlide) {
                return 0
            }

            return middleSlide.offsetLeft - firstSlide.offsetLeft
        }

        const updateActiveIndex = () => {
            const trackRect = track.getBoundingClientRect()
            const centerX = trackRect.left + trackRect.width / 2
            let nearestIndex = 0
            let nearestDistance = Number.POSITIVE_INFINITY

            slideRefs.current.forEach((slide, index) => {
                if (!slide) {
                    return
                }

                const slideRect = slide.getBoundingClientRect()
                const slideCenterX = slideRect.left + slideRect.width / 2
                const distance = Math.abs(centerX - slideCenterX)

                if (distance < nearestDistance) {
                    nearestDistance = distance
                    nearestIndex = index
                }
            })

            setActiveIndex(nearestIndex % imgs.length)
        }

        const handleScroll = () => {
            window.requestAnimationFrame(updateActiveIndex)
        }

        track.addEventListener('scroll', handleScroll, { passive: true })

        if (!isInitializedRef.current) {
            const middleSlide = slideRefs.current[imgs.length]

            if (middleSlide) {
                track.scrollLeft = middleSlide.offsetLeft - (track.clientWidth - middleSlide.offsetWidth) / 2
                updateActiveIndex()
                isInitializedRef.current = true
            }
        }

        const timer = window.setInterval(() => {
            const slide = slideRefs.current[0]

            if (!slide) {
                return
            }

            const step = slide.offsetWidth + 24
            const copyWidth = getCopyWidth()

            if (copyWidth > 0 && track.scrollLeft >= copyWidth * 2 - step / 2) {
                track.scrollLeft -= copyWidth
            }

            track.scrollBy({ left: step, behavior: 'smooth' })
        }, 3500)

        return () => {
            window.clearInterval(timer)
            track.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        if (!zoomSrc) {
            return
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeZoom()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [zoomSrc])

    return (
        <>
            <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
                <div className="mb-8">
                    <p className="text-sm uppercase tracking-[0.18em] text-[#7a7a80] font-semibold">Portofolio</p>
                    <h2 className="serif text-4xl text-[#2f3034] mt-2">Galeri</h2>
                </div>
                <div
                    ref={trackRef}
                    className="mx-auto max-w-[calc(2*20rem+1.5rem)] overflow-x-auto no-scrollbar snap-x snap-mandatory lg:max-w-[calc(3*20rem+3rem)]"
                >
                    <div className="flex gap-6 pb-4">
                        {loopedImgs.map((src, idx) => {
                            const isActive = idx % imgs.length === activeIndex
                            const altText = `Model portofolio ${idx % imgs.length + 1}`

                            return (
                                <motion.div
                                    key={`${idx}-${src}`}
                                    ref={(node) => {
                                        slideRefs.current[idx] = node
                                    }}
                                    initial={{ opacity: 0, y: 18, scale: 0.96 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.45, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                    className="shrink-0 w-[min(80vw,20rem)] sm:w-[min(42vw,20rem)] lg:w-[calc((100%-3rem)/3)] snap-center"
                                >
                                    <button
                                        type="button"
                                        onClick={() => openZoom(src, altText)}
                                        aria-label={`Zoom ${altText}`}
                                        className={`w-full overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#be0f0f] cursor-zoom-in ${isActive ? 'scale-[1.04] shadow-[0_18px_38px_rgba(0,0,0,0.12)]' : 'opacity-75'}`}
                                    >
                                        <img
                                            src={src}
                                            alt={altText}
                                            className="w-full aspect-[4/5] object-contain object-center bg-white"
                                            loading="lazy"
                                        />
                                    </button>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
            {zoomSrc && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label={zoomAlt || 'Preview portofolio'}
                    onClick={closeZoom}
                >
                    <div className="relative" onClick={(event) => event.stopPropagation()}>
                        <button
                            type="button"
                            onClick={closeZoom}
                            className="absolute right-2 top-2 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-[#2c2d31] shadow hover:bg-white transition-colors"
                        >
                            Close
                        </button>
                        <img
                            src={zoomSrc}
                            alt={zoomAlt || 'Preview portofolio'}
                            className="max-h-[85vh] max-w-[90vw] rounded-lg bg-white object-contain shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </>
    )
}
