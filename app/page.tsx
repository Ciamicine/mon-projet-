import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProductGallery from '@/components/ProductGallery'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductGallery />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  )
}
