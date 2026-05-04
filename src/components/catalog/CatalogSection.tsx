import { motion } from 'framer-motion'
import { useState } from 'react'
import products from '../../data/products.json'
import ProductCard from '../products/ProductCard'

export default function CatalogSection() {
    const [filter, setFilter] = useState('Semua')
    const categories = ['Semua', 'Seragam Dinas', 'Kemeja Formal', 'Batik']
    const filtered = filter === 'Semua' ? products : products.filter((p: any) => p.category === filter)
    return (
        <section id="catalog" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.18em] text-[#7a7a80] font-semibold">Koleksi</p>
                <h2 className="serif text-4xl text-[#2f3034] mt-2">E-Katalog</h2>
            </div>
            <div className="mb-6">
                <div className="flex gap-3 flex-wrap">
                    {categories.map(c => (
                        <button key={c} onClick={() => setFilter(c)} className={`px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors ${filter === c ? 'bg-primary border-primary text-white' : 'bg-white border-line-soft text-[#666a73] hover:bg-soft-gray'}`}>{c}</button>
                    ))}
                </div>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.08 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p: any) => (
                    <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <ProductCard product={p} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
