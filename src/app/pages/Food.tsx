import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import DingguazaStripe from '../components/ui/DingguazaStripe';
import { motion } from 'motion/react';
import { Utensils, Coffee, Award, Heart, ChefHat } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Import authentic Wolaita food images
import foodPlatter1 from 'figma:asset/55149766c615418283f37408e8fd1453f3442191.webp';
import foodPlatter2 from 'figma:asset/617ad915179602f3718e897397a17a776dec5817.webp';
import foodPlatter3 from 'figma:asset/9b5c88459573b3133266b17aae8448b56fbfcb46.webp';

const Food = () => {
  const { t } = useLanguage();
  const dishes = [
    {
      name: "Injera & Wot",
      image: "https://images.unsplash.com/photo-1765338915553-6e02fe63ff4f?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjBmb29kJTIwaW5qZXJhJTIwdHJhZGl0aW9uYWwlMjBtZWFsfGVufDF8fHx8MTc3MTM2ODUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Like much of Ethiopia, Injera (fermented flatbread) is a staple. It is served with various spicy stews (Wot) made from lentils, chickpeas, or meat.",
      category: "Main Dish"
    },
    {
      name: "Kurkufa",
      description: "A traditional dish made from maize and vegetables, often mixed with butter and spices. It is a hearty meal commonly prepared for large gatherings and celebrations.",
      category: "Traditional Specialty"
    },
    {
      name: "Kocho (Enset Bread)",
      description: "Made from the false banana plant (Enset), Kocho is a nutritious flatbread that has sustained Wolaita communities for centuries. It's a unique staple of Southern Ethiopian cuisine.",
      category: "Staple Food"
    },
    {
      name: "Bula (Enset Porridge)",
      description: "A thick porridge made from fermented Enset, often mixed with milk and butter. Highly nutritious and energy-rich, it's a favorite breakfast food.",
      category: "Breakfast"
    },
    {
      name: "Bunna (Coffee)",
      image: "https://images.unsplash.com/photo-1576073383046-eaf2c135314d?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjBjb2ZmZWUlMjBjZXJlbW9ueSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3MTM2ODUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "The coffee ceremony is an integral part of social life. The process involves roasting green beans, grinding them, and brewing in a clay pot (Jebena). Served with popcorn or traditional snacks.",
      category: "Beverage & Ceremony"
    },
    {
      name: "Kitfo",
      description: "Minced raw beef mixed with spiced butter (Niter Kibbeh) and mitmita spice. Can be served raw (tire) or lightly cooked (leb leb). A delicacy for special occasions.",
      category: "Festive Dish"
    },
    {
      name: "Shiro Wot",
      description: "A thick, flavorful stew made from ground chickpeas or broad beans, seasoned with berbere spice and served with Injera. A protein-rich vegetarian staple.",
      category: "Main Dish"
    },
    {
      name: "Tibs",
      description: "Sautéed meat (beef, lamb, or goat) with onions, peppers, and aromatic spices. Often served on special occasions and celebrations.",
      category: "Festive Dish"
    },
  ];

  const foodCulture = [
    {
      icon: <Heart size={40} />,
      title: "Enset: The Tree of Life",
      description: "The Enset plant (false banana) is central to Wolaita cuisine and culture. Every part is used—for food, medicine, and even construction. It provides year-round sustenance and has saved communities during droughts."
    },
    {
      icon: <Coffee size={40} />,
      title: "Coffee Ceremony",
      description: "The traditional coffee ceremony (Bunna Tetu) is a sacred social ritual. It brings families and neighbors together, symbolizing respect, friendship, and community bonds. The ceremony can last hours."
    },
    {
      icon: <Utensils size={40} />,
      title: "Communal Eating",
      description: "Meals are traditionally shared from a common plate, symbolizing unity and equality. The practice of 'Gursha' (feeding each other) demonstrates affection and respect among diners."
    },
    {
      icon: <Award size={40} />,
      title: "Seasonal Foods",
      description: "Wolaita cuisine follows agricultural seasons. Harvest celebrations feature special dishes, and fasting periods (for Orthodox Christians) bring vegetarian variations of traditional meals."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Food & Cuisine | Traditional Wolaita Dishes</title>
        <meta name="description" content="Discover the flavorful and nutritious cuisine of the Wolaita people, featuring Enset-based dishes and rich spices." />
      </Helmet>

      <PageHero
        title={t('food.title')}
        subtitle={t('food.subtitle')}
        badge="Cuisine Heritage"
        icon={<Utensils size={56} />}
      />

      {/* Food Culture */}
      <Section className="bg-white dark:bg-stone-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Food Culture & Traditions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {foodCulture.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="feature-card-3d p-6 text-center border-t-4 border-[rgb(var(--wolaita-clay))]"
            >
              <div className="text-orange-600 dark:text-orange-400 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Dishes */}
      <Section className="bg-stone-50 dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Traditional Dishes
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Explore the rich flavors and unique ingredients of Wolaita cuisine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-stone-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-stone-200 dark:border-stone-700"
            >
              {dish.image ? (
                <div className="h-48 overflow-hidden">
                  <img loading="lazy" decoding="async" 
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-stone-700 dark:to-stone-600 flex items-center justify-center">
                  <Utensils size={48} className="text-orange-600 dark:text-orange-400" />
                </div>
              )}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full mb-3">
                  {dish.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-orange-700 dark:text-orange-400 mb-2">
                  {dish.name}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Authentic Wolaita Food Gallery */}
      <Section className="bg-white dark:bg-stone-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <ChefHat className="mx-auto mb-4 text-orange-600 dark:text-orange-400" size={64} />
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
            Authentic Wolaita Cuisine
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg max-w-3xl mx-auto">
            Real traditional dishes showcasing the vibrant colors, flavors, and presentation of Wolaita food culture.
          </p>
        </motion.div>

        {/* Food Images Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img loading="lazy" decoding="async" 
              src={foodPlatter1} 
              alt="Traditional Wolaita food platter with colorful dishes on decorative basket" 
              className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Traditional Platter</h3>
                <p className="text-stone-200 text-sm leading-relaxed">
                  Colorful array of traditional dishes served on a woven basket. Features various sauces, vegetables, and accompaniments showcasing the diversity of Wolaita cuisine.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">Communal Dining</span>
                  <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded-full">Traditional</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img loading="lazy" decoding="async" 
              src={foodPlatter2} 
              alt="Kocho with various traditional sauces and accompaniments" 
              className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Kocho & Sauces</h3>
                <p className="text-stone-200 text-sm leading-relaxed">
                  Authentic Enset-based Kocho (white flatbread) served with vibrant green and dark stews, plus golden chips. The foundation of Wolaita sustenance.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded-full">Enset Staple</span>
                  <span className="px-2 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">Nutritious</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img loading="lazy" decoding="async" 
              src={foodPlatter3} 
              alt="Kocho pieces with green and red traditional sauces" 
              className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Festive Presentation</h3>
                <p className="text-stone-200 text-sm leading-relaxed">
                  Beautifully arranged Kocho pieces surrounding bold green and red sauces on banana leaf. Perfect for celebrations and special gatherings.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">Festive</span>
                  <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded-full">Cultural</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Food Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-green-50 to-yellow-50 dark:from-stone-800 dark:to-stone-700 p-6 rounded-xl shadow-lg text-center border-t-4 border-green-600"
          >
            <div className="text-5xl mb-3">🌿</div>
            <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
              Enset-Based
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Most dishes feature Kocho and Bula made from Enset, the "tree of life" that has sustained Wolaita for centuries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-stone-800 dark:to-stone-700 p-6 rounded-xl shadow-lg text-center border-t-4 border-orange-600"
          >
            <div className="text-5xl mb-3">🎨</div>
            <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
              Colorful Sauces
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Vibrant green (spinach-based), red (berbere spiced), and dark (bean-based) sauces add flavor and visual appeal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-stone-800 dark:to-stone-700 p-6 rounded-xl shadow-lg text-center border-t-4 border-yellow-400"
          >
            <div className="text-5xl mb-3">👥</div>
            <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
              Communal Sharing
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Food is served on shared platters, symbolizing unity. The practice of Gursha (feeding each other) strengthens bonds.
            </p>
          </motion.div>
        </div>

        {/* Traditional Serving Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-stone-800 dark:to-stone-700 p-8 md:p-12 rounded-2xl shadow-2xl border-l-8 border-red-600">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6 text-center">
              The Art of Wolaita Food Presentation
            </h3>
            <div className="space-y-4 text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                <strong className="text-orange-600 dark:text-orange-400">Traditional Serving:</strong> Wolaita meals are thoughtfully presented on woven baskets or banana leaves, creating a visual feast that honors both the food and the guests. Each dish is carefully arranged to showcase the variety of colors, textures, and flavors.
              </p>
              <p>
                <strong className="text-green-600 dark:text-green-400">Kocho as Foundation:</strong> The white or light-colored Kocho serves as the base, complemented by richly colored sauces: green from vegetables like kale and spinach, red from berbere-spiced stews, and dark from lentil or bean preparations. This combination ensures balanced nutrition and delightful taste.
              </p>
              <p>
                <strong className="text-red-600 dark:text-red-400">Social Significance:</strong> Food presentation reflects Wolaita hospitality. Guests are always served generous portions on the finest available platters. The more colorful and abundant the meal, the greater the respect shown to visitors—a tradition that strengthens community ties.
              </p>
              <p className="text-center text-xl font-semibold text-orange-700 dark:text-orange-400 pt-4">
                "In Wolaita, food is not just sustenance—it's an expression of love, culture, and identity."
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Culinary Heritage */}
      <Section className="bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-stone-900 dark:to-stone-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-stone-800 rounded-2xl shadow-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-red-600 rounded-full">
                <Award size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100">
                A Culinary Heritage
              </h2>
            </div>
            <div className="space-y-4 text-stone-600 dark:text-stone-300 leading-relaxed text-lg">
              <p>
                Wolaita cuisine reflects centuries of agricultural innovation, cultural values, and environmental adaptation. The centrality of Enset cultivation has made Wolaita one of Ethiopia's most food-secure regions, even during droughts that affected other areas.
              </p>
              <p>
                Beyond nutrition, food in Wolaita culture carries deep social meaning. Sharing meals strengthens community bonds, hospitality toward guests is sacred, and food rituals mark important life events—births, weddings, and harvest celebrations.
              </p>
              <p className="font-semibold text-orange-700 dark:text-orange-400">
                "Matida nagaraa—Food and peace: two foundations of Wolaita life."
              </p>
            </div>

            {/* Dingguza Pattern decoration */}
            <DingguazaStripe segmentWidth={6} height="h-3" className="mx-auto w-48 rounded-full mt-8" />
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Food;