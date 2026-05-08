
export default function Contact() {
    return (
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.18em] text-[#7a7a80] font-semibold">Temui Kami</p>
                <h2 className="serif text-4xl text-[#2f3034] mt-2">Lokasi & Kontak</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="surface-card rounded-2xl p-7">
                    <p className="font-semibold text-[#2d2f35]">Alamat</p>
                    <a
                        href="https://maps.app.goo.gl/zAVui8bQE4TqXWndA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 text-primary  hover:underline focus-visible:underline outline-none"
                    >
                        Jl. Nusakambangan No.24, Pattunuang, Kec. Wajo, Kota Makassar, Sulawesi Selatan 90171
                    </a>
                    <p className="mt-6 font-semibold text-[#2d2f35]">Telepon</p>
                    <a href="https://wa.me/628134299955" target="_blank" rel="noreferrer" className="mt-1 text-primary hover:underline font-medium">0813-4299-3955</a>
                    <a href="https://wa.me/628124168192" target="_blank" rel="noreferrer" className="block text-primary hover:underline font-medium">0812-4168-3192</a>
                </div>
                <div>
                    <div className="w-full h-72 bg-[#eceef1] rounded-2xl border border-black/5 overflow-hidden shadow-[0_12px_26px_rgba(0,0,0,0.08)]">
                        <iframe
                            title="Rahman Textil & Taylor Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.4575634128244!2d119.41226236951942!3d-5.131025563946802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf02a668b3ddad%3A0x6d3ae7023d650c86!2sRahman%20Textil%20%26%20Taylor!5e0!3m2!1sen!2sus!4v1778229833750!5m2!1sen!2sus"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
