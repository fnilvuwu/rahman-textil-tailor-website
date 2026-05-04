import { motion } from 'framer-motion'
import React from 'react'

const strengths = [
    {
        title: 'Kualitas Terbaik',
        desc: 'Bahan pilihan & jahitan berstandar tinggi.',
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3l7 3v5c0 4.5-3 8.4-7 10-4-1.6-7-5.5-7-10V6l7-3z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        )
    },
    {
        title: 'Desain Profesional',
        desc: 'Desain modern, rapi, dan nyaman dipakai.',
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M4 20c0-3.5 3.2-6 8-6s8 2.5 8 6" />
            </svg>
        )
    },
    {
        title: 'Produksi Tepat Waktu',
        desc: 'Proses cepat sesuai kebutuhan instansi.',
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 8l8-4 8 4" />
                <path d="M4 8v8l8 4 8-4V8" />
                <path d="M12 4v16" />
            </svg>
        )
    },
    {
        title: 'Layanan Terpercaya',
        desc: 'Melayani sekolah, kantor, dan perusahaan.',
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M8 12l4 4 4-4" />
                <path d="M4 8h6a2 2 0 012 2v0a2 2 0 002 2h6" />
                <path d="M4 16h5a3 3 0 003-3v0a3 3 0 013-3h5" />
            </svg>
        )
    }
]

const Hero: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-[#efeff1]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,#ffffff_0%,#f1f1f3_55%,#ececee_100%)]" />
            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 pt-28 md:pt-32 pb-28 md:pb-36">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid gap-8 items-center md:grid-cols-12">
                    <div className="md:col-span-5">
                        <p className="text-base sm:text-[1.35rem] font-semibold uppercase tracking-wide text-[#ff0000]">Rahman Textil & Taylor</p>
                        <h1 className="mt-4 serif text-[clamp(2.2rem,7vw,4.35rem)] leading-[1.02] text-[#2f3034]">Solusi Seragam & Pakaian Dinas Berkualitas</h1>
                        <p className="mt-6 text-lg text-[#666972] max-w-xl">Dipercaya oleh instansi, sekolah, dan perusahaan di Makassar</p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <a href="#catalog" className="text-center bg-white text-[#1f2024] px-7 py-3.5 rounded-xl font-semibold border border-black/5 shadow-sm hover:bg-[#f8f8f8] transition-colors">Lihat Katalog</a>
                            <a href="https://wa.me/6281342993955" target="_blank" rel="noreferrer" className="text-center bg-primary text-white px-7 py-3.5 rounded-xl font-semibold shadow-[0_10px_22px_rgba(214,15,15,0.28)] hover:bg-[#be0f0f] transition-colors">Pesan via WhatsApp</a>
                        </div>
                    </div>

                    <div className="md:col-span-7 relative">
                        <div className="absolute -right-24 top-6 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,#ffffff_0%,#ececec_70%)]" />
                        <div className="absolute -right-8 top-16 h-[320px] w-[320px] rounded-tl-[180px] rounded-bl-[180px] bg-[#e8e8ea] opacity-75" />
                        <img
                            src="/src/data/public/model_baju_khaki-hero.png"
                            alt="Model seragam khaki"
                            className="relative z-10 mx-auto w-full max-w-[620px] object-contain drop-shadow-[0_20px_34px_rgba(0,0,0,0.15)]"
                        />
                    </div>
                </motion.div>

                <div className="absolute left-1/2 bottom-6 z-20 w-[92%] -translate-x-1/2 rounded-2xl bg-white/96 border border-black/5 shadow-[0_16px_38px_rgba(0,0,0,0.11)] p-4 sm:p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        {strengths.map((item) => (
                            <div key={item.title} className="flex items-start gap-3 sm:gap-4 px-2 sm:px-3 py-2">
                                <div className="mt-1 h-11 w-11 rounded-full bg-[#f7efef] text-primary flex items-center justify-center flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[1.05rem] text-[#2f3034]">{item.title}</h3>
                                    <p className="mt-1 text-sm text-[#686b74]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
