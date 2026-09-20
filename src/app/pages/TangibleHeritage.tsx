import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import Card from '../components/ui/Card';
import { useLanguage } from '../context/LanguageContext';

const TangibleHeritage = () => {
  const { t } = useLanguage();
  const items = [
    {
      title: "Traditional Architecture",
      excerpt: "The Wolaita huts (Tukuls) are masterfully constructed from bamboo and thatch, showcasing intricate weaving techniques and sustainable design that blends with the landscape.",
      image: "",
      link: "#"
    },
    {
      title: "Pottery & Crafts",
      excerpt: "Skilled artisans create beautiful and functional pottery used for cooking, storage, and ceremonies, each piece reflecting generations of knowledge passed down.",
      image: "",
      link: "#"
    },
    {
      title: "Tools & Implements",
      excerpt: "Agricultural tools developed specifically for the region's terrain demonstrate the innovative spirit of Wolaita farmers in maximizing their harvest.",
      image: "",
      link: "#"
    },
    {
      title: "Textiles & Weaving",
      excerpt: "The vibrant patterns and colors of Wolaita textiles tell stories of status, occasion, and identity, woven with precision and care.",
      image: "",
      link: "#"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tangible Heritage | Architecture, Artifacts & Crafts</title>
        <meta name="description" content="Explore the tangible heritage of Wolaita, including traditional architecture, pottery, weaving, and agricultural tools." />
      </Helmet>
      
      <PageHero
        title={t('visit.tangibleHeritage')}
        subtitle={t('visit.physicalArtifacts')}
        badge="Artifacts & Crafts"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <Card key={index} {...item} delay={index * 0.1} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default TangibleHeritage;
