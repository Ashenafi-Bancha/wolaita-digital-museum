import { Link } from 'react-router';

import dingguazaPattern from 'figma:asset/2ec8080aab62903620fa3dbb038384450daf4a5b.png';

import WolaitaLogo from './WolaitaLogo';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Wolaita Dingguza Pattern Stripe */}
      <div className="w-full h-3 overflow-hidden">
        <img loading="lazy" decoding="async" 
          src={dingguazaPattern} 
          alt="Dingguza Pattern" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="mb-6 block">
              {/* Modern SVG Logo */}
              <WolaitaLogo className="h-20 w-auto" variant="full" />
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Dedicated to preserving and promoting the rich cultural legacy, history, and traditions of the Wolaita people of Ethiopia.
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-orange-500 via-yellow-400 to-transparent" />
          </div>

          {/* Heritage */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-stone-200 mb-6">Cultural Treasures</h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><Link to="/gifaataa" className="hover:text-yellow-400 transition-colors font-semibold">Gifaataa (New Year)</Link></li>
              <li><Link to="/dingguza" className="hover:text-yellow-400 transition-colors font-semibold">Dingguza (Traditional & Cultural Cloth)</Link></li>
              <li><Link to="/marccuwaa" className="hover:text-orange-400 transition-colors">Marccuwaa (Currency)</Link></li>
              <li><Link to="/calendar" className="hover:text-orange-400 transition-colors">Wolaita Calendar</Link></li>
              <li><Link to="/kings" className="hover:text-orange-400 transition-colors">The 50+ Kings</Link></li>
              <li><Link to="/heritage-sites" className="hover:text-orange-400 transition-colors">Heritage Sites</Link></li>
            </ul>
          </div>

          {/* Language & Wisdom */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-stone-200 mb-6">Language & Wisdom</h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><Link to="/language" className="hover:text-orange-400 transition-colors">Wolaitigna Language</Link></li>
              <li><Link to="/dictionary" className="hover:text-orange-400 transition-colors">Dictionary</Link></li>
              <li><Link to="/proverbs" className="hover:text-orange-400 transition-colors">Proverbs</Link></li>
              <li><Link to="/sayings" className="hover:text-orange-400 transition-colors">Sayings</Link></li>
              <li><Link to="/puzzles" className="hover:text-orange-400 transition-colors">Puzzles & Riddles</Link></li>
            </ul>
          </div>

          {/* Culture & Life */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-stone-200 mb-6">Culture & Life</h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><Link to="/culture" className="hover:text-orange-400 transition-colors">Culture & Daily Life</Link></li>
              <li><Link to="/music" className="hover:text-orange-400 transition-colors">Music & Musicians</Link></li>
              <li><Link to="/life-ceremonies" className="hover:text-orange-400 transition-colors">Marriage & Funeral</Link></li>
              <li><Link to="/food" className="hover:text-orange-400 transition-colors">Food & Cuisine</Link></li>
              <li><Link to="/festivals" className="hover:text-orange-400 transition-colors">Festivals</Link></li>
              <li><Link to="/notable-people" className="hover:text-orange-400 transition-colors">Notable People</Link></li>
            </ul>
          </div>

          {/* Visit & Learn */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-stone-200 mb-6">Visit & Learn</h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><Link to="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/tourism" className="hover:text-orange-400 transition-colors">Tourism & Attractions</Link></li>
              <li><Link to="/accommodation" className="hover:text-orange-400 transition-colors">Where to Stay</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-400 transition-colors">Photo Gallery</Link></li>
              <li><Link to="/education" className="hover:text-orange-400 transition-colors">Education Resources</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Wolaita Digital Museum. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
