import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const Festivals = () => {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>Festivals & Ceremonies | Wolaita Museum</title>
        <meta name="description" content="Join the celebration of Wolaita's vibrant festivals, including Gifata, the New Year celebration, and other significant cultural events." />
      </Helmet>

      <PageHero
        title={t('festivals.title')}
        subtitle={t('festivals.subtitle')}
        badge="Celebrations"
        image="https://images.unsplash.com/photo-1764145162259-04eaf2b3d86a?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjB0cmFkaXRpb25hbCUyMGRhbmNlJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzcxMzY4NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="Wolaita festival celebration"
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-3d hover-glow-slow overflow-hidden rounded-2xl"
          >
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img loading="lazy" decoding="async" 
                  src="https://images.unsplash.com/photo-1743404025748-31f5d74a8702?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjB0cmFkaXRpb25hbCUyMHdlYXZpbmclMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NzEzNjg1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Gifata Celebration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-8 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-serif font-bold text-orange-700 dark:text-orange-400 mb-4">Gifata (New Year)</h2>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
                  Gifata is the most significant festival in Wolaita, marking the New Year. It is a time of reconciliation, forgiveness, and renewal of bonds.
                </p>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                  Families gather to enjoy special meals, particularly 'Qorchcho' (prepared meat), and partake in traditional dances and songs that celebrate the end of the rainy season.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-3d hover-glow-slow overflow-hidden rounded-2xl"
          >
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img loading="lazy" decoding="async" 
                  src="https://images.unsplash.com/photo-1576073383046-eaf2c135314d?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjBjb2ZmZWUlMjBjZXJlbW9ueSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3MTM2ODUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Coffee Ceremony" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-8 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-serif font-bold text-orange-700 dark:text-orange-400 mb-4">Meskel</h2>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
                  While celebrated across Ethiopia, Meskel has unique attributes in Wolaita. It commemorates the finding of the True Cross and coincides with the blooming of the yellow Adey Abeba flower.
                </p>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                  Bonfires (Demera) are lit in town squares, accompanied by spirited dancing and chanting, symbolizing light overcoming darkness.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Festivals;