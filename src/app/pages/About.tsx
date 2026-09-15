import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>About Us | Wolaita Digital Museum</title>
        <meta name="description" content="Learn about the mission to preserve and promote the cultural heritage of the Wolaita people." />
      </Helmet>

      <PageHero
        title={t('about.title')}
        subtitle={t('about.subtitle')}
        badge="Our Mission"
      />

      <Section>
        <div className="max-w-3xl mx-auto prose prose-lg prose-stone dark:prose-invert">
          <p>
            The Wolaita Heritage Project was established with a singular vision: to create a comprehensive digital repository that honors the rich history and vibrant culture of the Wolaita people. In an era of rapid globalization, the unique traditions, languages, and wisdom of our ancestors face the risk of being forgotten.
          </p>
          <p>
            This platform serves as a bridge between the past and the future. By documenting tangible artifacts, oral histories, and living traditions, we ensure that the legacy of the Wolaita Kingdom and its people continues to inspire and educate generations to come.
          </p>
          <h3>Our Goals</h3>
          <ul>
            <li><strong>Preservation:</strong> Digitizing artifacts, stories, and cultural practices.</li>
            <li><strong>Education:</strong> Providing accessible resources for students and researchers.</li>
            <li><strong>Promotion:</strong> Sharing the beauty of Wolaita culture with the global community.</li>
            <li><strong>Community:</strong> Fostering a sense of pride and connection among Wolaita people worldwide.</li>
          </ul>
        </div>
      </Section>
    </>
  );
};

export default About;