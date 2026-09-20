import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import GalleryGrid from '../components/Features/GalleryGrid';
import { useLanguage } from '../context/LanguageContext';

// Import all authentic Wolaita images
// Dingguza (Traditional Cloth)
import dingguza1 from 'figma:asset/3363be406878dadf1ad4360e29fb33af839d0c96.webp';
import dingguza2 from 'figma:asset/6f379a7d7e5d3c953708a6e10605c3f643a5dedd.webp';
import dingguza3 from 'figma:asset/ddacdd9d3636b6f198ed885d99155ab353a4d4b3.webp';
import dingguza4 from 'figma:asset/b9bd48fd90904c5ad3313bbea32a9e06dae8cc05.webp';

// Traditional Houses (Tukul)
import traditionalHouse1 from 'figma:asset/dec0eaeec5ae949354005db9b2ff79a5c3a2fa12.webp';
import traditionalHouse2 from 'figma:asset/58e84680c340be2e619e8ec0c32ae0ab589f1a34.webp';

// Traditional Food
import foodPlatter1 from 'figma:asset/55149766c615418283f37408e8fd1453f3442191.webp';
import foodPlatter2 from 'figma:asset/617ad915179602f3718e897397a17a776dec5817.webp';
import foodPlatter3 from 'figma:asset/9b5c88459573b3133266b17aae8448b56fbfcb46.webp';

const Gallery = () => {
  const { t } = useLanguage();
  const images = [
    // Authentic Dingguza Images
    {
      src: dingguza1,
      alt: "Woman in Traditional Dingguza Dress",
      caption: "Traditional elegance — Dingguza worn as a complete traditional dress, showcasing the beautiful black, yellow, and red stripes."
    },
    {
      src: dingguza2,
      alt: "Woman Wearing Dingguza as Shawl",
      caption: "Shawl style — Dingguza draped as a shawl over white traditional clothing, a popular style for cultural events."
    },
    {
      src: dingguza3,
      alt: "Close-up Portrait in Dingguza Attire",
      caption: "Contemporary fashion — Modern styling with Dingguza patterns, including matching headwrap for a complete cultural look."
    },
    {
      src: dingguza4,
      alt: "Community in Traditional Dingguza",
      caption: "Community celebration — Wolaita community gathered in their traditional Dingguza, celebrating unity and cultural heritage together."
    },
    
    // Authentic Traditional House Images
    {
      src: traditionalHouse1,
      alt: "Traditional Wolaita Tukul House",
      caption: "Classic Tukul design — Round structure with conical thatched roof made from grass and bamboo, designed for climate adaptation."
    },
    {
      src: traditionalHouse2,
      alt: "Traditional House with Wooden Door",
      caption: "Crafted with tradition — Wooden door entrance and mud walls plastered with natural materials, built using ancestral techniques."
    },
    
    // Authentic Food Images
    {
      src: foodPlatter1,
      alt: "Traditional Wolaita Food Platter",
      caption: "Traditional platter — Colorful array of dishes served on woven basket, showcasing the diversity of Wolaita cuisine."
    },
    {
      src: foodPlatter2,
      alt: "Kocho with Traditional Sauces",
      caption: "Kocho & sauces — Authentic Enset-based Kocho served with vibrant green and dark stews, the foundation of Wolaita sustenance."
    },
    {
      src: foodPlatter3,
      alt: "Festive Food Presentation",
      caption: "Festive presentation — Beautifully arranged Kocho pieces with bold green and red sauces on banana leaf, perfect for celebrations."
    },

  ];

  return (
    <>
      <Helmet>
        <title>Photo Gallery | Wolaita Museum</title>
        <meta name="description" content="View a collection of stunning images showcasing the landscapes, people, and traditions of Wolaita." />
      </Helmet>

      <PageHero
        title={t('gallery.title')}
        subtitle={t('gallery.subtitle')}
        badge="Visual Archive"
        compact
      />

      <Section>
        <GalleryGrid images={images} />
      </Section>
    </>
  );
};

export default Gallery;