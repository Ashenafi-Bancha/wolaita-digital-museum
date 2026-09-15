import type { FC } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: FC<HeroProps> = ({ title, subtitle, image, ctaText, ctaLink = "/history" }) => {
  const { t } = useLanguage();
  const heading = title || t('hero.title');
  const description = subtitle || t('hero.subtitle');
  const primaryCta = ctaText || t('hero.cta');
  
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center -mt-24">
      <div className="absolute inset-0 z-0">
        <img fetchpriority="high"
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-50 mb-6 tracking-tight leading-tight drop-shadow-2xl sm:text-5xl"
        >
          {heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-stone-200 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to={ctaLink}
            className="group inline-flex items-center gap-3 px-10 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            {primaryCta}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/history"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-transparent backdrop-blur-sm text-stone-100 rounded-lg transition-all duration-300 font-semibold text-lg border-2 border-stone-300 hover:border-stone-100 hover:bg-white/10 shadow-lg transform hover:-translate-y-1"
          >
            {t('hero.history')}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-stone-300 animate-bounce"
      >
        <ArrowDown size={32} />
      </motion.div>

      <style>{`
        @keyframes slow-zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;
