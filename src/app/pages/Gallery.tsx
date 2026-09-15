import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import GalleryGrid from '../components/Features/GalleryGrid';
import { useLanguage } from '../context/LanguageContext';

// Import all authentic Wolaita images
// Dingguza (Traditional Cloth)
import dingguza1 from 'figma:asset/3363be406878dadf1ad4360e29fb33af839d0c96.png';
import dingguza2 from 'figma:asset/6f379a7d7e5d3c953708a6e10605c3f643a5dedd.png';
import dingguza3 from 'figma:asset/ddacdd9d3636b6f198ed885d99155ab353a4d4b3.png';
import dingguza4 from 'figma:asset/b9bd48fd90904c5ad3313bbea32a9e06dae8cc05.png';

// Traditional Houses (Tukul)
import traditionalHouse1 from 'figma:asset/dec0eaeec5ae949354005db9b2ff79a5c3a2fa12.png';
import traditionalHouse2 from 'figma:asset/58e84680c340be2e619e8ec0c32ae0ab589f1a34.png';

// Traditional Food
import foodPlatter1 from 'figma:asset/55149766c615418283f37408e8fd1453f3442191.png';
import foodPlatter2 from 'figma:asset/617ad915179602f3718e897397a17a776dec5817.png';
import foodPlatter3 from 'figma:asset/9b5c88459573b3133266b17aae8448b56fbfcb46.png';

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

    // Existing Unsplash images
    {
      src: "https://images.unsplash.com/photo-1761844382959-08cadeb14f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjBsYW5kc2NhcGUlMjBtb3VudGFpbiUyMHZhbGxleXxlbnwxfHx8fDE3NzEzNjg1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Wolaita Landscape",
      caption: "The breathtaking mountains and valleys of the Wolaita region."
    },
    {
      src: "https://images.unsplash.com/photo-1708512935636-36a3dba7cfc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdHJpYmFsJTIwZHJ1bSUyMG11c2ljJTIwaW5zdHJ1bWVudHxlbnwxfHx8fDE3NzEzNjg1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Traditional Music",
      caption: "Music and dance are central to cultural expression."
    },
    {
      src: "https://images.unsplash.com/photo-1576073383046-eaf2c135314d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjBjb2ZmZWUlMjBjZXJlbW9ueSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3MTM2ODUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Coffee Ceremony",
      caption: "A traditional coffee ceremony in progress."
    },
    {
      src: "https://images.unsplash.com/photo-1764145162259-04eaf2b3d86a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjB0cmFkaXRpb25hbCUyMGRhbmNlJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzcxMzY4NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Cultural Celebration",
      caption: "Vibrant colors during a festival."
    },
    {
      src: "https://images.unsplash.com/photo-1770562325764-694b655db57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjB2aWxsYWdlJTIwdHJhZGl0aW9uYWwlMjBodXR8ZW58MXx8fHwxNzcxMzY4NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Traditional Architecture",
      caption: "A traditional Wolaita hut (Tukul)."
    },
    {
      src: "https://images.unsplash.com/photo-1765338915553-6e02fe63ff4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjBmb29kJTIwaW5qZXJhJTIwdHJhZGl0aW9uYWwlMjBtZWFsfGVufDF8fHx8MTc3MTM2ODUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Traditional Food",
      caption: "A delicious spread of Injera and Wot."
    },
    {
      src: "https://images.unsplash.com/photo-1598122666068-59b41e0a3193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjBwZW9wbGUlMjB0cmFkaXRpb25hbCUyMGNsb3RoaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxMzY4NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Portrait",
      caption: "Wearing traditional woven clothing."
    },
    {
      src: "https://images.unsplash.com/photo-1597709324959-38e0ac50bd4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjBiYXNrZXQlMjB3ZWF2aW5nJTIwY3JhZnR8ZW58MXx8fHwxNzcxMzY4NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Craftsmanship",
      caption: "Skilled artisans at work."
    }
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