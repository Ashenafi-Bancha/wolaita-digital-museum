import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import { motion } from 'motion/react';
import { Mountain, Church, Trees, Landmark, MapPin, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Import traditional house images
import traditionalHouse1 from 'figma:asset/dec0eaeec5ae949354005db9b2ff79a5c3a2fa12.png';
import traditionalHouse2 from 'figma:asset/58e84680c340be2e619e8ec0c32ae0ab589f1a34.png';

const HeritageSites = () => {
  const { t } = useLanguage();
  const naturalSites = [
    {
      name: "Damot Gale Mountain",
      location: "Damot Gale Woreda",
      description: "A sacred mountain offering breathtaking panoramic views of Wolaita. Historically significant as a strategic lookout point and spiritual site for traditional practices.",
      features: ["Hiking trails", "Panoramic views", "Historical significance", "Cool climate"],
      type: "Mountain",
      icon: <Mountain size={40} />
    },
    {
      name: "Abaya Lake Shore (Wolaita Section)",
      location: "Western Wolaita",
      description: "The Wolaita shoreline of Lake Abaya provides stunning natural beauty, fishing opportunities, and birdwatching. Rich biodiversity and important for local livelihoods.",
      features: ["Birdwatching", "Fishing", "Scenic beauty", "Water activities"],
      type: "Lake",
      icon: <Trees size={40} />
    },
    {
      name: "Bilate River Valley",
      location: "Central Wolaita",
      description: "Fertile river valley that has sustained agriculture for centuries. The river provides irrigation and has carved beautiful landscapes through the highlands.",
      features: ["River valley", "Agricultural heritage", "Natural beauty", "Irrigation source"],
      type: "River",
      icon: <Trees size={40} />
    },
    {
      name: "Wolaita Highland Forests",
      location: "Various districts",
      description: "Remnant indigenous forests with unique flora and fauna. These sacred groves have been protected by traditional conservation practices for generations.",
      features: ["Biodiversity", "Traditional conservation", "Medicinal plants", "Sacred sites"],
      type: "Forest",
      icon: <Trees size={40} />
    },
  ];

  const culturalSites = [
    {
      name: "Kawo's Palace Sites",
      location: "Wolaita Sodo area",
      description: "Historical remains and sites associated with the royal palaces of Wolaita kings. Archaeological significance showing architectural styles and royal governance structures.",
      features: ["Archaeological remains", "Royal history", "Traditional architecture", "Historical tours"],
      type: "Palace",
      icon: <Landmark size={40} />
    },
    {
      name: "Ancient Stone Monuments",
      location: "Various Woredas",
      description: "Megalithic stone structures and markers scattered throughout Wolaita, indicating ancient settlements and burial sites of important figures.",
      features: ["Megalithic structures", "Ancient graves", "Historical markers", "Archaeological value"],
      type: "Monument",
      icon: <Landmark size={40} />
    },
    {
      name: "Traditional Village Settlements",
      location: "Rural Wolaita",
      description: "Well-preserved traditional villages showcasing authentic Wolaita architecture with thatched-roof houses (Tukul) and traditional compound layouts.",
      features: ["Traditional architecture", "Living culture", "Community life", "Authentic experience"],
      type: "Village",
      icon: <Landmark size={40} />
    },
    {
      name: "Historic Churches & Monasteries",
      location: "Throughout Wolaita Zone",
      description: "Ancient Ethiopian Orthodox churches and monasteries with religious artifacts, manuscripts, and traditional religious art reflecting Wolaita's Christian heritage.",
      features: ["Religious art", "Ancient manuscripts", "Spiritual significance", "Traditional ceremonies"],
      type: "Religious",
      icon: <Church size={40} />
    },
    {
      name: "Areka Market Area",
      location: "Areka Town",
      description: "Historic market town that has served as a commercial hub for centuries. Traditional market practices and architectural heritage preserved.",
      features: ["Traditional market", "Commercial heritage", "Local crafts", "Cultural exchange"],
      type: "Market",
      icon: <Landmark size={40} />
    },
    {
      name: "Boditi Agricultural Heritage",
      location: "Boditi Woreda",
      description: "Region renowned for its exemplary Enset cultivation and traditional agricultural practices. Living museum of sustainable farming methods.",
      features: ["Enset cultivation", "Traditional farming", "Agricultural innovation", "Cultural landscape"],
      type: "Agricultural",
      icon: <Trees size={40} />
    },
  ];

  const districts = [
    {
      name: "Wolaita Sodo",
      heritage: "Capital city with royal palace sites, modern museums, and administrative heritage",
      highlights: "Kawo's palace remains, urban cultural centers"
    },
    {
      name: "Damot Gale",
      heritage: "Sacred mountain, ancient settlements, and panoramic viewpoints",
      highlights: "Damot Gale Mountain, traditional villages"
    },
    {
      name: "Areka",
      heritage: "Historic market town and agricultural center",
      highlights: "Traditional markets, commercial heritage"
    },
    {
      name: "Boditi",
      heritage: "Prime Enset cultivation region and agricultural heritage",
      highlights: "Agricultural practices, Enset processing sites"
    },
    {
      name: "Humbo",
      heritage: "Natural forests and traditional conservation areas",
      highlights: "Forest reserves, community conservation"
    },
    {
      name: "Offa",
      heritage: "Ancient monuments and archaeological sites",
      highlights: "Stone structures, burial sites"
    },
  ];

  return (
    <>
      <Helmet>
        <title>Heritage Sites of Wolaita | Natural & Cultural Landmarks</title>
        <meta name="description" content="Explore the natural wonders and historical sites of Wolaita - from sacred mountains to ancient palaces across different districts." />
      </Helmet>

      <PageHero
        title={t('heritage.title')}
        subtitle={t('heritage.subtitle')}
        badge="Landmarks & Sites"
        icon={<Camera size={64} />}
      />

      {/* Introduction */}
      <Section className="bg-stone-50 dark:bg-stone-900">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
              A Land Rich in Heritage
            </h2>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              Wolaita is blessed with diverse landscapes—from sacred mountains to fertile river valleys—and rich historical sites that span centuries. Each district holds unique treasures: natural wonders shaped by geology and climate, and cultural landmarks created by generations of Wolaita people. These sites are not just tourist destinations; they are living connections to ancestral heritage and environmental stewardship.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Natural Heritage Sites */}
      <Section className="bg-white dark:bg-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Mountain className="mx-auto mb-4 text-green-600 dark:text-green-400" size={64} />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Natural Heritage
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Mountains, lakes, forests, and valleys shaped by nature and protected by tradition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {naturalSites.map((site, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-green-50 to-yellow-50 dark:from-stone-900 dark:to-stone-700 p-8 rounded-2xl shadow-lg border-l-4 border-green-600 hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-green-600 to-yellow-600 rounded-lg text-white shadow-lg">
                  {site.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-1">
                    {site.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-orange-700 dark:text-orange-400 mb-2">
                    <MapPin size={16} />
                    <span>{site.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                {site.description}
              </p>

              <div className="border-t border-stone-300 dark:border-stone-600 pt-4">
                <h4 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {site.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white dark:bg-stone-800 px-3 py-1 rounded-full border border-green-300 dark:border-green-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Cultural Heritage Sites */}
      <Section className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-stone-900 dark:to-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Landmark className="mx-auto mb-4 text-orange-600 dark:text-orange-400" size={64} />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Cultural & Historical Sites
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Archaeological treasures, sacred spaces, and living heritage across Wolaita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {culturalSites.map((site, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg border-t-4 border-yellow-400 hover:shadow-2xl transition-all group"
            >
              <div className="inline-block p-4 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full text-white mb-4 shadow-lg group-hover:scale-110 transition-transform">
                {site.icon}
              </div>

              <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                {site.name}
              </h3>

              <div className="flex items-center gap-2 text-sm text-red-700 dark:text-red-400 mb-3">
                <MapPin size={14} />
                <span>{site.location}</span>
              </div>

              <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4 text-sm">
                {site.description}
              </p>

              <div className="border-t border-stone-300 dark:border-stone-600 pt-3">
                <div className="flex flex-wrap gap-2">
                  {site.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Traditional Architecture Showcase */}
      <Section className="bg-white dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Traditional Tukul Architecture
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Living heritage — authentic Wolaita houses that have sheltered families for generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img 
              src={traditionalHouse1} 
              alt="Traditional Wolaita Tukul house with thatched roof" 
              className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Traditional Tukul House</h3>
                <p className="text-stone-200 leading-relaxed">
                  Round structure with conical thatched roof made from local grass and bamboo. Built using ancestral techniques passed down through generations.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">Indigenous Architecture</span>
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">Living Heritage</span>
                </div>
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
            <img 
              src={traditionalHouse2} 
              alt="Traditional Wolaita house with wooden door entrance" 
              className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Sustainable Construction</h3>
                <p className="text-stone-200 leading-relaxed">
                  Mud walls plastered with natural materials and wooden door entrance. Climate-adapted design keeps homes cool in heat and warm during cold nights.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">Eco-Friendly</span>
                  <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">Community Built</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick facts about Tukul */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-12"
        >
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-stone-800 dark:to-stone-700 p-8 rounded-2xl shadow-lg">
            <h4 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4 text-center">
              Why Traditional Houses Matter
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100% Natural</div>
                <p className="text-sm text-stone-600 dark:text-stone-300">Built entirely from locally sourced sustainable materials</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">Centuries Old</div>
                <p className="text-sm text-stone-600 dark:text-stone-300">Construction techniques preserved for generations</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">Community</div>
                <p className="text-sm text-stone-600 dark:text-stone-300">Built collectively by neighbors working together</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Districts Overview */}
      <Section className="bg-stone-50 dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Heritage by District
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Each district of Wolaita holds unique heritage treasures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {districts.map((district, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg border-l-4 border-red-600 hover:shadow-2xl transition-all"
            >
              <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">
                {district.name}
              </h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                {district.heritage}
              </p>
              <div className="bg-yellow-50 dark:bg-stone-900 p-3 rounded-lg">
                <p className="text-sm font-semibold text-orange-700 dark:text-orange-400">
                  Highlights: {district.highlights}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Conservation Message */}
      <Section className="bg-gradient-to-br from-green-900 via-stone-900 to-orange-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Trees className="mx-auto mb-6 text-yellow-400" size={80} />
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Preserving Heritage for Future Generations
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-stone-200">
              <p>
                These heritage sites—both natural and cultural—are irreplaceable treasures that connect current generations to their ancestors and the land. Conservation efforts combine traditional knowledge with modern preservation techniques to protect these sites.
              </p>
              <p>
                Community participation is essential. Local elders serve as guardians of sacred sites, youth engage in environmental conservation, and cultural organizations document and preserve historical landmarks. Tourism, when conducted responsibly, supports conservation and provides economic benefits.
              </p>
              <p className="text-xl font-bold text-yellow-300 pt-4">
                "Protecting our heritage sites is protecting our identity."
              </p>
            </div>

            {/* Flag decoration */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mx-auto w-48 h-4 rounded-full mt-12 flex overflow-hidden shadow-2xl"
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

export default HeritageSites;