import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import { motion } from 'motion/react';
import { Hotel, Home, MapPin, Phone, Star, Wifi, Coffee, Utensils } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Accommodation = () => {
  const { t } = useLanguage();
  const hotels = [
    {
      name: "Wolaita Sodo Hotel",
      type: "Hotel",
      rating: 4,
      location: "Wolaita Sodo City Center",
      description: "Premier accommodation in the heart of Wolaita Sodo with modern amenities and traditional hospitality.",
      amenities: ["Free WiFi", "Restaurant", "Conference Hall", "24/7 Service"],
      contact: "+251 46 551 1234",
      icon: <Hotel size={40} />
    },
    {
      name: "Damot Gale Lodge",
      type: "Lodge",
      rating: 4,
      location: "Near Damot Gale Mountain",
      description: "Eco-lodge offering spectacular mountain views and access to hiking trails. Perfect for nature enthusiasts.",
      amenities: ["Mountain View", "Hiking Tours", "Local Cuisine", "Garden"],
      contact: "+251 46 551 2345",
      icon: <Home size={40} />
    },
    {
      name: "Lake Abaya View Hotel",
      type: "Hotel",
      rating: 3,
      location: "Arba Minch Road",
      description: "Comfortable accommodation with stunning views of Lake Abaya. Ideal for travelers exploring the region.",
      amenities: ["Lake View", "Restaurant", "Parking", "WiFi"],
      contact: "+251 46 551 3456",
      icon: <Hotel size={40} />
    },
    {
      name: "Gezahegn Pension",
      type: "Pension",
      rating: 3,
      location: "Wolaita Sodo",
      description: "Family-run pension offering clean rooms and authentic Wolaita hospitality at affordable rates.",
      amenities: ["Family Rooms", "Breakfast", "Local Experience", "Safe Parking"],
      contact: "+251 46 551 4567",
      icon: <Home size={40} />
    },
    {
      name: "Sodo International Hotel",
      type: "Hotel",
      rating: 4,
      location: "Main Road, Wolaita Sodo",
      description: "Modern hotel with international standards, catering to business travelers and tourists alike.",
      amenities: ["WiFi", "Meeting Rooms", "Restaurant", "Bar", "Gym"],
      contact: "+251 46 551 5678",
      icon: <Hotel size={40} />
    },
    {
      name: "Heritage Guesthouse",
      type: "Guesthouse",
      rating: 3,
      location: "Cultural Quarter, Sodo",
      description: "Charming guesthouse decorated with traditional Wolaita crafts. Walking distance to cultural sites.",
      amenities: ["Cultural Tours", "Traditional Food", "Craft Shop", "WiFi"],
      contact: "+251 46 551 6789",
      icon: <Home size={40} />
    },
    {
      name: "Areka Tourist Hotel",
      type: "Hotel",
      rating: 3,
      location: "Areka Town",
      description: "Well-maintained hotel in Areka, serving as a convenient base for exploring northern Wolaita.",
      amenities: ["Restaurant", "Clean Rooms", "WiFi", "Parking"],
      contact: "+251 46 552 1234",
      icon: <Hotel size={40} />
    },
    {
      name: "Boditi Comfort Inn",
      type: "Inn",
      rating: 3,
      location: "Boditi Town",
      description: "Cozy inn offering comfortable accommodation and warm hospitality in the agricultural heartland.",
      amenities: ["Home Cooking", "Local Tours", "Parking", "Breakfast"],
      contact: "+251 46 553 1234",
      icon: <Home size={40} />
    },
  ];

  const accommodationTypes = [
    {
      type: "Hotels",
      icon: <Hotel size={48} />,
      description: "Full-service hotels with modern amenities, restaurants, and professional service.",
      priceRange: "600-1500 Birr/night"
    },
    {
      type: "Lodges & Guesthouses",
      icon: <Home size={48} />,
      description: "Mid-range accommodations offering comfort with local character and cultural immersion.",
      priceRange: "300-800 Birr/night"
    },
    {
      type: "Pensions",
      icon: <Coffee size={48} />,
      description: "Budget-friendly family-run establishments with clean rooms and authentic local experience.",
      priceRange: "150-400 Birr/night"
    },
  ];

  const travelTips = [
    {
      title: "Best Time to Visit",
      content: "October to May offers pleasant weather. The rainy season (June-September) brings lush green landscapes but can make rural travel challenging."
    },
    {
      title: "Booking Advice",
      content: "Book in advance during major festivals (especially Meskel and Ethiopian New Year). Many hotels accept phone reservations in Amharic or English."
    },
    {
      title: "Local Transportation",
      content: "Bajaj (three-wheelers) and taxis are readily available in Wolaita Sodo. Hotels can arrange guided tours to cultural and natural attractions."
    },
    {
      title: "Cultural Etiquette",
      content: "Wolaita people are known for their hospitality. Respectful dress and greetings in Wolaitigna ('Aye' for hello) are appreciated."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Accommodation in Wolaita | Hotels, Lodges & Pensions</title>
        <meta name="description" content="Find comfortable accommodation in Wolaita - from modern hotels to traditional guesthouses. Your guide to staying in Wolaita Sodo and surrounding areas." />
      </Helmet>

      <PageHero
        title={t('accommodation.title')}
        subtitle={t('accommodation.subtitle')}
        badge="Where to Stay"
        icon={<Hotel size={64} />}
      />

      {/* Accommodation Types */}
      <Section className="bg-stone-50 dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Accommodation Options
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Choose from various lodging options to suit your budget and travel style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accommodationTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-stone-800 p-8 rounded-xl shadow-lg text-center border-t-4 border-yellow-400"
            >
              <div className="text-red-600 dark:text-red-400 mb-4 flex justify-center">
                {type.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">
                {type.type}
              </h3>
              <p className="text-stone-600 dark:text-stone-300 mb-4 leading-relaxed">
                {type.description}
              </p>
              <div className="bg-yellow-50 dark:bg-stone-900 px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold text-orange-700 dark:text-orange-400">
                  {type.priceRange}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Hotels & Accommodations List */}
      <Section className="bg-white dark:bg-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Recommended Accommodations
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Comfortable and welcoming places to stay during your visit to Wolaita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {hotels.map((hotel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gradient-to-br from-stone-50 to-orange-50 dark:from-stone-900 dark:to-stone-700 rounded-xl shadow-lg overflow-hidden border border-stone-200 dark:border-stone-600 hover:shadow-2xl transition-all group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-400 to-red-500 rounded-lg text-white">
                    {hotel.icon}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(hotel.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                  {hotel.name}
                </h3>
                
                <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full mb-3">
                  {hotel.type}
                </span>

                <p className="text-stone-600 dark:text-stone-300 text-sm mb-4 leading-relaxed">
                  {hotel.description}
                </p>

                <div className="flex items-start gap-2 mb-3 text-sm text-stone-600 dark:text-stone-400">
                  <MapPin size={16} className="mt-1 shrink-0 text-red-600" />
                  <span>{hotel.location}</span>
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm text-stone-600 dark:text-stone-400">
                  <Phone size={16} className="shrink-0 text-red-600" />
                  <span className="font-mono">{hotel.contact}</span>
                </div>

                <div className="border-t border-stone-300 dark:border-stone-600 pt-4">
                  <h4 className="text-xs font-semibold text-stone-700 dark:text-stone-300 mb-2">Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-white dark:bg-stone-800 px-2 py-1 rounded border border-stone-300 dark:border-stone-600"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Travel Tips */}
      <Section className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-stone-900 dark:to-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Travel Tips
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Important information to help you plan your stay in Wolaita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {travelTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-md border-l-4 border-red-600"
            >
              <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">
                {tip.title}
              </h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                {tip.content}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-stone-50 dark:bg-stone-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-900 to-red-900 text-white rounded-2xl shadow-2xl p-8 md:p-12 text-center"
          >
            <Coffee className="mx-auto mb-6" size={64} />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Experience Wolaita Hospitality
            </h2>
            <p className="text-lg text-stone-200 leading-relaxed mb-6">
              Wolaita is renowned for its warm hospitality. Whether you choose a modern hotel or a traditional guesthouse, you'll be welcomed with genuine friendliness and respect. Many accommodations can arrange cultural tours, traditional meals, and connections with local communities.
            </p>
            <p className="text-xl font-semibold text-yellow-300">
              "Bagga" — Peace be with you, and welcome to Wolaita!
            </p>

            {/* Flag decoration */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto w-32 h-2 rounded-full mt-8 flex overflow-hidden"
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

export default Accommodation;
