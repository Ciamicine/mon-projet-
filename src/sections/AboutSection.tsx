import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { AnimatedText } from '../components/AnimatedText';

export const AboutSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-x-clip">
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            À Propos
          </h2>
        </FadeIn>

        {/* Animated Paragraph */}
        <div className="max-w-[560px] text-[#D7E2EA] font-medium text-center leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}>
          <AnimatedText
            text="PtitDetour crée des gourdes magnétiques innovantes conçues pour votre quotidien. Avec un système magnétique puissant, une isolation thermique exceptionnelle et des matériaux écologiques, nos gourdes vous accompagnent partout. Restez hydraté, restez connecté."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed"
          />
        </div>

        {/* Contact Button */}
        <div className="gap-16 sm:gap-20 md:gap-24">
          <ContactButton />
        </div>
      </div>
    </section>
  );
};
