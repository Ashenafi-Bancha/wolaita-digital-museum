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
      image: "https://images.unsplash.com/photo-1770562325764-694b655db57e?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjB2aWxsYWdlJTIwdHJhZGl0aW9uYWwlMjBodXR8ZW58MXx8fHwxNzcxMzY4NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "#"
    },
    {
      title: "Pottery & Crafts",
      excerpt: "Skilled artisans create beautiful and functional pottery used for cooking, storage, and ceremonies, each piece reflecting generations of knowledge passed down.",
      image: "https://images.unsplash.com/photo-1597709324959-38e0ac50bd4b?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjBiYXNrZXQlMjB3ZWF2aW5nJTIwY3JhZnR8ZW58MXx8fHwxNzcxMzY4NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "#"
    },
    {
      title: "Tools & Implements",
      excerpt: "Agricultural tools developed specifically for the region's terrain demonstrate the innovative spirit of Wolaita farmers in maximizing their harvest.",
      image: "https://images.unsplash.com/photo-1743404025748-31f5d74a8702?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjB0cmFkaXRpb25hbCUyMHdlYXZpbmclMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NzEzNjg1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "#"
    },
    {
      title: "Textiles & Weaving",
      excerpt: "The vibrant patterns and colors of Wolaita textiles tell stories of status, occasion, and identity, woven with precision and care.",
      image: "https://images.unsplash.com/photo-1598122666068-59b41e0a3193?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjBwZW9wbGUlMjB0cmFkaXRpb25hbCUyMGNsb3RoaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxMzY4NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
