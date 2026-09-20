import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import { motion } from 'motion/react';
import { ArrowRight, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// The previous list of eighteen people came from the site's generated starting point
// and could not be verified. Rather than publish unchecked claims about real people,
// this page invites the community to supply them.
const NotablePeople = () => {
  const { t } = useLanguage();

  const fields = [
    'Leaders and public servants',
    'Scholars, teachers and writers',
    'Musicians, singers and artists',
    'Athletes',
    'Elders and custodians of tradition',
    'Entrepreneurs and innovators',
  ];

  return (
    <>
      <Helmet>
        <title>Notable People of Wolaita | Wolaita Museum</title>
        <meta
          name="description"
          content="A record of notable Wolaita people is being compiled with the community. Submit a name, with sources, to be considered for the museum."
        />
      </Helmet>

      <PageHero
        title={t('people.title')}
        subtitle="A record being written with the community"
        badge="Heroes & Pioneers"
        icon={<Users size={40} />}
      />

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <p className="mb-6 text-lg leading-relaxed text-stone-700 dark:text-stone-300">
            Wolaita has produced leaders, scholars, artists, athletes and elders whose work
            deserves to be recorded properly. This museum will name them only where the
            record can be checked — with dates, sources, and the agreement of families where
            they are living.
          </p>
          <p className="mb-10 text-lg leading-relaxed text-stone-700 dark:text-stone-300">
            That work is underway with elders, historians and families. Until each entry is
            verified, this page stays empty rather than carrying claims that cannot be
            supported.
          </p>

          <h2 className="mb-4 font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
            Who we are documenting
          </h2>
          <ul className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {fields.map((field) => (
              <li
                key={field}
                className="rounded-xl border-l-4 border-yellow-400 bg-stone-50 p-4 text-stone-700 shadow-sm dark:bg-stone-900 dark:text-stone-300"
              >
                {field}
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-yellow-400/40 bg-yellow-50 p-6 dark:bg-stone-900">
            <h2 className="mb-3 font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
              Know someone who belongs here?
            </h2>
            <p className="mb-5 leading-relaxed text-stone-700 dark:text-stone-300">
              Send the person's name, what they are remembered for, the years concerned, and
              anything that supports it — a photograph, a publication, a family contact, or the
              elders who can speak to it.
            </p>
            <Link
              to="/contact"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-orange-800 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-900"
            >
              Submit a name
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default NotablePeople;
