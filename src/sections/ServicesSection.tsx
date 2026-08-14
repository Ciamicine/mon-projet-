import { FadeIn } from '../components/FadeIn';

const services = [
  {
    number: '01',
    title: '3D Modeling',
    description: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    title: 'Rendering',
    description: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    title: 'Motion Design',
    description: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    title: 'Branding',
    description: 'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    title: 'Web Design',
    description: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export const ServicesSection = () => {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-x-clip">
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Services
        </h2>
      </FadeIn>

      {/* Services List */}
      <div className="max-w-5xl mx-auto">
        {services.map((service, index) => (
          <FadeIn
            key={index}
            delay={index * 0.1}
            y={20}
            className="flex items-start gap-8 sm:gap-12 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-b-0"
          >
            {/* Number */}
            <div className="flex-shrink-0" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              <span className="text-[#0C0C0C] font-black uppercase leading-none">{service.number}</span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h3 className="text-[#0C0C0C] font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {service.title}
              </h3>
              <p className="text-[#0C0C0C] font-light opacity-60 leading-relaxed max-w-2xl" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
