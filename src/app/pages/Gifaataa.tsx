import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import { motion } from 'motion/react';
import { Calendar, Sun, Music, Users, Sparkles, Gift, Heart, Crown, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import horseCavalry from 'figma:asset/93435183683a01f5d2dca05ceef617677a14f823.webp';
import communityDance from 'figma:asset/0c5453a3f4082a233ee48fe947d0d717b1f194b2.webp';
import traditionalHome from 'figma:asset/bed8fb00e1b7eadb1218b23e901e01caf8ca3e86.webp';

const Gifaataa = () => {
  const { t } = useLanguage();
  const celebrations = [
    {
      icon: <Sun size={40} />,
      title: "New Beginnings",
      description: "Gifaataa marks the start of the Wolaita New Year, symbolizing renewal, hope, and fresh starts. Celebrated with joy and gratitude."
    },
    {
      icon: <Users size={40} />,
      title: "Community Gathering",
      description: "Families and communities come together, strengthening bonds through shared meals, traditional songs, and collective celebrations."
    },
    {
      icon: <Music size={40} />,
      title: "Traditional Music & Dance",
      description: "The day features vibrant performances of traditional Wolaita music, dance, and cultural expressions that have been passed down for generations."
    },
    {
      icon: <Gift size={40} />,
      title: "Feasting & Sharing",
      description: "Abundant traditional foods are prepared and shared. Special dishes like Kocho, Kurkufa, and meat dishes are served to honor the occasion."
    },
  ];

  const traditions = [
    {
      title: "Wearing Dingguza",
      description: "People dress in their finest Dingguza (traditional cloth with black, yellow, and red colors) and other cultural attire, displaying pride in Wolaita identity.",
    },
    {
      title: "Blessing Ceremonies",
      description: "Elders offer blessings and prayers for prosperity, peace, and good harvest in the coming year. Traditional rituals are performed.",
    },
    {
      title: "Coffee Ceremony",
      description: "The sacred coffee ceremony brings people together, symbolizing hospitality, respect, and community unity during the celebration.",
    },
    {
      title: "Gift Exchange",
      description: "Gifts are exchanged among family members and friends, reinforcing social bonds and expressing goodwill for the new year.",
    },
    {
      title: "Agricultural Rituals",
      description: "Special ceremonies honor the land and agricultural abundance. Farmers give thanks for past harvests and pray for future prosperity.",
    },
    {
      title: "Youth Activities",
      description: "Traditional games, sports, and activities engage the youth, passing cultural knowledge to the next generation through play and competition.",
    },
  ];

  const greetings = [
    { wolaita: "Yooyo Gifaataa!", english: "Happy New Year!", context: "Main greeting" },
    { wolaita: "Gifaatan galatada!", english: "Happy New Year!", context: "Celebration" },
    { wolaita: "Gifaatan seeraa gido!", english: "May the New Year be good!", context: "Blessing" },
  ];

  return (
    <>
      <Helmet>
        <title>Gifaataa - Wolaita New Year | Cultural Celebration</title>
        <meta name="description" content="Discover Gifaataa, the Wolaita New Year celebration - a globally recognized cultural festival marking renewal, community, and heritage." />
      </Helmet>

      {/* Hero — 3D text only, no background image */}
      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden gifaataa-hero-bg">
        <div className="yooyo-gifaataa-glow" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-32 bg-gradient-to-r from-transparent via-[rgb(var(--wolaita-gold))]/30 to-transparent"
              style={{ top: `${15 + i * 14}%`, left: `${5 + i * 12}%`, rotate: `${-20 + i * 8}deg` }}
              animate={{ opacity: [0.2, 0.6, 0.2], scaleX: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative mb-8"
            >
              <span className="yooyo-gifaataa-3d wolaita-premium-gold-glow">
                Yooyo Gifaataa!
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="badge-wolaita mx-auto mb-6"
            >
              <Sparkles size={14} className="text-[rgb(var(--wolaita-gold))]" />
              <span>{t('gifaataa.subtitle')}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mx-auto max-w-3xl px-4 text-lg leading-relaxed text-white/75 md:text-xl"
            >
              A globally recognized celebration of renewal, community, and cultural pride — when Wolaita shines brightest.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-10 flex flex-wrap justify-center gap-3"
            >
              <span className="badge-wolaita">
                <Calendar size={14} className="text-[rgb(var(--wolaita-gold))]" />
                Annual Celebration
              </span>
              <span className="badge-wolaita">
                <Heart size={14} className="text-[rgb(var(--wolaita-gold))]" />
                Global Recognition
              </span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="mb-2 text-xs font-bold uppercase tracking-widest">Discover More</div>
          <div className="mx-auto flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-1 rounded-full bg-white/60"
            />
          </div>
        </motion.div>

        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </div>

      {/* Majestic Horse Cavalry Section */}
      <Section className="bg-stone-950 dark:bg-black relative overflow-hidden py-0">
        <div className="relative w-full">
          {/* Full-width image */}
          <div className="relative h-[70vh] md:h-[80vh] lg:h-screen">
            <img loading="lazy" decoding="async"
              src={horseCavalry}
              alt="Traditional Wolaita Horse Cavalry in Gifaataa Parade"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlays for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
          </div>

          {/* Overlay content */}
          <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
              >
                <div className="badge-wolaita mb-6 inline-flex">
                  <Crown size={14} className="text-[rgb(var(--wolaita-gold))]" />
                  <span>The Grand Procession</span>
                </div>
                
                <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  The Legendary Horse Cavalry
                </h2>
                
                <p className="mx-auto max-w-3xl text-xl leading-relaxed text-stone-200 md:text-2xl">
                  Adorned in the iconic <span className="font-bold text-[rgb(var(--wolaita-gold))]">Dingguza</span>, 
                  the ceremonial horse cavalry rides through the streets in a spectacular display of cultural pride. 
                  This ancient tradition symbolizes strength, unity, and the warrior heritage of Wolaita.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* What is Gifaataa */}
      <Section className="bg-stone-50 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="card-accent-bar mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
              What is Gifaataa?
            </h2>
            <div className="prose prose-lg max-w-none text-stone-700 dark:text-stone-300 space-y-6">
              <p className="text-xl leading-relaxed">
                <strong className="text-[rgb(var(--wolaita-forest))] dark:text-[rgb(var(--wolaita-gold))]">Gifaataa</strong> is the Wolaita New Year celebration, one of the most significant cultural events in Wolaita heritage. It marks the beginning of a new agricultural cycle and serves as a time for communal gathering, thanksgiving, and cultural expression.
              </p>
              <p className="text-xl leading-relaxed">
                Unlike the Gregorian calendar, Gifaataa follows the traditional <strong>Wolaita Calendar</strong>, aligning with agricultural seasons and ancestral timekeeping systems. The celebration typically falls in the Ethiopian month corresponding to late June or early July.
              </p>
              <p className="text-xl leading-relaxed">
                During Gifaataa, the entire community comes alive with color, music, and joy. People wear their traditional <strong className="text-[rgb(var(--wolaita-forest))] dark:text-[rgb(var(--wolaita-gold))]">Dingguza</strong> cloth, perform cultural dances, share abundant feasts, and participate in rituals that have been preserved for centuries.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Community Dance - Split Layout */}
      <Section className="bg-stone-100 dark:bg-stone-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="surface-3d relative overflow-hidden rounded-3xl">
              <img loading="lazy" decoding="async"
                src={communityDance}
                alt="Community celebrating Gifaataa with traditional dance"
                className="w-full h-auto"
              />
            </div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -left-6 surface-3d rounded-2xl px-6 py-4 shadow-xl"
            >
              <div className="text-3xl font-bold text-[rgb(var(--wolaita-gold))]">1000+</div>
              <div className="text-sm text-stone-600 dark:text-stone-400">Community Members</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="badge-wolaita mb-6 inline-flex border-stone-200 bg-stone-900/5 text-stone-700 dark:border-white/10 dark:bg-white/5 dark:text-white/85">
              <Music size={14} className="text-[rgb(var(--wolaita-forest))] dark:text-[rgb(var(--wolaita-gold))]" />
              <span>Unity in Celebration</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
              The Sacred Dance of Unity
            </h2>

            <div className="space-y-4 text-lg text-stone-700 dark:text-stone-300">
              <p className="leading-relaxed">
                Thousands gather in traditional <span className="font-bold text-[rgb(var(--wolaita-forest))] dark:text-[rgb(var(--wolaita-gold))]">Dingguza attire</span>, 
                forming massive circles of celebration. The rhythmic movements and synchronized steps represent the heartbeat of Wolaita culture.
              </p>
              <p className="leading-relaxed">
                From children to elders, everyone participates in the traditional dances, creating an unforgettable spectacle of color, 
                movement, and joyful expression. The energy is electric, the connection profound.
              </p>
              <p className="leading-relaxed font-semibold text-[rgb(var(--wolaita-forest))] dark:text-[rgb(var(--wolaita-gold))]">
                This is more than a celebration — it's the living, breathing soul of Wolaita heritage.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[rgb(var(--wolaita-gold))]">100+</div>
                <div className="text-sm text-stone-600 dark:text-stone-400">Traditional Songs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[rgb(var(--wolaita-forest))]">24h</div>
                <div className="text-sm text-stone-600 dark:text-stone-400">Non-stop Celebration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-stone-700 dark:text-stone-300">∞</div>
                <div className="text-sm text-stone-600 dark:text-stone-400">Cultural Heritage</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Traditional Home Ceremonies */}
      <Section className="bg-stone-50 dark:bg-stone-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge-wolaita mb-6 inline-flex border-stone-200 bg-stone-900/5 text-stone-700 dark:border-white/10 dark:bg-white/5 dark:text-white/85">
              <Home size={14} className="text-[rgb(var(--wolaita-forest))] dark:text-[rgb(var(--wolaita-gold))]" />
              <span>Sacred Traditions</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
              Blessings in the Traditional Home
            </h2>

            <div className="space-y-4 text-lg text-stone-700 dark:text-stone-300">
              <p className="leading-relaxed">
                Inside the sacred space of traditional Wolaita homes, families gather for intimate blessing ceremonies. 
                Elders bestow wisdom and prayers upon the younger generation, ensuring cultural continuity.
              </p>
              <p className="leading-relaxed">
                The home becomes a temple where <span className="font-bold text-[rgb(var(--wolaita-forest))] dark:text-[rgb(var(--wolaita-gold))]">flowers, 
                traditional artifacts, and ceremonial items</span> create an atmosphere of reverence and celebration.
              </p>
              <p className="leading-relaxed">
                These private moments of connection are the foundation of Gifaataa's spiritual significance — 
                where heritage is not just remembered, but actively lived and passed forward.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="surface-3d p-4 rounded-xl">
                <div className="card-accent-bar mb-3" />
                <div className="font-bold text-stone-900 dark:text-stone-100 mb-1">Coffee Ceremony</div>
                <div className="text-sm text-stone-600 dark:text-stone-400">Symbol of hospitality and respect</div>
              </div>
              <div className="surface-3d p-4 rounded-xl">
                <div className="card-accent-bar mb-3" />
                <div className="font-bold text-stone-900 dark:text-stone-100 mb-1">Elders' Blessings</div>
                <div className="text-sm text-stone-600 dark:text-stone-400">Wisdom for the new year</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="surface-3d relative overflow-hidden rounded-3xl">
              <img loading="lazy" decoding="async"
                src={traditionalHome}
                alt="Traditional Wolaita home blessing ceremony during Gifaataa"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Key Elements of Celebration */}
      <Section className="bg-stone-100 dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="card-accent-bar mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            How Gifaataa is Celebrated
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            A festival that engages all senses and brings the entire community together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {celebrations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="surface-3d p-8 rounded-2xl text-center transition-all"
            >
              <div className="inline-block p-4 rounded-full bg-[rgb(var(--wolaita-gold))]/15 text-[rgb(var(--wolaita-forest))] dark:text-[rgb(var(--wolaita-gold))] mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">
                {item.title}
              </h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Traditions & Customs */}
      <Section className="bg-stone-50 dark:bg-stone-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="card-accent-bar mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Traditions & Customs
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Sacred practices that connect the present with ancestral wisdom.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {traditions.map((tradition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="surface-3d p-8 rounded-2xl transition-all"
            >
              <div className="card-accent-bar mb-4" />
              <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
                {tradition.title}
              </h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                {tradition.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Greetings */}
      <Section className="bg-stone-100 dark:bg-stone-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="card-accent-bar mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
              Gifaataa Greetings
            </h2>
            <p className="text-stone-600 dark:text-stone-300 text-lg">
              Traditional phrases to celebrate the New Year.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {greetings.map((greeting, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`surface-3d p-6 rounded-xl text-center ${index === 0 ? 'md:col-span-3 md:max-w-lg md:mx-auto' : ''}`}
              >
                <span className="badge-wolaita mb-3 inline-flex border-stone-200 bg-stone-900/5 text-stone-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70 text-[0.6rem]">
                  {greeting.context}
                </span>
                <h3 className={`font-serif font-bold text-stone-900 dark:text-stone-100 mb-2 ${index === 0 ? 'text-3xl md:text-4xl wolaita-premium-gold wolaita-premium-gold-glow' : 'text-2xl'}`}>
                  {greeting.wolaita}
                </h3>
                <p className="text-lg text-stone-700 dark:text-stone-300">
                  {greeting.english}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Global Recognition */}
      <Section className="bg-stone-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="mx-auto mb-6 text-[rgb(var(--wolaita-gold))]" size={48} />

            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              A Global Cultural Treasure
            </h2>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-stone-300">
              <p>
                Gifaataa has gained international recognition as one of Ethiopia's most vibrant and authentic cultural celebrations. UNESCO and cultural organizations worldwide have documented Gifaataa as an exemplary expression of indigenous heritage preservation.
              </p>
              <p>
                The celebration showcases how traditional societies maintain their identity while adapting to modern times. Gifaataa brings together generations, reinforces community values, and demonstrates the enduring strength of Wolaita culture.
              </p>
              <p className="text-2xl md:text-3xl font-bold wolaita-premium-gold wolaita-premium-gold-glow pt-6">
                "In Gifaataa, the past, present, and future of Wolaita unite in joyful celebration."
              </p>
            </div>

            <div className="section-divider mt-12" />
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Gifaataa;
