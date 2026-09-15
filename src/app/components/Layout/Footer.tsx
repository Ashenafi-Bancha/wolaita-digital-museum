import { Link } from 'react-router';

import dingguazaPattern from 'figma:asset/2ec8080aab62903620fa3dbb038384450daf4a5b.png';

import WolaitaLogo from './WolaitaLogo';

type FooterLink = { label: string; path: string; highlight?: boolean };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Cultural Treasures',
    links: [
      { label: 'Gifaataa (New Year)', path: '/gifaataa', highlight: true },
      { label: 'Dingguza (Traditional & Cultural Cloth)', path: '/dingguza', highlight: true },
      { label: 'Marccuwaa (Currency)', path: '/marccuwaa' },
      { label: 'Wolaita Calendar', path: '/calendar' },
      { label: 'The 50+ Kings', path: '/kings' },
      { label: 'Heritage Sites', path: '/heritage-sites' },
    ],
  },
  {
    title: 'Language & Wisdom',
    links: [
      { label: 'Wolaitigna Language', path: '/language' },
      { label: 'Dictionary', path: '/dictionary' },
      { label: 'Proverbs', path: '/proverbs' },
      { label: 'Sayings', path: '/sayings' },
      { label: 'Puzzles & Riddles', path: '/puzzles' },
    ],
  },
  {
    title: 'Culture & Life',
    links: [
      { label: 'Culture & Daily Life', path: '/culture' },
      { label: 'Music & Musicians', path: '/music' },
      { label: 'Marriage & Funeral', path: '/life-ceremonies' },
      { label: 'Food & Cuisine', path: '/food' },
      { label: 'Festivals', path: '/festivals' },
      { label: 'Notable People', path: '/notable-people' },
    ],
  },
  {
    title: 'Visit & Learn',
    links: [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'Tourism & Attractions', path: '/tourism' },
      { label: 'Where to Stay', path: '/accommodation' },
      { label: 'Photo Gallery', path: '/gallery' },
      { label: 'Education Resources', path: '/education' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Wolaita Dingguza Pattern Stripe */}
      <div className="w-full h-3 overflow-hidden">
        <img loading="lazy" decoding="async"
          src={dingguazaPattern}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 pt-12 sm:px-6 sm:pt-16">
        {/* Two link columns on phones, five columns on large screens */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-5 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="mb-4 inline-block sm:mb-6" aria-label="Wolaita Museum home">
              <WolaitaLogo className="h-16 w-auto sm:h-20" variant="full" />
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-6 max-w-md">
              Dedicated to preserving and promoting the rich cultural legacy, history, and traditions of the Wolaita people of Ethiopia.
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-orange-500 via-yellow-400 to-transparent" />
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-base font-serif font-semibold text-stone-200 mb-2 sm:text-lg sm:mb-4">{column.title}</h3>
              <ul className="text-sm text-stone-400">
                {column.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`block py-2 leading-snug transition-colors ${
                        link.highlight ? 'font-semibold hover:text-yellow-400' : 'hover:text-orange-400'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-stone-800 mt-10 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-stone-500 sm:mt-12 sm:py-8">
          <p className="text-center">&copy; {new Date().getFullYear()} Wolaita Digital Museum. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="py-2 hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="py-2 hover:text-stone-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
