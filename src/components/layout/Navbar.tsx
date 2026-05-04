import { useState } from 'react'
import { Link } from 'react-router-dom'

const logo = new URL('../../data/public/logo.png', import.meta.url).href

const navLinks = [
    { label: 'Katalog', href: '#catalog' },
    { label: 'Mengapa Kami', href: '#why' },
    { label: 'Kontak', href: '#contact' }
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 w-full z-50 border-b border-line-soft bg-white/95 shadow-[0_3px_18px_rgba(0,0,0,0.04)] backdrop-blur-sm">
            <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                    <img src={logo} alt="Rahman Textil & Taylor" className="h-9 md:h-11 w-auto max-w-[170px] sm:max-w-[230px] object-contain" />
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-ink/90 font-medium hover:text-primary transition-colors">
                            {link.label}
                        </a>
                    ))}
                    <a href="tel:081342993955" className="px-6 py-2.5 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                        Hubungi
                    </a>
                </div>

                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-line-soft text-ink"
                    aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? 'X' : '☰'}
                </button>
            </nav>

            {isOpen && (
                <div className="md:hidden border-t border-line-soft bg-white px-4 py-4 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block rounded-lg px-3 py-2 text-ink hover:bg-soft-gray"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="tel:081342993955"
                        className="mt-2 block rounded-lg bg-primary px-3 py-2 text-white text-center"
                        onClick={() => setIsOpen(false)}
                    >
                        Hubungi
                    </a>
                </div>
            )}
        </header>
    )
}
