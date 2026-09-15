import type { FC } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import DingguazaStripe from './DingguazaStripe';

interface CardProps {
  title: string;
  image: string;
  excerpt: string;
  link: string;
  delay?: number;
}

const Card: FC<CardProps> = ({ title, image, excerpt, link, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group content-card-3d overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />
        <DingguazaStripe
          segmentWidth={6}
          height="h-2"
          className="absolute bottom-0 left-0 right-0 opacity-90"
        />
      </div>
      <div className="relative z-[1] p-8">
        <div className="card-accent-bar mb-4" />
        <h3 className="mb-3 font-serif text-xl font-bold text-stone-900 dark:text-stone-100 md:text-2xl">
          {title}
        </h3>
        <p className="mb-6 line-clamp-3 leading-relaxed text-stone-600 dark:text-stone-300">
          {excerpt}
        </p>
        <Link
          to={link}
          className="inline-flex items-center font-semibold text-[rgb(var(--wolaita-forest))] transition-all group-hover:gap-3 dark:text-[rgb(var(--wolaita-gold))]"
        >
          Read More <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
