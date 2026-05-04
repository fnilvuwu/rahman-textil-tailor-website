import CatalogSection from '../components/catalog/CatalogSection'
import Contact from '../components/contact/Contact'
import CTASection from '../components/cta/CTASection'
import FloatingWhatsApp from '../components/floating/FloatingWhatsApp'
import Gallery from '../components/gallery/Gallery'
import HeroSection from '../components/hero/HeroSection'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import ProductShowcase from '../components/products/ProductShowcase'
import Testimonials from '../components/testimonials/Testimonials'
import WhyChoose from '../components/why/WhyChoose'

export default function Home() {
    return (
        <div className="antialiased section-shell">
            <Navbar />
            <main className="pt-[1px]">
                <HeroSection />
                <ProductShowcase />
                <CatalogSection />
                <WhyChoose />
                <Gallery />
                <Testimonials />
                <CTASection />
                <Contact />
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    )
}
