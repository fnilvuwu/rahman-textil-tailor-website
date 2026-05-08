import { useEffect, useState } from 'react'

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
    const [isZoomOpen, setIsZoomOpen] = useState(false)

    const openZoom = () => setIsZoomOpen(true)
    const closeZoom = () => setIsZoomOpen(false)

    useEffect(() => {
        if (!isZoomOpen) {
            return
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsZoomOpen(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isZoomOpen])

    return (
        <>
            <div className="flex flex-col">
                <button
                    type="button"
                    onClick={openZoom}
                    aria-label={`Zoom image of ${product.name}`}
                    className="h-56 w-full overflow-hidden bg-[#f1f2f4] p-0 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#be0f0f]"
                >
                    <img
                        src={imageSrc}
                        alt={product.name}
                        className="w-full h-full object-contain object-center"
                        loading="lazy"
                    />
                </button>
                <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex items-start gap-3">
                            <h3 className="text-xl font-semibold text-[#2c2d31] flex-1 min-w-0 leading-snug break-words">{product.name}</h3>
                            {product.tag && <span className="text-xs bg-[#f9eed5] text-[#7c5a12] px-2.5 py-1 rounded-full font-medium shrink-0 whitespace-nowrap self-start">{product.tag}</span>}
                        </div>
                        <p className="text-sm text-[#676b74] mt-2 leading-relaxed">{product.description}</p>
                    </div>
                    <div className="mt-4">
                        <a href="https://wa.me/6281342993955" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-[#be0f0f] transition-colors">Pesan via WhatsApp</a>
                    </div>
                </div>
            </div>
            {isZoomOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Preview ${product.name}`}
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
                            src={imageSrc}
                            alt={product.name}
                            className="max-h-[85vh] max-w-[90vw] rounded-lg bg-white object-contain shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </>
    )
}
