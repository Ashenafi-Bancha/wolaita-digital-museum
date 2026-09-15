import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import { motion } from 'motion/react';
import { Shirt, Crown, Heart, Star, Users, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Import authentic Dingguza images
import dingguza1 from 'figma:asset/3363be406878dadf1ad4360e29fb33af839d0c96.png';
import dingguza2 from 'figma:asset/6f379a7d7e5d3c953708a6e10605c3f643a5dedd.png';
import dingguza3 from 'figma:asset/ddacdd9d3636b6f198ed885d99155ab353a4d4b3.png';
import dingguza4 from 'figma:asset/b9bd48fd90904c5ad3313bbea32a9e06dae8cc05.png';

const Dingguza = () => {
  const { t } = useLanguage();
  const significance = [
    {
      icon: <Crown size={40} />,
      title: "Symbol of Identity",
      description: "Dingguza is the visual representation of Wolaita pride. The three colors embody the spirit, history, and unity of the Wolaita people.",
      color: "from-black to-yellow-600"
    },
    {
      icon: <Heart size={40} />,
      title: "Cultural Unity",
      description: "Wearing Dingguza connects Wolaita people worldwide, creating a sense of belonging and shared heritage regardless of location.",
      color: "from-yellow-600 to-red-600"
    },
    {
      icon: <Star size={40} />,
      title: "Ceremonial Importance",
      description: "Dingguza is worn during major celebrations like Gifaataa, weddings, and cultural festivals, marking special moments with dignity.",
      color: "from-red-600 to-orange-600"
    },
  ];

  const colors = [
    {
      name: "Black",
      meaning: "Represents the fertile soil of Wolaita, the strength and resilience of the people, and the depth of ancestral wisdom.",
      symbolism: "Strength · Soil · Ancestors"
    },
    {
      name: "Yellow (Gold)",
      meaning: "Symbolizes the wealth and prosperity of Wolaita, the golden harvests, and the bright future of the community.",
      symbolism: "Prosperity · Harvest · Hope"
    },
    {
      name: "Red",
      meaning: "Embodies the courage of Wolaita warriors, the sacrifice of ancestors who defended the land, and the passion for cultural preservation.",
      symbolism: "Courage · Sacrifice · Passion"
    },
  ];

  const occasions = [
    {
      event: "Gifaataa (New Year)",
      description: "The entire community dresses in Dingguza to celebrate the Wolaita New Year with pride and unity.",
      importance: "Essential"
    },
    {
      event: "Weddings",
      description: "Bride, groom, and families wear Dingguza to honor tradition and showcase cultural identity during matrimonial celebrations.",
      importance: "Traditional"
    },
    {
      event: "Cultural Festivals",
      description: "Dance performances, music events, and heritage celebrations feature Dingguza as the primary attire.",
      importance: "Required"
    },
    {
      event: "Religious Ceremonies",
      description: "Church services and spiritual gatherings often see community members wearing Dingguza to show respect.",
      importance: "Common"
    },
    {
      event: "Funeral Honors",
      description: "Dingguza is worn to honor deceased elders and leaders, showing respect for their contribution to Wolaita heritage.",
      importance: "Respectful"
    },
    {
      event: "Community Gatherings",
      description: "Public meetings, elder councils, and important announcements are attended by people in Dingguza.",
      importance: "Customary"
    },
  ];

  const styles = [
    {
      type: "Traditional Shawl",
      description: "Draped elegantly over the shoulders, this is the most common style for both men and women during ceremonies."
    },
    {
      type: "Dress Integration",
      description: "Modern dresses incorporate Dingguza patterns and colors, blending tradition with contemporary fashion."
    },
    {
      type: "Headwrap",
      description: "Women often wrap Dingguza cloth as elegant headpieces, especially during special occasions."
    },
    {
      type: "Sash & Accent",
      description: "Used as a sash or accent piece with traditional white clothing, highlighting the iconic three colors."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Dingguza - Traditional Wolaita Cloth | Cultural Symbol</title>
        <meta name="description" content="Discover Dingguza, the iconic black, yellow, and red traditional cloth that symbolizes Wolaita identity and pride worldwide." />
      </Helmet>

      {/* Hero Section - Ultra Special */}
      <div className="relative bg-gradient-to-br from-black via-stone-900 to-black py-32 overflow-hidden">
        {/* Animated stripes in background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 h-full w-full"
          >
            <div className="h-1/3 bg-black"></div>
            <div className="h-1/3 bg-yellow-400"></div>
            <div className="h-1/3 bg-red-600"></div>
          </motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Animated Dingguza Cloth Visual */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="mx-auto w-64 h-48 rounded-3xl overflow-hidden shadow-2xl mb-8 border-8 border-white transform hover:scale-105 transition-transform"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-full flex flex-col"
              >
                <div className="flex-1 bg-black"></div>
                <div className="flex-1 bg-yellow-400"></div>
                <div className="flex-1 bg-red-600"></div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Shirt className="mx-auto mb-6 text-yellow-400" size={80} />
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
              {t('dingguza.title')}
            </h1>
            <div className="inline-block bg-white/20 backdrop-blur-md rounded-full px-8 py-4 mb-6">
              <p className="text-2xl md:text-4xl text-yellow-100 font-serif italic">
                {t('dingguza.subtitle')}
              </p>
            </div>
            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-white leading-relaxed px-4">
              Black, Yellow, and Red — Three colors woven together, representing centuries of heritage, pride, and identity recognized worldwide.
            </p>

            {/* Color badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-black text-white px-8 py-4 rounded-full font-bold shadow-2xl border-4 border-white"
              >
                BLACK
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold shadow-2xl border-4 border-white"
              >
                YELLOW
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-red-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl border-4 border-white"
              >
                RED
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What is Dingguza */}
      <Section className="bg-white dark:bg-stone-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
              What is Dingguza?
            </h2>
            <div className="prose prose-lg max-w-none text-stone-700 dark:text-stone-300 space-y-6">
              <p className="text-xl leading-relaxed">
                <strong className="text-yellow-600 dark:text-yellow-400">Dingguza</strong> is the traditional cloth of the Wolaita people, characterized by its distinctive horizontal stripes of black, yellow, and red. More than just fabric, Dingguza is a powerful symbol of Wolaita identity, worn with pride during cultural ceremonies and celebrations.
              </p>
              <p className="text-xl leading-relaxed">
                The three colors of Dingguza mirror the Wolaita flag and represent core values: <strong className="text-black dark:text-white">black</strong> for the fertile soil and ancestral strength, <strong className="text-yellow-600">yellow</strong> for prosperity and golden harvests, and <strong className="text-red-600">red</strong> for the courage and sacrifice of defenders of Wolaita heritage.
              </p>
              <p className="text-xl leading-relaxed">
                Whether draped as a shawl, woven into modern fashion, or worn as traditional attire, Dingguza immediately identifies its wearer as part of the proud Wolaita community. It is one of the two most globally recognized symbols of Wolaita culture, alongside Gifaataa.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Color Meanings */}
      <Section className="bg-gradient-to-br from-stone-100 via-yellow-50 to-orange-50 dark:from-stone-800 dark:to-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            The Three Sacred Colors
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Each color carries profound meaning and connects to Wolaita history and values.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {colors.map((color, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all border-t-8 ${
                color.name === "Black" ? "border-black" :
                color.name === "Yellow (Gold)" ? "border-yellow-400" :
                "border-red-600"
              }`}
            >
              <div className="relative z-10">
                <h3 className={`text-3xl font-serif font-bold mb-4 ${
                  color.name === "Black" ? "text-black dark:text-white" :
                  color.name === "Yellow (Gold)" ? "text-yellow-600 dark:text-yellow-400" :
                  "text-red-600 dark:text-red-400"
                }`}>
                  {color.name}
                </h3>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6 text-lg">
                  {color.meaning}
                </p>
                <div className="pt-4 border-t-2 border-stone-200 dark:border-stone-700">
                  <p className="text-sm font-semibold text-stone-600 dark:text-stone-400">
                    {color.symbolism}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual stripe representation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mx-auto max-w-4xl h-24 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        >
          <div className="flex-1 bg-black"></div>
          <div className="flex-1 bg-yellow-400"></div>
          <div className="flex-1 bg-red-600"></div>
        </motion.div>
      </Section>

      {/* Cultural Significance */}
      <Section className="bg-stone-50 dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Cultural Significance
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {significance.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-stone-800 p-10 rounded-2xl shadow-xl text-center relative overflow-hidden group"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className={`inline-block p-5 bg-gradient-to-br ${item.color} rounded-full text-white mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
                  {item.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* When to Wear Dingguza */}
      <Section className="bg-white dark:bg-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            When to Wear Dingguza
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Dingguza marks important moments in Wolaita life and culture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {occasions.map((occasion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-gradient-to-br from-stone-50 to-orange-50 dark:from-stone-900 dark:to-stone-700 p-6 rounded-xl shadow-lg border-l-4 border-yellow-400 hover:shadow-2xl transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
                  {occasion.event}
                </h3>
                <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">
                  {occasion.importance}
                </span>
              </div>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                {occasion.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Styles & Variations */}
      <Section className="bg-gradient-to-br from-yellow-50 to-red-50 dark:from-stone-900 dark:to-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Styles & Variations
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Dingguza adapts to modern fashion while preserving traditional essence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {styles.map((style, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-black via-yellow-400 to-red-600 shadow-lg"></div>
              <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                {style.type}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {style.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Authentic Dingguza Gallery */}
      <Section className="bg-white dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Dingguza in Action
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Authentic images of Wolaita people proudly wearing their traditional Dingguza cloth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img 
              src={dingguza1} 
              alt="Woman in traditional Dingguza dress" 
              className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Traditional Elegance</h3>
                <p className="text-stone-200">Dingguza worn as a complete traditional dress, showcasing the beautiful black, yellow, and red stripes.</p>
              </div>
            </div>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img 
              src={dingguza2} 
              alt="Woman wearing Dingguza as a shawl" 
              className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Shawl Style</h3>
                <p className="text-stone-200">Dingguza draped as a shawl over white traditional clothing, a popular style for cultural events.</p>
              </div>
            </div>
          </motion.div>

          {/* Image 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img 
              src={dingguza3} 
              alt="Close-up portrait in Dingguza attire" 
              className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Contemporary Fashion</h3>
                <p className="text-stone-200">Modern styling with Dingguza patterns, including matching headwrap for a complete cultural look.</p>
              </div>
            </div>
          </motion.div>

          {/* Image 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img 
              src={dingguza4} 
              alt="Community in traditional Dingguza" 
              className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Community Celebration</h3>
                <p className="text-stone-200">Wolaita community gathered in their traditional Dingguza, celebrating unity and cultural heritage together.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-black via-yellow-400 to-red-600 p-1 rounded-2xl">
            <div className="bg-white dark:bg-stone-900 px-8 py-6 rounded-2xl">
              <p className="text-xl font-serif text-stone-900 dark:text-stone-100">
                <strong className="text-yellow-600 dark:text-yellow-400">Dingguza</strong> — More than clothing, it's a statement of identity, pride, and heritage.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Global Recognition */}
      <Section className="bg-gradient-to-br from-black via-stone-900 to-red-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="mx-auto mb-8 text-yellow-400" size={80} />

            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              A Global Cultural Icon
            </h2>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-stone-200">
              <p>
                Dingguza has become one of the most recognizable symbols of Ethiopian cultural diversity. From international cultural festivals to diaspora gatherings worldwide, the sight of black, yellow, and red stripes immediately evokes Wolaita pride and identity.
              </p>
              <p>
                Fashion designers have incorporated Dingguza patterns into contemporary clothing, museums display it as an exemplar of African textile tradition, and cultural scholars study it as a living symbol of ethnic identity preservation.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-yellow-300 pt-6">
                "To wear Dingguza is to carry Wolaita heritage with you, wherever you go."
              </p>
            </div>

            {/* Large decorative Dingguza stripe */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="mx-auto w-full max-w-3xl h-32 rounded-3xl mt-12 flex flex-col overflow-hidden shadow-2xl border-8 border-white"
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

export default Dingguza;