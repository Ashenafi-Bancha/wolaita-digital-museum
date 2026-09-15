import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import { motion } from 'motion/react';
import { Coins, TrendingUp, Users, Scale, Crown, Landmark, ShieldCheck, Sparkles, BadgeCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Import authentic Marccuwaa currency images
import marccuwaaIronBars from 'figma:asset/d68f533a46e1f46727cb03fe255ee67d84d38637.png';
import marccuwaa3DRender from 'figma:asset/7fe72f375854321789c8355029c9ea0903352cfd.png';

const Marccuwaa = () => {
  const { t } = useLanguage();
  const currencyFeatures = [
    {
      icon: <Coins size={40} />,
      title: "Iron Currency Bars",
      description: "Marccuwaa consisted of iron bars of standardized weight and size, serving as the primary medium of exchange in the Wolaita Kingdom.",
      color: "from-stone-600 to-stone-800"
    },
    {
      icon: <Crown size={40} />,
      title: "Royal Authority",
      description: "The Kawo (King) controlled the production and distribution of Marccuwaa, ensuring quality standards and preventing counterfeiting.",
      color: "from-yellow-600 to-orange-700"
    },
    {
      icon: <Scale size={40} />,
      title: "Standardized Value",
      description: "Each Marccuwaa bar had a fixed value based on weight and quality, enabling fair trade and economic transactions throughout the kingdom.",
      color: "from-red-600 to-orange-700"
    },
  ];

  const economicRole = [
    {
      title: "Trade & Commerce",
      description: "Marccuwaa facilitated trade within Wolaita and with neighboring kingdoms. Merchants used it to purchase cattle, grains, textiles, and other goods.",
      icon: <TrendingUp size={32} />
    },
    {
      title: "Taxation System",
      description: "Citizens paid taxes to the Kawo in Marccuwaa, supporting the royal administration, military, and public works.",
      icon: <Landmark size={32} />
    },
    {
      title: "Bride Price Payment",
      description: "Marccuwaa was commonly used in marriage negotiations as part of the bride price (Gebbara), along with cattle and agricultural products.",
      icon: <Users size={32} />
    },
    {
      title: "Wealth Storage",
      description: "Families accumulated Marccuwaa as a store of wealth and symbol of prosperity. The number of bars indicated a household's economic status.",
      icon: <Coins size={32} />
    },
  ];

  const historicalContext = [
    {
      period: "Kingdom Era (Pre-1894)",
      description: "Marccuwaa was the official currency of the independent Wolaita Kingdom, minted and controlled by royal authority. It enabled a sophisticated economy.",
      status: "Active Use"
    },
    {
      period: "Post-Incorporation (1894-1920s)",
      description: "After Wolaita's incorporation into the Ethiopian Empire, Marccuwaa continued in local use but gradually gave way to the Ethiopian Birr.",
      status: "Declining Use"
    },
    {
      period: "Modern Era (1930s-Present)",
      description: "Marccuwaa ceased as currency but remained symbolically important. Historical specimens are preserved as cultural artifacts and heritage items.",
      status: "Historical Artifact"
    },
  ];

  const culturalSignificance = [
    {
      title: "Economic Sophistication",
      point: "The existence of Marccuwaa demonstrates Wolaita's advanced economic system and state organization during the kingdom period."
    },
    {
      title: "Independence Symbol",
      point: "Having its own currency symbolized Wolaita's sovereignty and independence before incorporation into the Ethiopian Empire."
    },
    {
      title: "Metallurgical Skill",
      point: "The production of standardized iron bars showcased Wolaita's metalworking expertise and technological advancement."
    },
    {
      title: "Trade Networks",
      point: "Marccuwaa enabled Wolaita to engage in long-distance trade, connecting with neighboring regions and kingdoms economically."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Marccuwaa - Traditional Wolaita Currency | Economic Heritage</title>
        <meta name="description" content="Discover Marccuwaa, the traditional iron bar currency of the Wolaita Kingdom - a symbol of economic sophistication and sovereignty." />
      </Helmet>

      {/* Hero Section - Clean & Modern */}
      <div className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-stone-100 dark:from-stone-900 dark:via-stone-800 dark:to-orange-950 py-20 md:py-32 overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 left-20 w-64 h-64 bg-orange-400 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Flag accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="mx-auto w-24 h-2 rounded-full mb-8 flex overflow-hidden shadow-lg"
            >
              <div className="flex-1 bg-black"></div>
              <div className="flex-1 bg-yellow-400"></div>
              <div className="flex-1 bg-red-600"></div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.2 }}
              className="mb-6"
            >
              <Coins className="mx-auto text-orange-600 dark:text-orange-400" size={80} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-serif font-bold text-stone-900 dark:text-white mb-6"
            >
              {t('marccuwaa.title')}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-8 py-3 mb-6 shadow-lg"
            >
              <p className="text-xl md:text-2xl text-white font-serif font-bold">
                {t('marccuwaa.subtitle')}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-stone-700 dark:text-stone-300 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              An iron bar currency that powered the economy of the independent Wolaita Kingdom for centuries, 
              demonstrating advanced economic sophistication and royal governance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="inline-flex items-center gap-2 bg-white dark:bg-stone-800 rounded-full px-6 py-3 shadow-lg border-2 border-yellow-400">
                <Crown className="text-yellow-600 dark:text-yellow-400" size={20} />
                <span className="text-stone-900 dark:text-stone-100 font-bold">Royal Currency</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white dark:bg-stone-800 rounded-full px-6 py-3 shadow-lg border-2 border-orange-400">
                <BadgeCheck className="text-orange-600 dark:text-orange-400" size={20} />
                <span className="text-stone-900 dark:text-stone-100 font-bold">Pre-1894 Era</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 3D Visualization Section - Clean Side-by-Side */}
      <Section className="bg-white dark:bg-stone-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="text-orange-600 dark:text-orange-400" size={20} />
              <span className="text-orange-700 dark:text-orange-300 font-semibold text-sm">3D VISUALIZATION</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
              Understanding Marccuwaa
            </h2>

            <div className="space-y-6 text-stone-700 dark:text-stone-300">
              <p className="text-lg leading-relaxed">
                <strong className="text-orange-600 dark:text-orange-400">Marccuwaa</strong> was the traditional 
                currency of the Wolaita Kingdom, consisting of <span className="font-semibold">standardized iron bars</span> used 
                as a medium of exchange. These iron bars were carefully produced under royal supervision, ensuring 
                consistent weight, quality, and value.
              </p>

              <p className="text-lg leading-relaxed">
                Unlike modern paper money or coins, Marccuwaa had <span className="font-semibold text-yellow-600 dark:text-yellow-400">intrinsic 
                value</span>—the iron itself was useful for making tools, weapons, and agricultural implements. 
                This dual nature made it both a currency and a commodity, providing stability to the Wolaita economy.
              </p>

              <p className="text-lg leading-relaxed">
                The existence of Marccuwaa demonstrates that Wolaita was not merely a tribal society but a 
                <span className="font-bold text-red-600 dark:text-red-400"> sophisticated kingdom with organized economic systems</span>, 
                including currency production, taxation, trade networks, and wealth accumulation mechanisms.
              </p>
            </div>

            {/* Key Facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-5 rounded-xl border-2 border-yellow-300 dark:border-yellow-700">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">5-7</div>
                <div className="text-sm text-stone-700 dark:text-stone-300">Bars per Bundle</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-5 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">~1kg</div>
                <div className="text-sm text-stone-700 dark:text-stone-300">Standard Weight</div>
              </div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative bg-gradient-to-br from-stone-100 to-orange-100 dark:from-stone-800 dark:to-stone-700 rounded-3xl p-8 md:p-12 shadow-2xl">
              {/* Subtle top lighting effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent dark:from-white/10 rounded-3xl pointer-events-none"></div>
              
              <img
                src={marccuwaa3DRender}
                alt="3D representation of Marccuwaa iron bars"
                className="w-full h-auto relative z-10"
              />

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-yellow-500 rounded-tl-2xl"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-red-500 rounded-br-2xl"></div>

              {/* Floating label */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-stone-200 dark:border-stone-700">
                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 mb-1">
                  <ShieldCheck size={16} />
                  <div className="text-xs font-bold tracking-wide">AUTHENTICATED SPECIMEN</div>
                </div>
                <div className="text-sm font-bold text-stone-900 dark:text-stone-100">Wolaita Kingdom Currency</div>
                <div className="text-xs text-stone-600 dark:text-stone-400">Pre-1894 | Royal Mint</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Original Marccuwaa Bars - Modern Side Layout */}
      <Section className="bg-gradient-to-br from-stone-50 to-orange-50 dark:from-stone-900 dark:to-stone-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={marccuwaaIronBars}
                alt="Original Marccuwaa iron currency bars - Historical artifact"
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <BadgeCheck size={20} className="text-yellow-400" />
                  <span className="text-sm font-bold tracking-wide">HISTORICAL ARTIFACT</span>
                </div>
                <p className="text-xs text-stone-200">Original Marccuwaa iron bars from the Wolaita Kingdom era</p>
              </div>

              {/* Decorative frame corners */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-yellow-400"></div>
              <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-yellow-400"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-red-500"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-red-500"></div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 rounded-full px-4 py-2 mb-6">
              <Crown className="text-red-600 dark:text-red-400" size={20} />
              <span className="text-red-700 dark:text-red-300 font-semibold text-sm">ORIGINAL ARTIFACT</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
              The Original Marccuwaa
            </h2>

            <div className="space-y-5 text-stone-700 dark:text-stone-300">
              <p className="text-lg leading-relaxed">
                These are the <span className="font-bold text-orange-600 dark:text-orange-400">authentic iron currency bars</span> that 
                once circulated throughout the Wolaita Kingdom. Each bar was meticulously crafted to standardized specifications, 
                ensuring consistent value and facilitating fair trade across the realm.
              </p>

              <p className="text-lg leading-relaxed">
                Notice the distinctive <span className="font-semibold text-yellow-600 dark:text-yellow-400">curved shape at the ends</span> — 
                this design feature served both practical and security purposes. The bars could be easily stacked, 
                transported, and authenticated by royal officials and merchants.
              </p>

              <p className="text-lg leading-relaxed">
                The <span className="font-semibold">multiple bars bundled together</span> represent a common trading unit. 
                Merchants would carry bundles of 5-7 bars for larger transactions, while individual bars served 
                for smaller purchases in local markets.
              </p>

              <div className="bg-white dark:bg-stone-800 rounded-2xl p-6 shadow-lg border-2 border-orange-300 dark:border-orange-700 mt-6">
                <div className="flex items-start gap-3">
                  <Scale className="text-orange-600 dark:text-orange-400 mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-stone-100 mb-2">Physical Evidence of Sovereignty</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                      These artifacts prove that Wolaita operated as a sophisticated kingdom with its own monetary 
                      system, predating European colonial influence in the region.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Artifact Details */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white dark:bg-stone-800 rounded-xl shadow-md border border-stone-200 dark:border-stone-700">
                <div className="text-2xl font-bold text-stone-900 dark:text-yellow-400">Iron</div>
                <div className="text-xs text-stone-600 dark:text-stone-400 mt-1">Material</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-stone-800 rounded-xl shadow-md border border-stone-200 dark:border-stone-700">
                <div className="text-2xl font-bold text-stone-900 dark:text-orange-400">Pre-1894</div>
                <div className="text-xs text-stone-600 dark:text-stone-400 mt-1">Era</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-stone-800 rounded-xl shadow-md border border-stone-200 dark:border-stone-700">
                <div className="text-2xl font-bold text-stone-900 dark:text-red-400">Royal</div>
                <div className="text-xs text-stone-600 dark:text-stone-400 mt-1">Authority</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Currency Features */}
      <Section className="bg-white dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Characteristics of Marccuwaa
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Understanding the physical and systemic features of Wolaita's currency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currencyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative bg-gradient-to-br from-stone-50 to-orange-50 dark:from-stone-800 dark:to-stone-700 p-8 rounded-2xl shadow-xl text-center overflow-hidden group hover:shadow-2xl transition-all"
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className={`inline-block p-4 bg-gradient-to-br ${feature.color} rounded-full text-white mb-6 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Economic Role */}
      <Section className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-stone-900 dark:to-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Economic Role
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            How Marccuwaa powered the Wolaita economy and society.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {economicRole.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-stone-800 p-8 rounded-xl shadow-lg border-l-4 border-yellow-400 hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-yellow-400 to-red-600 rounded-lg text-white shadow-lg shrink-0">
                  {role.icon}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                    {role.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Historical Timeline */}
      <Section className="bg-white dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Historical Timeline
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            The journey of Marccuwaa from active currency to cultural heritage.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {historicalContext.map((period, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-gradient-to-r from-stone-50 to-orange-50 dark:from-stone-800 dark:to-stone-700 p-8 rounded-xl shadow-lg border-l-4 border-red-600 relative hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
                  {period.period}
                </h3>
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                  period.status === "Active Use" ? "bg-green-600 text-white" :
                  period.status === "Declining Use" ? "bg-yellow-600 text-black" :
                  "bg-stone-600 text-white"
                }`}>
                  {period.status}
                </span>
              </div>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-lg">
                {period.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Cultural Significance */}
      <Section className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-stone-900 dark:to-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Why Marccuwaa Matters
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            The lasting significance of Wolaita's traditional currency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {culturalSignificance.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-stone-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                    {item.point}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Legacy Section */}
      <Section className="bg-gradient-to-br from-stone-900 via-orange-900 to-red-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Scale className="mx-auto mb-6 text-yellow-400" size={80} />
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
              A Legacy of Economic Power
            </h2>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-stone-200">
              <p>
                Though Marccuwaa is no longer in circulation, its historical existence stands as powerful evidence of Wolaita's advanced civilization. Few African societies south of the Sahara had their own currencies before colonial contact—Wolaita was among them.
              </p>
              <p>
                Today, rare specimens of Marccuwaa are preserved in museums and private collections as treasured artifacts. They remind Wolaita people of a time when their kingdom was economically independent, politically sovereign, and culturally powerful.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-yellow-300 pt-6">
                "Marccuwaa: The iron that bought kingdoms and built legacies."
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

export default Marccuwaa;
