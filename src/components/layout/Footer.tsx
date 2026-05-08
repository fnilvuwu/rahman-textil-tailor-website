
const logo = new URL('../../data/public/logo.png', import.meta.url).href

export default function Footer() {
    return (
        <footer className="bg-[#f4f5f7] border-t border-black/5 py-10 mt-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
                <div>
                    <div className="flex items-center gap-3">
                        <div>
                            <div className="serif text-lg text-[#2d2f35]">Rahman Textil & Taylor</div>
                            <a
                                href="https://maps.app.goo.gl/zAVui8bQE4TqXWndA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 text-sm text-[#696d76] hover:text-primary hover:underline focus-visible:underline outline-none"
                            >
                                Jl. Nusakambangan No.24
                            </a>
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
                        <a href="https://wa.me/628134299955" target="_blank" rel="noreferrer" className="mt-2 block text-sm text-[#696d76] hover:text-primary">0813-4299-3955</a>
                        <a href="https://wa.me/628124168192" target="_blank" rel="noreferrer" className="block text-sm text-[#696d76] hover:text-primary">0812-4168-3192</a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-sm text-[#7a7e86]">© 2026 Rahman Textil & Taylor. Semua hak dilindungi.</div>
            <div className="text-center text-sm text-[#7a7e86]">
                Made by{' '}
                <a href="https://fnilvuwu.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    fnilvuwu
                </a>
            </div>
        </footer>
    )
}
