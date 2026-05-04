import { motion } from 'framer-motion'

type Product = {
    id: string,
    name: string,
    category: string,
    img: string,
    tag?: string,
    description?: string
}

const resolveAssetUrl = (assetPath: string) => {
    if (/^https?:\/\//.test(assetPath)) {
        return assetPath
    }

    return new URL(`../../${assetPath.replace(/^\/src\//, '')}`, import.meta.url).href
}

export default function ProductCard({ product }: { product: Product }) {
    const imageSrc = resolveAssetUrl(product.img)

    return (
        <div className="flex flex-col">
            <div className="h-56 overflow-hidden bg-[#f1f2f4]">
                <motion.img src={imageSrc} alt={product.name} className="w-full h-full object-cover" whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} loading="lazy" />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-[#2c2d31]">{product.name}</h3>
                        {product.tag && <span className="text-xs bg-[#f9eed5] text-[#7c5a12] px-2.5 py-1 rounded-full font-medium">{product.tag}</span>}
                    </div>
                    <p className="text-sm text-[#676b74] mt-2 leading-relaxed">{product.description}</p>
                </div>
                <div className="mt-4">
                    <a href="https://wa.me/6281342993955" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-[#be0f0f] transition-colors">Pesan via WhatsApp</a>
                </div>
            </div>
        </div>
    )
}
