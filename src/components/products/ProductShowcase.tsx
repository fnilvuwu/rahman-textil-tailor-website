import { motion } from 'framer-motion'
import products from '../../data/products.json'
import ProductCard from './ProductCard'

export default function ProductShowcase() {
    const featured = products.slice(0, 3)
    return (
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-20">
            <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.18em] text-[#7a7a80] font-semibold">Produk Pilihan</p>
                <h2 className="serif text-4xl text-[#2f3034] mt-2">Produk Unggulan</h2>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featured.map(p => (
                    <motion.div key={p.id} whileHover={{ scale: 1.02, y: -4 }} className="surface-card rounded-2xl overflow-hidden">
                        <ProductCard product={p} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
