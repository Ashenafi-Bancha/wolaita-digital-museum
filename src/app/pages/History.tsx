import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import Timeline from '../components/Features/Timeline';
import { useLanguage } from '../context/LanguageContext';

const History = () => {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>History of Wolaita | Ancient Kingdom & Legacy</title>
        <meta name="description" content="Discover the ancient history of the Wolaita Kingdom, from the Kawo dynasty to the resistance against Menelik II and modern cultural identity." />
      </Helmet>

      <PageHero
        title={t('history.title')}
        subtitle={t('history.subtitle')}
        badge="Ancient Kingdom"
        image="https://images.unsplash.com/photo-1708512935636-36a3dba7cfc4?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdHJpYmFsJTIwZHJ1bSUyMG11c2ljJTIwaW5zdHJ1bWVudHxlbnwxfHx8fDE3NzEzNjg1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="Wolaita historical heritage"
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl font-serif text-stone-800 dark:text-stone-200 leading-relaxed mb-12 first-letter:text-5xl first-letter:font-bold first-letter:text-orange-700 first-letter:mr-2 float-left">
            The Wolaita people have inhabited their current territory for centuries, developing a complex social structure and a powerful kingdom that played a significant role in the history of the region. Known for their agricultural prowess and terraced farming, they built a civilization that was both self-sufficient and culturally rich.
          </p>
          <div className="clear-both" />
          
          <Timeline />
        </div>
      </Section>
    </>
  );
};

export default History;
