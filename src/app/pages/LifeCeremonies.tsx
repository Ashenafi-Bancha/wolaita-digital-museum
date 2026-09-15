import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import { motion } from 'motion/react';
import { Heart, Users, Flower2, HandHeart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LifeCeremonies = () => {
  const { t } = useLanguage();
  const marriageStages = [
    {
      title: "Courtship & Family Approval",
      description: "Marriage begins with family involvement. The groom's family sends elders (Shimagille) to the bride's family to formally request her hand in marriage. Both families must approve the union."
    },
    {
      title: "Bride Price (Gebbara)",
      description: "The groom's family offers cattle, grains, or monetary gifts to the bride's family, symbolizing respect and commitment. This is negotiated between families through mediators."
    },
    {
      title: "Engagement Ceremony",
      description: "A formal engagement celebration brings both families together. Gifts are exchanged, blessings are offered, and the wedding date is set."
    },
    {
      title: "Wedding Celebration (Michira)",
      description: "A grand feast lasting several days with abundant food, traditional music, dancing, and community participation. Both families wear Dingguza and celebrate with the entire community."
    },
    {
      title: "Blessing Rituals",
      description: "Elders offer blessings for fertility, prosperity, and harmony. Traditional prayers and rituals ensure the couple's future happiness and success."
    },
  ];

  const marriageTraditions = [
    {
      icon: <Heart size={40} />,
      title: "Community Involvement",
      description: "Marriage is not just between two individuals but between two families and the wider community. Everyone participates in the celebration."
    },
    {
      icon: <Users size={40} />,
      title: "Traditional Attire",
      description: "Bride, groom, and families wear Dingguza (traditional cloth with black, yellow, red stripes) and other cultural garments, showcasing identity and pride."
    },
    {
      icon: <Flower2 size={40} />,
      title: "Abundant Feasting",
      description: "Special dishes like Kitfo, Kurkufa, and Kocho are prepared. The coffee ceremony is central, symbolizing hospitality and blessing."
    },
    {
      icon: <HandHeart size={40} />,
      title: "Elder's Wisdom",
      description: "Elders offer advice (Gorga) to the couple, sharing wisdom about marriage, family life, and community responsibilities."
    },
  ];

  const funeralPhrases = [
    {
      phrase: "Mishiray koyro",
      translation: "May God comfort you / May you be comforted",
      context: "Said to the bereaved family"
    },
    {
      phrase: "Yesuusi sarotee",
      translation: "May Jesus resurrect them",
      context: "Expression of Christian faith in resurrection"
    },
    {
      phrase: "Oontta gakkanaa",
      translation: "May they reach the kingdom",
      context: "Prayer for the deceased's soul"
    },
    {
      phrase: "Eraa bayo",
      translation: "What has happened (acknowledging the loss)",
      context: "Expression of shared grief"
    },
    {
      phrase: "Aaydey, minttee",
      translation: "Oh no, what can we say",
      context: "Expression of sorrow"
    },
  ];

  const funeralCustoms = [
    {
      title: "Immediate Gathering",
      description: "Upon news of death, community members immediately gather at the family's home. No one is alone in grief—the entire community supports the bereaved family."
    },
    {
      title: "Mourning Period",
      description: "Formal mourning lasts several days. Women wail traditional mourning cries (Yekataa), expressing collective sorrow. Men comfort and organize practical matters."
    },
    {
      title: "Funeral Feast",
      description: "The community provides food and drink for mourners. Neighbors and relatives contribute resources to support the bereaved family financially and emotionally."
    },
    {
      title: "Burial Ceremony",
      description: "The body is prepared according to tradition and religious custom (often Christian Orthodox). Elders lead prayers and offer eulogies celebrating the deceased's life."
    },
    {
      title: "Post-Funeral Gatherings",
      description: "Memorial gatherings occur at specific intervals (7 days, 40 days, one year). These honor the deceased's memory and strengthen community bonds."
    },
    {
      title: "Support for Survivors",
      description: "The community continues to check on the family, offering emotional and material support. Widows and orphans receive special care and protection."
    },
  ];

  const deathBeliefs = [
    {
      title: "Ancestral Connection",
      description: "The deceased join the ancestors, watching over and blessing the living. Their wisdom continues to guide the community through memory and tradition."
    },
    {
      title: "Christian Faith",
      description: "Most Wolaita people are Ethiopian Orthodox Christians, believing in resurrection and eternal life. Funeral prayers reflect this hope."
    },
    {
      title: "Community Continuity",
      description: "Death reminds the community of life's fragility and the importance of unity. Funerals strengthen social bonds and collective identity."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Life Ceremonies | Marriage & Funeral Traditions</title>
        <meta name="description" content="Discover Wolaita marriage and funeral traditions - ceremonies that mark life's most important passages with community, ritual, and deep cultural meaning." />
      </Helmet>

      <PageHero
        title={t('ceremonies.title')}
        subtitle={t('ceremonies.subtitle')}
        badge="Life Passages"
        icon={<Heart size={64} />}
      />

      {/* Marriage Section */}
      <Section className="bg-stone-50 dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heart className="mx-auto mb-4 text-red-600 dark:text-red-400" size={64} />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Marriage Traditions
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Marriage in Wolaita is a sacred union celebrated by families and the entire community.
          </p>
        </motion.div>

        {/* Marriage Stages */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-8 text-center">
            Stages of Wolaita Marriage
          </h3>
          <div className="space-y-6">
            {marriageStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg border-l-4 border-yellow-400 relative"
              >
                <div className="absolute -left-6 top-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <div className="pl-8">
                  <h4 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                    {stage.title}
                  </h4>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marriage Traditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {marriageTraditions.map((tradition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-stone-900 dark:to-stone-700 p-6 rounded-xl shadow-lg text-center border-t-4 border-red-600"
            >
              <div className="text-orange-600 dark:text-orange-400 mb-4 flex justify-center">
                {tradition.icon}
              </div>
              <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">
                {tradition.title}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {tradition.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Funeral Section */}
      <Section className="bg-white dark:bg-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Users className="mx-auto mb-4 text-stone-700 dark:text-stone-300" size={64} />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Funeral Traditions
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Death brings the community together in shared grief, support, and remembrance.
          </p>
        </motion.div>

        {/* Funeral Customs */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funeralCustoms.map((custom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-stone-50 dark:bg-stone-900 p-6 rounded-xl shadow-lg border-l-4 border-stone-600"
              >
                <h4 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">
                  {custom.title}
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {custom.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Condolence Phrases */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-8 text-center">
            Words of Condolence
          </h3>
          <p className="text-center text-stone-600 dark:text-stone-300 mb-8">
            Traditional phrases spoken to bereaved families to offer comfort and express shared grief.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funeralPhrases.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-700 p-6 rounded-xl shadow-md border-4 border-stone-400 dark:border-stone-600"
              >
                <span className="inline-block px-3 py-1 bg-stone-600 text-white text-xs font-semibold rounded-full mb-3">
                  {item.context}
                </span>
                <h4 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                  "{item.phrase}"
                </h4>
                <p className="text-lg text-stone-700 dark:text-stone-300">
                  {item.translation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Beliefs About Death */}
      <Section className="bg-gradient-to-br from-stone-100 to-orange-50 dark:from-stone-900 dark:to-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Beliefs About Death & the Afterlife
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {deathBeliefs.map((belief, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
                {belief.title}
              </h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                {belief.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Community Unity Message */}
      <Section className="bg-gradient-to-br from-orange-900 to-red-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <HandHeart className="mx-auto mb-6 text-yellow-400" size={80} />
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
              Community Through All of Life
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-stone-200">
              <p>
                Whether celebrating a joyful wedding or mourning a beloved elder, the Wolaita community stands together. These life ceremonies are not private affairs—they are communal experiences that reinforce bonds, share burdens, and celebrate the interconnectedness of all people.
              </p>
              <p>
                In marriage, two families become one, supported by the entire village. In death, no family grieves alone—the community provides comfort, resources, and presence. This is the essence of Wolaita culture: <strong>we are together in all things</strong>.
              </p>
              <p className="text-2xl font-bold text-yellow-300 pt-6">
                "Alone we are weak, together we are strong."
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

export default LifeCeremonies;
