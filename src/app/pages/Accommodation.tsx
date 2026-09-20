import React from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import { motion } from 'motion/react';
import { Hotel, Home, Coffee } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Accommodation = () => {
  const { t } = useLanguage();
  const accommodationTypes = [
    {
      type: "Hotels",
      icon: <Hotel size={48} />,
      description: "Full-service hotels with modern amenities, restaurants, and professional service.",
    },
    {
      type: "Lodges & Guesthouses",
      icon: <Home size={48} />,
      description: "Mid-range accommodations offering comfort with local character and cultural immersion.",
    },
    {
      type: "Pensions",
      icon: <Coffee size={48} />,
      description: "Budget-friendly family-run establishments with clean rooms and authentic local experience.",
    },
  ];

  const travelTips = [
    {
      title: "Best Time to Visit",
      content: "October to May offers pleasant weather. The rainy season (June-September) brings lush green landscapes but can make rural travel challenging."
    },
    {
      title: "Booking Advice",
      content: "Book in advance during major festivals (especially Meskel and Ethiopian New Year). Many hotels accept phone reservations in Amharic or English."
    },
    {
      title: "Local Transportation",
      content: "Bajaj (three-wheelers) and taxis are readily available in Wolaita Sodo. Hotels can arrange guided tours to cultural and natural attractions."
    },
    {
      title: "Cultural Etiquette",
      content: "Wolaita people are known for their hospitality. Respectful dress and greetings in Wolaitigna are appreciated."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Accommodation in Wolaita | Hotels, Lodges & Pensions</title>
        <meta name="description" content="Find comfortable accommodation in Wolaita - from modern hotels to traditional guesthouses. Your guide to staying in Wolaita Sodo and surrounding areas." />
      </Helmet>

      <PageHero
        title={t('accommodation.title')}
        subtitle={t('accommodation.subtitle')}
        badge="Where to Stay"
        icon={<Hotel size={64} />}
      />

      {/* Accommodation Types */}
      <Section className="bg-stone-50 dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Accommodation Options
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Choose from various lodging options to suit your budget and travel style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accommodationTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-stone-800 p-5 sm:p-8 rounded-xl shadow-lg text-center border-t-4 border-yellow-400"
            >
              <div className="text-red-600 dark:text-red-400 mb-4 flex justify-center">
                {type.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">
                {type.type}
              </h3>
              <p className="text-stone-600 dark:text-stone-300 mb-4 leading-relaxed">
                {type.description}
              </p>
              <div className="bg-yellow-50 dark:bg-stone-900 px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold text-orange-700 dark:text-orange-400">
                  
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Hotels & Accommodations List */}
      <Section className="bg-white dark:bg-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Where to Stay
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg mb-6">
            We are compiling a list of hotels, lodges and guesthouses in Wolaita Sodo, Areka and
            Boditi, checked directly with each business. It will be published here with current
            contact details and prices once every listing is confirmed.
          </p>
          <p className="text-stone-600 dark:text-stone-300">
            Run an establishment in Wolaita, or know one worth recommending?{' '}
            <Link to="/contact" className="font-semibold text-orange-800 underline dark:text-yellow-400">
              Tell us about it
            </Link>
            .
          </p>
        </motion.div>
      </Section>

      {/* Travel Tips */}
      <Section className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-stone-900 dark:to-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Travel Tips
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Important information to help you plan your stay in Wolaita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {travelTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-md border-l-4 border-red-600"
            >
              <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">
                {tip.title}
              </h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                {tip.content}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-stone-50 dark:bg-stone-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-900 to-red-900 text-white rounded-2xl shadow-2xl p-5 sm:p-8 md:p-12 text-center"
          >
            <Coffee className="mx-auto mb-6" size={64} />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Experience Wolaita Hospitality
            </h2>
            <p className="text-lg text-stone-200 leading-relaxed mb-6">
              Wolaita is renowned for its warm hospitality. Whether you choose a modern hotel or a traditional guesthouse, you'll be welcomed with genuine friendliness and respect. Many accommodations can arrange cultural tours, traditional meals, and connections with local communities.
            </p>
            <p className="text-xl font-semibold text-yellow-300">
              "Bagga" — Peace be with you, and welcome to Wolaita!
            </p>

            {/* Flag decoration */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto w-32 h-2 rounded-full mt-8 flex overflow-hidden"
            >
              <div className="flex-1 bg-black"></div>
              <div className="flex-1 bg-yellow-400"></div>
              <div className="flex-1 bg-red-600"></div>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Accommodation;
