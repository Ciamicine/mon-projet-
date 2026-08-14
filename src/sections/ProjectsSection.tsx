import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';

const projects = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1_img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1_img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2_img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1_img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1_img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2_img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1_img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1_img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2_img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start center', 'end center'],
  });

  const totalCards = projects.length;
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [targetScale, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        opacity,
        top: `${index * 28}px`,
      }}
      className="sticky h-[85vh] flex items-center justify-center"
    >
      <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 w-full max-w-6xl">
        {/* Card Header */}
        <div className="flex justify-between items-start mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#D7E2EA] font-black uppercase" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {project.number}
            </h3>
            <div className="flex items-start gap-6 sm:gap-8">
              <span className="text-[#D7E2EA] uppercase text-xs sm:text-sm tracking-widest opacity-60 font-light pt-4">
                {project.category}
              </span>
              <h2 className="text-[#D7E2EA] font-black uppercase" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
                {project.name}
              </h2>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Image Grid */}
        <div className="flex gap-4 h-[clamp(300px,45vh,600px)]">
          {/* Left Column - 40% */}
          <div className="w-2/5 flex flex-col gap-4">
            {/* Top Image */}
            <img
              src={project.col1_img1}
              alt={`${project.name} preview 1`}
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover flex-1"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            {/* Bottom Image */}
            <img
              src={project.col1_img2}
              alt={`${project.name} preview 2`}
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover flex-1"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          {/* Right Column - 60% */}
          <div className="w-3/5">
            <img
              src={project.col2_img}
              alt={`${project.name} main`}
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  return (
    <section className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-32 px-5 sm:px-8 md:px-10 overflow-x-clip">
      {/* Heading */}
      <FadeIn delay={0} y={40} className="mb-20 sm:mb-24 md:mb-32">
        <h2 className="hero-heading text-center font-black uppercase" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Project
        </h2>
      </FadeIn>

      {/* Project Cards */}
      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
