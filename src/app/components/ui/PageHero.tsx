import type { FC, ReactNode } from 'react';
import { motion } from 'motion/react';
import DingguazaStripe from './DingguazaStripe';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  badge?: string;
  icon?: ReactNode;
  children?: ReactNode;
  compact?: boolean;
  className?: string;
  titleClassName?: string;
}

const PageHero: FC<PageHeroProps> = ({
  title,
  subtitle,
  image,
  imageAlt,
  badge,
  icon,
  children,
  compact = false,
  className = '',
  titleClassName = '',
}) => {
  return (
    <section
      className={`relative isolate flex items-center justify-center overflow-hidden bg-stone-950 ${
        compact ? 'min-h-[340px] py-24 md:py-28' : 'min-h-[420px] py-28 md:py-36'
      } ${className}`}
    >
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt ?? title}
            className="absolute inset-0 h-full w-full scale-105 object-cover object-center animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/88 via-stone-950/68 to-stone-950/92" />
        </>
      ) : (
        <div className="absolute inset-0 gifaataa-hero-bg" aria-hidden="true" />
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(242,201,76,0.08),transparent_50%)]" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          {badge && (
            <div className="badge-wolaita mx-auto mb-6">
              <span>{badge}</span>
            </div>
          )}

          {icon && <div className="mb-6 flex justify-center text-[rgb(var(--wolaita-gold))]">{icon}</div>}

          <h1
            className={`mx-auto max-w-4xl font-serif text-4xl font-black leading-tight sm:text-5xl md:text-6xl ${
              titleClassName || 'wolaita-display-gradient wolaita-hero-premium'
            }`}
          >
            {title}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg md:text-xl"
            >
              {subtitle}
            </motion.p>
          )}

          {children && <div className="mt-10">{children}</div>}
        </motion.div>
      </div>

      <DingguazaStripe
        segmentWidth={6}
        height="h-2.5"
        className="absolute bottom-0 left-0 right-0 border-t border-black/30 shadow-[0_-4px_20px_rgba(0,0,0,0.35)]"
      />
      <div className="section-divider absolute bottom-2.5 left-0 right-0" />
    </section>
  );
};

export default PageHero;
