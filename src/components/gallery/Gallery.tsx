import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const imgs = [
    new URL('../../data/public/model_kameja_putih.png', import.meta.url).href,
    new URL('../../data/public/model_baju_khaki.png', import.meta.url).href,
    new URL('../../data/public/model_baju_korpri.png', import.meta.url).href,
    new URL('../../data/public/model_baju_pgri.png', import.meta.url).href,
]

const loopedImgs = [...imgs, ...imgs, ...imgs]

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(0)
    const trackRef = useRef<HTMLDivElement>(null)
    const slideRefs = useRef<(HTMLDivElement | null)[]>([])
    const isInitializedRef = useRef(false)

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

    return (
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.18em] text-[#7a7a80] font-semibold">Portofolio</p>
                <h2 className="serif text-4xl text-[#2f3034] mt-2">Galeri</h2>
            </div>
            <div ref={trackRef} className="overflow-x-auto no-scrollbar">
                <div className="flex gap-6 pb-4">
                    {loopedImgs.map((src, idx) => {
                        const isActive = idx % imgs.length === activeIndex

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
                                className="shrink-0 w-[min(80vw,20rem)] sm:w-[min(42vw,20rem)] lg:w-[calc((100%-3rem)/3)]"
                            >
                                <div
                                    className={`overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-500 ${isActive ? 'scale-[1.04] shadow-[0_18px_38px_rgba(0,0,0,0.12)]' : 'opacity-75'}`}
                                >
                                    <img src={src} alt={`galeri-${idx % imgs.length}`} className="w-full aspect-[4/5] object-contain bg-white" loading="lazy" />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
