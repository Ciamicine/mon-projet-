import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureStrip from './components/FeatureStrip'
import ProductShowcase from './components/ProductShowcase'
import LifestyleGallery from './components/LifestyleGallery'
import MagneticFeature from './components/MagneticFeature'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureStrip />
      <ProductShowcase />
      <LifestyleGallery />
      <MagneticFeature />
      <Benefits />
      <Testimonials />
      <CTA />
      <ProductCard />
      <Footer />
    </>
  )
}
