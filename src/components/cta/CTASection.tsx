
export default function CTASection() {
    return (
        <section className="py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="rounded-3xl border border-black/5 bg-[linear-gradient(130deg,#fff_0%,#f6f7f9_100%)] shadow-[0_16px_36px_rgba(0,0,0,0.08)] p-8 md:p-12 text-center">
                    <p className="text-sm uppercase tracking-[0.18em] text-[#7a7a80] font-semibold">Konsultasi Gratis</p>
                    <h2 className="serif text-4xl text-[#2f3034] mt-2">Siap Membuat Seragam Anda?</h2>
                    <p className="mt-3 text-[#666a73]">Hubungi kami sekarang untuk konsultasi dan penawaran harga terbaik.</p>
                    <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                        <a href="https://wa.me/6281342993955" className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#be0f0f] transition-colors">WhatsApp</a>
                        <a href="tel:081342993955" className="border border-line-soft text-[#2e3035] px-6 py-3 rounded-xl font-semibold hover:bg-[#f1f2f4] transition-colors">Call</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
