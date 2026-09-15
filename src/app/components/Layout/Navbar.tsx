import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { ChevronDown, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSelector from '../ui/LanguageSelector';
import DingguazaStripe from '../ui/DingguazaStripe';
import WolaitaLogo from './WolaitaLogo';
import { useLanguage } from '../../context/LanguageContext';

type NavLink = {
  name: string;
  path: string;
  description?: string;
  era?: string;
  title?: string;
};

type DropdownSection = {
  label?: string;
  links: NavLink[];
  featured?: boolean;
};

type DropdownConfig = {
  label: string;
  basePath: string;
  activePaths: string[];
  main?: NavLink;
  sections: DropdownSection[];
  width?: string;
  align?: 'left' | 'right';
};

const kingsLinks: NavLink[] = [
  { name: 'Kawo Tona Gaga', path: '/kings#kawo-tona-gaga', era: 'Early 1800s', title: 'The Diplomat' },
  { name: 'Kawo Kawudana', path: '/kings#kawo-kawudana', era: 'Late 1700s', title: 'The Warrior King' },
  { name: 'Kawo Sumuro', path: '/kings#kawo-sumuro', era: 'Mid-1800s', title: 'The Builder' },
  { name: 'Kawo Gichata', path: '/kings#kawo-gichata', era: '1850s-1880s', title: 'The Modernizer' },
  { name: 'Kawo Toqa (Tona Aura)', path: '/kings#kawo-toqa', era: 'Late 1800s-1894', title: 'Last Independent Monarch' },
  { name: 'Kawo Gobo', path: '/kings#kawo-gobo', era: '1600s-1700s', title: 'The Law Giver' },
  { name: 'Kawo Damot', path: '/kings#kawo-damot', era: '1500s-1600s', title: 'The Territorial Expander' },
  { name: 'Kawo Motolomi', path: '/kings#kawo-motolomi', era: 'Pre-1500s', title: 'The Founding Monarch' },
];

const visitSections: DropdownSection[] = [
  {
    label: 'Heritage & Culture',
    links: [
      { name: 'Heritage Sites', path: '/heritage-sites', description: 'Natural & cultural landmarks' },
      { name: 'Tangible Heritage', path: '/tangible-heritage', description: 'Physical artifacts & crafts' },
      { name: 'Intangible Heritage', path: '/intangible-heritage', description: 'Traditions & practices' },
    ],
  },
  {
    label: 'Practical Information',
    links: [
      { name: 'Where to Stay', path: '/accommodation', description: 'Hotels & lodges' },
      { name: 'Festivals', path: '/festivals', description: 'Cultural celebrations' },
    ],
  },
];

const languageSections: DropdownSection[] = [
  {
    label: 'Resources',
    links: [
      { name: 'Dictionary', path: '/dictionary', description: 'Wolaita-English translations' },
      { name: 'Proverbs', path: '/proverbs', description: 'Traditional wisdom' },
      { name: 'Sayings', path: '/sayings', description: 'Common expressions' },
      { name: 'Puzzles & Riddles', path: '/puzzles', description: 'Brain teasers & wordplay' },
    ],
  },
];

const linkClass = (isActive: boolean) =>
  `whitespace-nowrap text-sm font-medium transition-colors hover:text-orange-700 dark:hover:text-orange-300 ${
    isActive ? 'text-orange-800 dark:text-orange-200 font-semibold' : 'text-stone-600 dark:text-stone-300'
  }`;

const sectionLabelClass =
  'px-3 py-2 mt-2 text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider';

const Dropdown = ({
  config,
  isOpen,
  onOpenChange,
  isActive,
}: {
  config: DropdownConfig;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  isActive: boolean;
}) => (
  <div
    className="relative"
    onMouseEnter={() => onOpenChange(true)}
    onMouseLeave={() => onOpenChange(false)}
    onKeyDown={(e) => e.key === 'Escape' && onOpenChange(false)}
    onBlur={(e) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) onOpenChange(false);
    }}
  >
    <button
      className={`flex items-center gap-1 ${linkClass(isActive)}`}
      type="button"
      aria-haspopup="true"
      aria-expanded={isOpen}
      onClick={() => onOpenChange(!isOpen)}
    >
      {config.label}
      <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          // Top padding (not margin) bridges the gap so the menu stays open while the pointer moves onto it.
          className={`absolute top-full z-50 pt-2 ${config.align === 'right' ? 'right-0' : 'left-0'} ${config.width ?? 'w-72'}`}
        >
          <div className="max-h-[70vh] overflow-y-auto rounded-lg border border-stone-200 bg-white py-2 shadow-xl dark:border-stone-700 dark:bg-stone-800">
          {config.main && (
            <Link
              to={config.main.path}
              className="block border-b border-stone-200 px-4 py-3 text-sm font-semibold text-orange-800 transition-colors hover:bg-orange-50 dark:border-stone-700 dark:text-orange-200 dark:hover:bg-stone-700"
            >
              <div>{config.main.name}</div>
              {config.main.description && (
                <div className="mt-0.5 text-xs font-normal text-stone-500 dark:text-stone-400">
                  {config.main.description}
                </div>
              )}
            </Link>
          )}

          {config.sections.map((section) => (
            <div key={section.label ?? section.links[0]?.path}>
              {section.label && <p className={sectionLabelClass}>{section.label}</p>}
              {section.links.map((link, index) => {
                const featured = section.featured && index === 0;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2.5 transition-colors hover:bg-orange-50 dark:hover:bg-stone-700 ${
                      featured ? 'border-l-4 border-yellow-400 py-3 hover:bg-yellow-50 dark:hover:bg-yellow-900/20' : ''
                    }`}
                  >
                    <div className="text-sm font-medium text-stone-900 dark:text-stone-100">{link.name}</div>
                    {(link.title || link.description) && (
                      <div className={`mt-0.5 text-xs ${featured ? 'text-yellow-700 dark:text-yellow-400' : 'text-stone-500 dark:text-stone-400'}`}>
                        {link.title ?? link.description}
                      </div>
                    )}
                    {link.era && <div className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">{link.era}</div>}
                  </Link>
                );
              })}
            </div>
          ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const MobileSection = ({
  title,
  path,
  sections,
}: {
  title: string;
  path: string;
  sections: DropdownSection[];
}) => (
  <div className="border-t border-stone-200 pt-4 dark:border-stone-700">
    <Link
      to={path}
      className="mb-3 inline-block text-xs font-semibold uppercase tracking-wide text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
    >
      {title}
    </Link>
    <div className="mt-3 space-y-3 pl-2">
      {sections.map((section) => (
        <div key={section.label ?? section.links[0]?.path} className="space-y-2">
          {section.label && <p className="text-xs font-semibold text-stone-600 dark:text-stone-400">{section.label}</p>}
          {section.links.map((link, index) => {
            const featured = section.featured && index === 0;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={
                  featured
                    ? 'block rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-2 dark:bg-yellow-900/20'
                    : 'block pl-2 text-sm font-medium text-stone-700 hover:text-orange-700 dark:text-stone-300 dark:hover:text-orange-300'
                }
              >
                <div className={featured ? 'text-sm font-semibold text-stone-900 dark:text-stone-100' : ''}>{link.name}</div>
                {(featured && (link.title || link.description)) && (
                  <div className="mt-0.5 text-xs text-yellow-700 dark:text-yellow-400">{link.title ?? link.description}</div>
                )}
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const navLinks: NavLink[] = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.gifaataa'), path: '/gifaataa' },
    { name: t('nav.dingguza'), path: '/dingguza' },
    { name: t('nav.history'), path: '/history' },
    { name: t('nav.culture'), path: '/culture' },
    { name: t('nav.music'), path: '/music' },
    { name: t('nav.food'), path: '/food' },
    { name: t('nav.gallery'), path: '/gallery' },
  ];

  // The desktop bar shows the core pages directly; the rest live in the "Explore" menu so the row fits.
  const primaryLinks = navLinks.slice(1, 4);
  const exploreLinks: NavLink[] = [
    ...navLinks.slice(4),
    { name: 'Quiz', path: '/quiz', description: 'Test your knowledge' },
    { name: 'About', path: '/about', description: 'About the museum' },
  ];

  const dropdowns: DropdownConfig[] = [
    {
      label: 'Kings',
      basePath: '/kings',
      activePaths: ['/kings'],
      main: { name: 'View All 50+ Kings', path: '/kings' },
      sections: [
        { label: 'Featured', links: [kingsLinks[0]], featured: true },
        { label: "Near Kawo Tona's Era", links: kingsLinks.slice(1, 5) },
        { label: 'Earlier Eras', links: kingsLinks.slice(5) },
      ],
      width: 'w-64',
    },
    {
      label: 'Visit',
      basePath: '/tourism',
      activePaths: ['/tourism', '/heritage-sites', '/tangible-heritage', '/intangible-heritage', '/accommodation', '/festivals'],
      main: { name: 'Plan Your Visit', path: '/tourism', description: 'Essential travel information' },
      sections: visitSections,
    },
    {
      label: 'Language & Wisdom',
      basePath: '/language',
      activePaths: ['/language', ...languageSections.flatMap((section) => section.links.map((link) => link.path))],
      main: { name: 'Language Overview', path: '/language', description: 'Wolaitigna language & writing' },
      sections: languageSections,
    },
    {
      label: 'Explore',
      basePath: '/explore',
      activePaths: exploreLinks.map((link) => link.path),
      sections: [{ links: exploreLinks }],
      width: 'w-60',
      align: 'right',
    },
  ];

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-stone-50/90 py-4 shadow-sm backdrop-blur-md dark:bg-stone-900/90'
          : 'bg-transparent py-6'
      }`}
    >
      <DingguazaStripe
        height="h-2.5"
        segmentWidth={6}
        className={`w-full border-b border-black/20 shadow-[0_4px_16px_rgba(0,0,0,0.2)] dark:border-white/10 ${
          scrolled ? 'opacity-100' : 'opacity-95'
        }`}
      />

      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-6 px-4 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Wolaita Museum home">
          <WolaitaLogo className="h-10 w-auto object-contain sm:h-12 md:h-14" />
        </Link>

        <div className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          <Link to="/" className={`hidden 2xl:inline ${linkClass(location.pathname === '/')}`}>
            {navLinks[0].name}
          </Link>

          {primaryLinks.map((link) => (
            <Link key={link.path} to={link.path} className={linkClass(location.pathname === link.path)}>
              {link.name}
            </Link>
          ))}

          {dropdowns.map((dropdown) => (
            <Dropdown
              key={dropdown.basePath}
              config={dropdown}
              isOpen={openDropdown === dropdown.basePath}
              onOpenChange={(open) => setOpenDropdown(open ? dropdown.basePath : null)}
              isActive={dropdown.activePaths.includes(location.pathname)}
            />
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link
            to="/quiz"
            className={`hidden items-center gap-1.5 whitespace-nowrap rounded-full border-2 px-3.5 py-1.5 text-sm font-medium transition-colors 2xl:flex ${
              location.pathname === '/quiz'
                ? 'border-amber-700 bg-amber-700 text-white'
                : 'border-amber-500 text-amber-700 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-900/20'
            }`}
          >
            Quiz
          </Link>

          <LanguageSelector />
          <ThemeToggle />

          <Link
            to="/contact"
            className="whitespace-nowrap rounded-full bg-orange-800 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-900"
          >
            Contact
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4 xl:hidden">
          <LanguageSelector />
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <button
            onClick={() => setIsOpen((open) => !open)}
            className="p-2 text-stone-800 dark:text-stone-100"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-900 xl:hidden"
          >
            <div className="flex max-h-[calc(100dvh-7rem)] flex-col space-y-6 overflow-y-auto overscroll-contain px-6 py-8">
              <div className="flex items-center justify-between sm:hidden">
                <span className="text-sm font-medium text-stone-600 dark:text-stone-400">Theme</span>
                <ThemeToggle />
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg font-medium text-stone-800 hover:text-orange-700 dark:text-stone-200 dark:hover:text-orange-300"
                >
                  {link.name}
                </Link>
              ))}

              <MobileSection
                title="The 50+ Kings"
                path="/kings"
                sections={[
                  { links: [kingsLinks[0]], featured: true },
                  { links: kingsLinks.slice(1, 5) },
                  { links: [{ name: 'View all kings ->', path: '/kings' }] },
                ]}
              />

              <MobileSection title="Visit Wolaita" path="/tourism" sections={visitSections} />
              <MobileSection title="Language & Wisdom" path="/language" sections={languageSections} />

              <Link
                to="/quiz"
                className="border-t border-stone-200 pt-4 text-lg font-semibold text-amber-700 hover:text-amber-600 dark:border-stone-700 dark:text-amber-400"
              >
                Quiz - Test Your Knowledge
              </Link>

              <Link
                to="/about"
                className="border-t border-stone-200 pt-4 text-lg font-medium text-stone-800 hover:text-orange-700 dark:border-stone-700 dark:text-stone-200 dark:hover:text-orange-300"
              >
                About
              </Link>

              <Link to="/contact" className="w-full rounded-lg bg-orange-800 px-5 py-3 text-center font-medium text-white">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
