import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { Magnet } from '../components/Magnet';

export const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip bg-[#0C0C0C] relative">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
        <div className="flex justify-between w-full gap-8">
          {['Produits', 'À Propos', 'Boutique', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#D7E2EA] text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Heading */}
        <FadeIn delay={0.15} y={40} className="mt-6 sm:mt-4 md:-mt-5 overflow-hidden">
          <h1 className="hero-heading text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] font-black uppercase tracking-tight leading-none whitespace-nowrap w-full">
            PtitDetour
          </h1>
        </FadeIn>

        {/* Bottom Bar */}
        <FadeIn delay={0.35} y={20} className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-xs sm:text-sm md:text-base max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            Votre hydratation, votre connexion. Gourdes magnétiques innovantes.
          </p>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 sm:bottom-0 top-1/2 sm:top-auto sm:-translate-y-0 -translate-y-1/2">
        <Magnet padding={150} strength={3}>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600'%3E%3Crect fill='%230C0C0C' width='400' height='600'/%3E%3C/svg%3E"
            alt="PtitDetour Gourde Magnétique"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center"
            style={{ willChange: 'transform' }}
          />
        </Magnet>
      </FadeIn>
    </section>
  );
};
