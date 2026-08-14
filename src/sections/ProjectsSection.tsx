import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';

const projects = [
  {
    number: '01',
    name: 'Noir Intense',
    category: 'Collection Classique',
    col1_img1: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 500%22%3E%3Crect fill=%22%231a1a1a%22 width=%22400%22 height=%22500%22/%3E%3Ccircle cx=%22200%22 cy=%22250%22 r=%2280%22 fill=%22%22232323%22/%3E%3C/svg%3E',
    col1_img2: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 500%22%3E%3Crect fill=%22%231a1a1a%22 width=%22400%22 height=%22500%22/%3E%3Ccircle cx=%22200%22 cy=%22250%22 r=%2260%22 fill=%22%22333%22 opacity=%220.5%22/%3E%3C/svg%3E',
    col2_img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 600%22%3E%3Crect fill=%22%231a1a1a%22 width=%22400%22 height=%22600%22/%3E%3Crect x=%2275%22 y=%2275%22 width=%22250%22 height=%22450%22 fill=%22%22232323%22 rx=%2220%22/%3E%3C/svg%3E',
  },
  {
    number: '02',
    name: 'Blanc Crème',
    category: 'Édition Minimaliste',
    col1_img1: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 500%22%3E%3Crect fill=%22%23f5f5f5%22 width=%22400%22 height=%22500%22/%3E%3Ccircle cx=%22200%22 cy=%22250%22 r=%2280%22 fill=%22%23e8e8e8%22/%3E%3C/svg%3E',
    col1_img2: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 500%22%3E%3Crect fill=%22%23f5f5f5%22 width=%22400%22 height=%22500%22/%3E%3Ccircle cx=%22200%22 cy=%22250%22 r=%2260%22 fill=%22%23d0d0d0%22 opacity=%220.8%22/%3E%3C/svg%3E',
    col2_img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 600%22%3E%3Crect fill=%22%23f5f5f5%22 width=%22400%22 height=%22600%22/%3E%3Crect x=%2275%22 y=%2275%22 width=%22250%22 height=%22450%22 fill=%22%23e8e8e8%22 rx=%2220%22/%3E%3C/svg%3E',
  },
  {
    number: '03',
    name: 'Bleu Marine',
    category: 'Édition Aventure',
    col1_img1: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 500%22%3E%3Crect fill=%22%23001d4d%22 width=%22400%22 height=%22500%22/%3E%3Ccircle cx=%22200%22 cy=%22250%22 r=%2280%22 fill=%22%23003d7a%22/%3E%3C/svg%3E',
    col1_img2: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 500%22%3E%3Crect fill=%22%23001d4d%22 width=%22400%22 height=%22500%22/%3E%3Ccircle cx=%22200%22 cy=%22250%22 r=%2260%22 fill=%22%23005a99%22 opacity=%220.6%22/%3E%3C/svg%3E',
    col2_img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 600%22%3E%3Crect fill=%22%23001d4d%22 width=%22400%22 height=%22600%22/%3E%3Crect x=%2275%22 y=%2275%22 width=%22250%22 height=%22450%22 fill=%22%23003d7a%22 rx=%2220%22/%3E%3C/svg%3E',
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
          Collections
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
