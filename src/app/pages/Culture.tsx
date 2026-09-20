import React from 'react';
import PhotoPlaceholder from '../components/ui/PhotoPlaceholder';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import { motion } from 'motion/react';
import { Home, Users2, Leaf, Building } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Import traditional house images
import traditionalHouse1 from 'figma:asset/dec0eaeec5ae949354005db9b2ff79a5c3a2fa12.webp';
import traditionalHouse2 from 'figma:asset/58e84680c340be2e619e8ec0c32ae0ab589f1a34.webp';

const Culture = () => {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>Culture & Daily Life | Clothing, Family & Agriculture</title>
        <meta name="description" content="Experience the daily life of the Wolaita people, from traditional clothing and family structures to agricultural practices and customs." />
      </Helmet>

      <PageHero
        title={t('culture.title')}
        subtitle={t('culture.subtitle')}
        badge="Daily Life & Traditions"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <PhotoPlaceholder label="Traditional Clothing" className="rounded-lg shadow-xl w-full h-auto object-cover" />
          </motion.div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">Traditional Clothing</h2>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              Wolaita traditional clothing is renowned for its intricate hand-woven cotton fabrics. Men often wear a 'shamma' or a distinctive tunic, while women wear elegant dresses adorned with colorful embroidery known as 'tibeb'.
            </p>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              The colors used often hold symbolic meanings, representing status, marital status, or the nature of the occasion being celebrated.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center flex-row-reverse mb-24">
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">Social Organization</h2>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              The family is the cornerstone of Wolaita society. Extended families often live in close proximity, sharing resources and responsibilities.
            </p>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              Respect for elders is paramount. Community decisions are often made through consensus in traditional assemblies, reflecting a democratic ethos deeply embedded in the culture.
            </p>
          </div>
           <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <PhotoPlaceholder label="Community Life" className="rounded-lg shadow-xl w-full h-auto object-cover" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img loading="lazy" decoding="async" 
              src={traditionalHouse1}
              alt="Traditional House"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">Traditional Housing</h2>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              Wolaita traditional houses are built with locally sourced materials, reflecting the community's deep connection to the land. These houses often feature a central courtyard and are designed to maximize natural ventilation and lighting.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center flex-row-reverse mb-24">
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">Agricultural Practices</h2>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              Agriculture is a cornerstone of Wolaita life. The region is known for its fertile soil and diverse crops, including coffee, maize, and beans. Traditional farming methods are still widely used, emphasizing sustainable practices and community cooperation.
            </p>
          </div>
           <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <img loading="lazy" decoding="async" 
              src={traditionalHouse2}
              alt="Traditional House"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Traditional Architecture Section */}
      <Section className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-stone-800 dark:to-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <Home className="mx-auto mb-4 text-orange-600 dark:text-orange-400" size={64} />
          <h2 className="text-3xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4 sm:text-4xl">
            Traditional Architecture
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            The iconic Tukul — traditional Wolaita houses built with wisdom, skill, and harmony with nature.
          </p>
        </motion.div>

        {/* House Images Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img loading="lazy" decoding="async" 
              src={traditionalHouse1} 
              alt="Traditional Wolaita Tukul house with thatched roof" 
              className="w-full h-72 sm:h-96 md:h-[450px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5 sm:p-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Classic Tukul Design</h3>
                <p className="text-stone-200">Round structure with conical thatched roof made from grass and bamboo, designed for climate adaptation.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img loading="lazy" decoding="async" 
              src={traditionalHouse2} 
              alt="Traditional Wolaita house with wooden door entrance" 
              className="w-full h-72 sm:h-96 md:h-[450px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5 sm:p-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Crafted with Tradition</h3>
                <p className="text-stone-200">Wooden door entrance and mud walls plastered with natural materials, built using ancestral techniques.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Architecture Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center border-t-4 border-yellow-400"
          >
            <div className="inline-block p-4 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full text-white mb-4">
              <Home size={32} />
            </div>
            <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
              Round Structure
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Circular design provides structural stability against wind and optimal space utilization for family life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center border-t-4 border-red-600"
          >
            <div className="inline-block p-4 bg-gradient-to-br from-red-600 to-orange-700 rounded-full text-white mb-4">
              <Leaf size={32} />
            </div>
            <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
              Natural Materials
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Built from locally sourced materials: mud, wood, grass, and bamboo — sustainable and eco-friendly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center border-t-4 border-green-600"
          >
            <div className="inline-block p-4 bg-gradient-to-br from-green-600 to-yellow-600 rounded-full text-white mb-4">
              <Building size={32} />
            </div>
            <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
              Climate Adapted
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Thatched roof provides insulation, keeping homes cool in heat and warm during cold highland nights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center border-t-4 border-orange-600"
          >
            <div className="inline-block p-4 bg-gradient-to-br from-orange-600 to-red-700 rounded-full text-white mb-4">
              <Users2 size={32} />
            </div>
            <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
              Community Built
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              House construction is a communal activity, with neighbors helping each other build homes together.
            </p>
          </motion.div>
        </div>

        {/* Detailed Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-16"
        >
          <div className="bg-white dark:bg-stone-800 p-5 sm:p-8 md:p-12 rounded-2xl shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6 text-center">
              The Art of Tukul Construction
            </h3>
            <div className="space-y-4 text-stone-700 dark:text-stone-300 leading-relaxed text-lg">
              <p>
                The traditional Wolaita house, known as <strong className="text-orange-600 dark:text-orange-400">Tukul</strong>, is a masterpiece of indigenous architecture. Built in a circular shape with a conical thatched roof, these structures have housed Wolaita families for centuries, proving their durability and functionality.
              </p>
              <p>
                <strong>Construction Process:</strong> Walls are made from wooden frames filled with mud mixed with straw (wattle and daub technique), then smoothed and sometimes plastered. The roof is thatched with grass, carefully layered to ensure water runs off during rain. A central wooden pole supports the entire roof structure.
              </p>
              <p>
                <strong>Interior Design:</strong> Inside, the Tukul features a central living area with a hearth for cooking and warmth. Sleeping areas are arranged around the perimeter. The design maximizes space efficiency while maintaining family privacy and comfort.
              </p>
              <p>
                <strong>Cultural Significance:</strong> Building a house is a community event. Neighbors gather to help construct the frame, apply mud, and thatch the roof. This tradition reinforces social bonds and ensures everyone has shelter—a beautiful example of Wolaita's communal values.
              </p>
              <p className="text-xl font-semibold text-orange-700 dark:text-orange-400 text-center pt-4">
                "A house built by the community stands strong for generations."
              </p>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default Culture;