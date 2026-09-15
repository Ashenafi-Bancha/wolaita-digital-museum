import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import { motion } from 'motion/react';
import { Music as MusicIcon, Mic2, Heart, Skull, Hammer, Sparkles, Users, Drum } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Music = () => {
  const { t } = useLanguage();
  const musicCategories = [
    {
      name: "Cultural & Ceremonial Music",
      icon: <Sparkles size={40} />,
      description: "Traditional songs performed during important cultural events, rituals, and community gatherings. These songs preserve ancient stories and customs.",
      examples: ["Gifaataa New Year songs", "Inauguration ceremonies", "Community blessing songs", "Harvest celebrations"],
      color: "orange"
    },
    {
      name: "Love Songs (Yefikir Zefan)",
      icon: <Heart size={40} />,
      description: "Romantic melodies expressing love, courtship, and the beauty of relationships. These songs are often poetic and deeply emotional.",
      examples: ["Courtship serenades", "Wedding love songs", "Separation laments", "Reunion celebrations"],
      color: "red"
    },
    {
      name: "Funeral & Memorial Songs",
      icon: <Skull size={40} />,
      description: "Solemn songs performed during mourning periods to honor the deceased, comfort the bereaved, and celebrate the life lived.",
      examples: ["Burial procession songs", "Memorial commemorations", "Ancestor remembrance", "Consolation melodies"],
      color: "stone"
    },
    {
      name: "Work Songs (Ye Sira Zefan)",
      icon: <Hammer size={40} />,
      description: "Rhythmic songs sung during agricultural work, construction, and communal labor to coordinate efforts and make work enjoyable.",
      examples: ["Plowing songs", "Harvesting rhythms", "House building chants", "Coffee processing songs"],
      color: "green"
    },
    {
      name: "War & Heroic Songs",
      icon: <Users size={40} />,
      description: "Epic ballads celebrating warriors, historical battles, and the courage of Wolaita heroes and kings.",
      examples: ["Battle march songs", "Victory celebrations", "Warrior praise songs", "Historical epic ballads"],
      color: "yellow"
    },
    {
      name: "Children's Songs & Lullabies",
      icon: <MusicIcon size={40} />,
      description: "Gentle melodies and playful songs for entertaining, educating, and soothing children.",
      examples: ["Lullabies", "Game songs", "Counting rhymes", "Animal imitation songs"],
      color: "blue"
    }
  ];

  const notableMusicians = [
    {
      name: "Alemayehu Eshete (The Ethiopian Elvis)",
      era: "1960s-Present",
      contribution: "Pioneer of modern Ethiopian music who popularized Wolaita traditional melodies in urban settings.",
      specialty: "Cultural fusion music"
    },
    {
      name: "Wolaita Traditional Music Ensemble",
      era: "Various generations",
      contribution: "Groups of traditional musicians preserving authentic Wolaita musical heritage through performances and teaching.",
      specialty: "Ceremonial and traditional music"
    },
    {
      name: "Contemporary Wolaita Artists",
      era: "2000s-Present",
      contribution: "Modern musicians blending traditional Wolaita rhythms with contemporary Ethiopian and international styles.",
      specialty: "Modern fusion"
    },
    {
      name: "Village Elders & Oral Historians",
      era: "Throughout history",
      contribution: "Keepers of ancient songs and musical traditions passed down through generations orally.",
      specialty: "Traditional preservation"
    }
  ];

  const instruments = [
    {
      name: "Kebero (Drum)",
      description: "Large double-headed drum used in religious and cultural ceremonies. The heartbeat of Wolaita music.",
      icon: <Drum size={32} />
    },
    {
      name: "Masinko (One-string fiddle)",
      description: "Single-stringed bowed instrument creating haunting, melodic sounds for storytelling and emotional expression.",
      icon: <MusicIcon size={32} />
    },
    {
      name: "Krar (Lyre)",
      description: "Bowl-shaped lyre with 5-6 strings, producing rhythmic accompaniment for songs and dances.",
      icon: <MusicIcon size={32} />
    },
    {
      name: "Washint (Flute)",
      description: "Bamboo flute creating melodious tunes, often played by shepherds and during peaceful moments.",
      icon: <MusicIcon size={32} />
    },
    {
      name: "Hand Clapping & Body Percussion",
      description: "Rhythmic patterns created through clapping, chest beating, and foot stomping during group performances.",
      icon: <Users size={32} />
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { border: string; icon: string; hover: string }> = {
      orange: { border: "border-orange-500", icon: "text-orange-600", hover: "hover:border-orange-600" },
      red: { border: "border-red-500", icon: "text-red-600", hover: "hover:border-red-600" },
      stone: { border: "border-stone-500", icon: "text-stone-600", hover: "hover:border-stone-600" },
      green: { border: "border-green-500", icon: "text-green-600", hover: "hover:border-green-600" },
      yellow: { border: "border-yellow-500", icon: "text-yellow-600", hover: "hover:border-yellow-600" },
      blue: { border: "border-blue-500", icon: "text-blue-600", hover: "hover:border-blue-600" },
    };
    return colorMap[color] || colorMap.orange;
  };

  return (
    <>
      <Helmet>
        <title>Wolaita Music & Musicians | Traditional Songs & Melodies</title>
        <meta name="description" content="Explore the rich musical heritage of Wolaita - from ceremonial songs to love ballads, work rhythms to funeral laments. Discover traditional instruments and notable musicians." />
      </Helmet>

      <PageHero
        title={t('music.title')}
        subtitle={t('music.subtitle')}
        badge="Traditional Melodies"
        image="https://images.unsplash.com/photo-1770223625592-3483e07645f5?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjB0cmFkaXRpb25hbCUyMG11c2ljaWFucyUyMHBlcmZvcm1pbmd8ZW58MXx8fHwxNzcyNzQ3NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="Wolaita musicians performing"
      />

      {/* Introduction */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
              Wolaita music is an integral part of the cultural identity, woven into every aspect of life from birth to death, from planting to harvest, from sorrow to celebration. Each song carries the wisdom of ancestors and the spirit of the community.
            </p>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              Music serves not only as entertainment but as a vital tool for education, social cohesion, spiritual expression, and historical preservation. Through songs, the Wolaita people pass down knowledge, values, and stories across generations.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Music Categories */}
      <Section className="bg-stone-50 dark:bg-stone-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Categories of Wolaita Music
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400">
            Each type of music serves a unique purpose in Wolaita society
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {musicCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`feature-card-3d p-8 border-t-4 ${colors.border}`}
              >
                <div className={`${colors.icon} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">
                  {category.name}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-stone-700 dark:text-stone-400">Examples:</p>
                  <ul className="text-sm text-stone-600 dark:text-stone-400 space-y-1">
                    {category.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2">
                        <span className={`${colors.icon} mt-0.5`}>•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Traditional Instruments */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Traditional Instruments
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            The authentic sounds that create the distinctive melodies of Wolaita music
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {instruments.map((instrument, index) => (
            <motion.div
              key={instrument.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-stone-50 dark:bg-stone-800 rounded-lg p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="text-orange-600 dark:text-orange-400">
                  {instrument.icon}
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                    {instrument.name}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                    {instrument.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instrument Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img loading="lazy" decoding="async"
              src="https://images.unsplash.com/photo-1764670085286-55cd79507a72?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBtdXNpYyUyMGluc3RydW1lbnRzfGVufDF8fHx8MTc3Mjc0Nzc5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Traditional Wolaita instruments"
              className="w-full h-80 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img loading="lazy" decoding="async"
              src="https://images.unsplash.com/photo-1522168709594-942fcde3d332?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMEFmcmljYW4lMjBkcnVtcyUyMHBlcmN1c3Npb258ZW58MXx8fHwxNzcyNzQ3NzkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Traditional percussion instruments"
              className="w-full h-80 object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Notable Musicians */}
      <Section className="bg-stone-50 dark:bg-stone-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Notable Musicians & Performers
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            Guardians and innovators of Wolaita musical heritage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {notableMusicians.map((musician, index) => (
            <motion.div
              key={musician.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="feature-card-3d p-8 border-l-4 border-[rgb(var(--wolaita-gold))]"
            >
              <div className="flex items-start gap-3 mb-4">
                <Mic2 size={28} className="text-yellow-600 dark:text-yellow-400" />
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-1">
                    {musician.name}
                  </h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-400 font-semibold">
                    {musician.era}
                  </p>
                </div>
              </div>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-3">
                {musician.contribution}
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full font-medium">
                  {musician.specialty}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Musical Performance Image */}
      <Section>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
        >
          <img loading="lazy" decoding="async"
            src="https://images.unsplash.com/photo-1764145144753-922ae256714b?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjBjdWx0dXJhbCUyMGNlbGVicmF0aW9uJTIwbXVzaWMlMjBkYW5jZXxlbnwxfHx8fDE3NzI3NDc3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Wolaita cultural music performance"
            className="w-full h-96 object-cover"
          />
        </motion.div>
        <p className="text-center text-stone-600 dark:text-stone-400 mt-6 italic">
          Music and dance are inseparable in Wolaita culture, creating a complete cultural experience
        </p>
      </Section>

      {/* Cultural Significance */}
      <Section className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-stone-900 dark:to-stone-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6">
              The Living Tradition
            </h2>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
              Wolaita music continues to thrive as a living tradition, adapting to modern times while preserving its ancient essence. Young musicians learn from elders, ensuring that the songs, rhythms, and stories are never forgotten.
            </p>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              Whether performed at Gifaataa celebrations, weddings, funerals, or community gatherings, music remains the soul of Wolaita culture - connecting the past to the present and ensuring the continuity of cultural identity for future generations.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Music;
