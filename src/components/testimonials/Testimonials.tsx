import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const reviews = [
    { name: 'Rahmatullah R.', time: '3 bulan lalu', text: 'Pelayanan ramah, produk berkualitas, harga terjangkau. Semua seragam tersedia. Puas belanja di Rahman Textil.' },
    { name: 'Nurul Hikmah', time: '3 bulan lalu', text: 'Sangat baik, saya pelanggan tetap. Pilihan bahan lengkap dari standar sampai premium, harganya terjangkau.' },
    { name: 'Jumarniarini', time: '3 bulan lalu', text: 'Pelayanan ramah dan hasil jahitan rapi. Selalu kembali jika butuh seragam.' },
    { name: 'Husnawati', time: '3 bulan lalu', text: 'Pakaian, rok, celana jahitannya rapi. Pengiriman cepat dan layanan ramah.' },
    { name: 'Andi Hermansyah', time: '3 bulan lalu', text: 'Kualitas jahitan tak diragukan.' },
    { name: 'Darman Syah', time: '4 bulan lalu', text: 'Alhamdulillah, sangat bermanfaat.' },
    { name: 'Munir Bone', time: '3 bulan lalu', text: 'Bagus 👍' },
    { name: 'Yasiin Ramli', time: '3 bulan lalu', text: 'Terbaik 🔥🔥🔥' },
    { name: 'M. Adhan', time: '3 bulan lalu', text: 'EXCELLENT' },
    { name: 'Syamsul Alam', time: '2 tahun lalu', text: 'Tempatnya nyaman, servis baik.' }
]

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const trackRef = useRef<HTMLDivElement>(null)
    const slideRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        let animationFrame = 0
        let lastTimestamp = 0

        const step = (timestamp: number) => {
            const track = trackRef.current

            if (!track) {
                animationFrame = window.requestAnimationFrame(step)
                return
            }

            const delta = lastTimestamp ? timestamp - lastTimestamp : 0
            lastTimestamp = timestamp

            if (delta > 0) {
                track.scrollLeft += delta * 0.04

                const maxScrollLeft = track.scrollWidth - track.clientWidth

                if (track.scrollLeft >= maxScrollLeft - 1) {
                    track.scrollLeft = 0
                }

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

                if (nearestIndex !== activeIndex) {
                    setActiveIndex(nearestIndex)
                }
            }

            animationFrame = window.requestAnimationFrame(step)
        }

        animationFrame = window.requestAnimationFrame(step)

        return () => window.cancelAnimationFrame(animationFrame)
    }, [])

    return (
        <section className="py-16 md:py-20 bg-[#f5f6f8] border-y border-black/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-8">
                    <p className="text-sm uppercase tracking-[0.18em] text-[#7a7a80] font-semibold">Ulasan</p>
                    <h2 className="serif text-4xl text-[#2f3034] mt-2">Testimoni Pelanggan</h2>
                </div>

                <div ref={trackRef} className="overflow-x-auto no-scrollbar">
                    <div className="flex gap-6 pb-4">
                        {reviews.map((r, i) => {
                            const isActive = i === activeIndex

                            return (
                                <motion.div
                                    key={i}
                                    ref={(node) => {
                                        slideRefs.current[i] = node
                                    }}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                    className="shrink-0 w-[min(80vw,20rem)] sm:w-[min(42vw,19rem)] lg:w-[min(30vw,18rem)]"
                                >
                                    <div
                                        className={`h-full bg-white p-5 rounded-2xl border border-black/5 shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-all duration-500 ${isActive ? 'shadow-[0_18px_38px_rgba(0,0,0,0.12)]' : 'opacity-75'}`}
                                    >
                                        <div className="text-sm text-[#71757e]">{r.time}</div>
                                        <div className="mt-2 flex items-center gap-2 text-yellow-500" aria-hidden>
                                            {Array.from({ length: 5 }).map((_, s) => (
                                                <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-yellow-500">
                                                    <path d="M12 .587l3.668 7.431L23.327 9.6l-5.659 5.518L19.335 24 12 19.897 4.665 24l1.667-8.882L.673 9.6l7.659-1.582L12 .587z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <div className="mt-2 text-[#32343a]">“{r.text}”</div>
                                        <div className="mt-4 font-semibold text-[#27292e]">{r.name}</div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
