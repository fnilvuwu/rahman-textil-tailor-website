import { motion } from 'framer-motion'

const items = [
    {
        title: 'Bahan Berkualitas',
        desc: 'Material pilihan untuk kenyamanan dan daya tahan.',
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3l7 3v5c0 4.5-3 8.4-7 10-4-1.6-7-5.5-7-10V6l7-3z" />
            </svg>
        )
    },
    {
        title: 'Jahitan Rapi & Presisi',
        desc: 'Standar produksi profesional dengan kontrol kualitas.',
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 12h16" />
                <path d="M12 4v16" />
                <circle cx="12" cy="12" r="8" />
            </svg>
        )
    },
    {
        title: 'Bisa Custom Ukuran (S–4XL)',
        desc: 'Layanan penyesuaian ukuran sesuai kebutuhan instansi.',
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 8l8-4 8 4" />
                <path d="M4 8v8l8 4 8-4V8" />
            </svg>
        )
    },
    {
        title: 'Pengalaman & Terpercaya',
        desc: 'Berkecimpung lama, dipercaya banyak klien di Makassar.',
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M7 13l3 3 7-7" />
                <path d="M12 2l8 4v6c0 5-3.5 9.2-8 10-4.5-.8-8-5-8-10V6l8-4z" />
            </svg>
        )
    }
]

export default function WhyChoose() {
    return (
        <section id="why" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.18em] text-[#7a7a80] font-semibold">Keunggulan</p>
                <h2 className="serif text-4xl text-[#2f3034] mt-2">Mengapa Memilih Kami</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {items.map((it, idx) => (
                    <motion.div key={it.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.12 }} className="surface-card p-6 rounded-2xl">
                        <div className="h-12 w-12 rounded-full bg-[#f8efef] text-primary flex items-center justify-center mb-4">
                            {it.icon}
                        </div>
                        <h3 className="font-semibold text-xl text-[#2d2e32]">{it.title}</h3>
                        <p className="mt-2 text-sm text-[#676b74]">{it.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
