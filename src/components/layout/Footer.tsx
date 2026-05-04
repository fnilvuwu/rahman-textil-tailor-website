
const logo = new URL('../../data/public/logo.png', import.meta.url).href

export default function Footer() {
    return (
        <footer className="bg-[#f4f5f7] border-t border-black/5 py-10 mt-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
                <div>
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Rahman Textil & Taylor" className="h-12 object-contain" />
                        <div>
                            <div className="serif text-lg text-[#2d2f35]">Rahman Textil & Taylor</div>
                            <div className="text-sm text-[#696d76]">Jl. Nusakambangan No. 24, Makassar</div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div>
                        <div className="font-semibold text-[#2d2f35]">Quick Links</div>
                        <ul className="mt-2 text-sm text-[#696d76] space-y-1">
                            <li><a href="#" className="hover:text-primary">Beranda</a></li>
                            <li><a href="#catalog" className="hover:text-primary">Katalog</a></li>
                            <li><a href="#contact" className="hover:text-primary">Kontak</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold text-[#2d2f35]">Kontak</div>
                        <div className="mt-2 text-sm text-[#696d76]">0813-4299-3955</div>
                        <div className="text-sm text-[#696d76]">0812-4168-3192</div>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-sm text-[#7a7e86]">© 2026 Rahman Textil & Taylor. Semua hak dilindungi.</div>
        </footer>
    )
}
