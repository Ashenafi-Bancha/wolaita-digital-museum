import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { WOLAITA_TRANSLATION_READY } from '../config/site';

type Language = 'en' | 'wo' | 'am';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('wolaita-language') as Language | null;
    // Visitors who picked Wolaitigna earlier fall back to English until it is ready.
    if (saved === 'wo' && !WOLAITA_TRANSLATION_READY) return 'en';
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('wolaita-language', language);
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.gifaataa': 'Gifaataa',
    'nav.dingguza': 'Dingguza',
    'nav.history': 'History',
    'nav.culture': 'Culture',
    'nav.music': 'Music',
    'nav.food': 'Food',
    'nav.gallery': 'Gallery',
    'nav.kings': 'Kings',
    'nav.visit': 'Visit',
    'nav.language': 'Language & Wisdom',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.quiz': 'Quiz',

    // Hero
    'hero.title': 'Discover the Rich Heritage of Wolaita',
    'hero.subtitle': 'Explore centuries of tradition, culture, and royal history in the heart of Ethiopia',
    'hero.cta': 'Discover More',
    'hero.history': 'Explore History',

    // Common
    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.explore': 'Explore',
    'common.discover': 'Discover',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.close': 'Close',
    'common.loading': 'Loading...',
    'common.search': 'Search',

    // Home Page
    'home.title': 'Wolaita — Heritage, Pride & Civilization',
    'home.museumTitle': 'Wolaita Cultural Digital Museum',
    'home.heroLocation': 'Wolaita, Southern Ethiopia',
    'home.subtitle': 'Journey through centuries of history, culture, and tradition of the Wolaita people of Ethiopia.',
    'home.seoDescription': 'Explore the Wolaita Cultural Digital Museum — royal history, Gifaataa, Dingguza, language, music, and living heritage of Southern Ethiopia.',
    'home.cta': 'Begin the Journey',
    'home.takeQuiz': 'Test Your Knowledge',
    'home.finalCtaDesc': 'Discover Wolaita heritage through stories, galleries, and interactive learning.',

    'home.welcomeEn': 'Welcome',
    'home.welcomeWo': 'Halaale',
    'home.welcomeAm': 'እንኳን ደህና መጡ',
    'home.trilingualTagline': 'Experience Wolaita in three languages',

    'home.prideTitle': 'The Two Pillars of Wolaita Identity',
    'home.prideSubtitle': 'Two globally recognized treasures that define who we are to the world',

    'home.gifaataaCardDesc': 'A spectacular celebration of renewal, community, and cultural pride. When all of Wolaita comes alive in music, dance, and ancient ceremony.',
    'home.dingguuzaCardDesc': 'The iconic black, yellow, and red striped cloth worn with pride at every celebration — a living canvas of Wolaita identity.',
    'home.exploreGifaataa': 'Explore Gifaataa',
    'home.exploreDingguza': 'Explore Dingguza',
    'home.annualFestival': 'Annual Festival',
    'home.globalRecognition': 'Global Recognition',
    'home.handwoven': 'Hand-Woven',
    'home.culturalSymbol': 'Cultural Symbol',

    'home.alsoDiscover': 'Also Discover',
    'home.marccuwaaLabel': 'Marccuwaa (Currency)',
    'home.calendarLabel': 'Wolaita Calendar',
    'home.heritageSitesLabel': 'Heritage Sites',
    'home.lifeCeremoniesLabel': 'Life Ceremonies',

    'home.visitTitle': 'Visit Wolaita',
    'home.visitLandOf': 'The Land of 50+ Kings',
    'home.mightyKings': 'Mighty Kings',
    'home.yearsHistory': 'Years of History',
    'home.legacyLives': 'Legacy Lives On',
    'home.meetKings': 'Meet the Kings',
    'home.planVisit': 'Plan Your Visit',
    'home.completeLineage': '📜 Complete Royal Lineage',
    'home.kingdomHeritage': '🏛️ Kingdom Heritage',

    'home.civilizationTitle': 'A Legacy of Civilization',
    'home.civilizationDesc': 'The Wolaita people of Southern Ethiopia boast a distinct and powerful heritage — with a history of independent kingdomhood, advanced agriculture, and a deep-rooted social structure that stands as a pillar of Ethiopian civilization.',

    'home.preservingTitle': 'Preserving Our Identity',
    'home.preservingDesc': 'In a rapidly modernizing world, preserving the essence of who we are is paramount. This platform serves as a digital repository for the wisdom, art, and stories of our ancestors — ensuring they inspire future generations.',
    'home.globalReach': 'Global Reach',
    'home.globalReachDesc': 'Sharing Wolaita culture with the world.',
    'home.communityLabel': 'Community',
    'home.communityDesc': 'Connecting people through shared heritage.',
    'home.educationLabel': 'Education',
    'home.educationDesc': 'Learning resources for all ages and backgrounds.',
    'home.learnMission': 'Learn about our mission',

    'home.kingsHighlight': 'The 50+ Kings',
    'home.kingsExcerpt': "Trace the lineage of Wolaita's mighty monarchs who ruled with wisdom and courage for over 500 years, each contributing to the kingdom's enduring glory.",
    'home.languageHighlight': 'Language & Proverbs',
    'home.languageExcerpt': 'Discover Wolaitigna — the beautiful language of Wolaita — and the ancient wisdom held in traditional proverbs and sayings passed down through generations.',
    'home.foodHighlight': 'Cultural Cuisine',
    'home.foodExcerpt': 'Experience unique Wolaita flavors — from Enset-based dishes to the sacred coffee ceremony that has brought communities together for centuries.',

    'home.proverbLabel': 'Wolaita Wisdom',
    'home.proverbEn': '"A person who knows their roots stands firm like a great tree."',
    'home.proverbWo': '"Tarikaa erettiday asa wolqqaama zooqiyaadan minnana danddayees."',
    'home.proverbAm': '"ሥሮቹን የሚያውቅ ሰው እንደ ታላቅ ዛፍ ቆሞ ይቆማል።"',

    'home.statsLanguages': 'Million Speakers',
    'home.statsSqKm': 'Square Kilometers',
    'home.statsPages': 'Heritage Pages',
    'home.statsYears': 'Years of History',

    // Kings
    'kings.title': 'The Royal Legacy',
    'kings.subtitle': 'Discover the 50+ Kings who shaped Wolaita history',
    'kings.viewAll': 'View All 50+ Kings',
    'kings.featured': 'Featured',
    'kings.nearEra': "Near Kawo Tona's Era",
    'kings.earlierEras': 'Earlier Eras',
    'kings.exploreRoyalLegacy': 'Explore Royal Legacy',
    'kings.diplomat': 'The Diplomat',
    'kings.warriorKing': 'The Warrior King',
    'kings.builder': 'The Builder',
    'kings.modernizer': 'The Modernizer',
    'kings.lastMonarch': 'Last Independent Monarch',
    'kings.lawGiver': 'The Law Giver',
    'kings.expander': 'The Territorial Expander',
    'kings.founder': 'The Founding Monarch',

    // Visit/Tourism
    'visit.planYourVisit': 'Plan Your Visit',
    'visit.essentialTravel': 'Essential travel information',
    'visit.heritageSites': 'Heritage Sites',
    'visit.naturalCultural': 'Natural & cultural landmarks',
    'visit.tangibleHeritage': 'Tangible Heritage',
    'visit.physicalArtifacts': 'Physical artifacts & crafts',
    'visit.intangibleHeritage': 'Intangible Heritage',
    'visit.traditions': 'Traditions & practices',
    'visit.whereToStay': 'Where to Stay',
    'visit.hotels': 'Hotels & lodges',
    'visit.festivals': 'Festivals',
    'visit.culturalCelebrations': 'Cultural celebrations',
    'visit.heritageCulture': 'Heritage & Culture',
    'visit.practicalInfo': 'Practical Information',
    'visit.title': 'Visit Wolaita',
    'visit.subtitle': 'Plan your journey to the heart of Ethiopian heritage',
    'visit.gettingThere': 'Getting There',
    'visit.accommodation': 'Accommodation',
    'visit.bestTime': 'Best Time to Visit',

    // Language & Wisdom
    'language.overview': 'Language Overview',
    'language.wolaitigna': 'Wolaitigna language & writing',
    'language.dictionary': 'Dictionary',
    'language.translations': 'Wolaita-English translations',
    'language.proverbs': 'Proverbs',
    'language.traditionalWisdom': 'Traditional wisdom',
    'language.sayings': 'Sayings',
    'language.commonExpressions': 'Common expressions',
    'language.puzzles': 'Puzzles & Riddles',
    'language.brainTeasers': 'Brain teasers & wordplay',
    'language.resources': 'Resources',
    'language.title': 'Wolaitigna Language',
    'language.subtitle': 'Discover the beautiful Wolaita language and script',

    // Gifaataa
    'gifaataa.title': 'Gifaataa — Wolaita New Year',
    'gifaataa.greeting': 'Yooyo Gifaataa!',
    'gifaataa.subtitle': 'Celebrating the most important cultural festival of Wolaita',
    'gifaataa.description': 'Gifaataa is the Wolaita New Year celebration',
    'gifaataa.whenCelebrated': 'When Celebrated',
    'gifaataa.traditions': 'Traditional Celebrations',
    'gifaataa.significance': 'Cultural Significance',

    // Dingguza
    'dingguza.title': 'Dingguza — Traditional Cloth',
    'dingguza.subtitle': 'The iconic fabric representing Wolaita identity',
    'dingguza.description': 'Dingguza is the traditional handwoven cloth of Wolaita',
    'dingguza.patterns': 'Traditional Patterns',
    'dingguza.making': 'Weaving Process',
    'dingguza.significance': 'Cultural Significance',

    // Culture
    'culture.title': 'Wolaita Culture',
    'culture.subtitle': 'Rich traditions and daily life in Wolaita',
    'culture.dailyLife': 'Daily Life',
    'culture.socialStructure': 'Social Structure',
    'culture.ceremonies': 'Life Ceremonies',
    'culture.traditions': 'Traditional Practices',

    // History
    'history.title': 'History of Wolaita',
    'history.subtitle': 'A journey through centuries of rich heritage',
    'history.ancientOrigins': 'Ancient Origins',
    'history.medievalPeriod': 'Medieval Period',
    'history.royalEra': 'Royal Era',
    'history.modernHistory': 'Modern History',

    // Food
    'food.title': 'Wolaita Cuisine',
    'food.subtitle': 'Traditional foods and culinary heritage',
    'food.traditional': 'Traditional Dishes',
    'food.ingredients': 'Local Ingredients',
    'food.preparation': 'Preparation Methods',
    'food.celebrations': 'Ceremonial Foods',

    // Music
    'music.title': 'Wolaita Music',
    'music.subtitle': 'Traditional songs and musical heritage',
    'music.instruments': 'Traditional Instruments',
    'music.songs': 'Popular Songs',
    'music.dances': 'Traditional Dances',

    // Festivals
    'festivals.title': 'Festivals & Celebrations',
    'festivals.subtitle': 'Annual celebrations and cultural events',
    'festivals.annual': 'Annual Festivals',
    'festivals.religious': 'Religious Celebrations',
    'festivals.cultural': 'Cultural Events',

    // Gallery
    'gallery.title': 'Photo Gallery',
    'gallery.subtitle': 'Visual journey through Wolaita heritage',
    'gallery.landscapes': 'Landscapes',
    'gallery.people': 'People & Culture',
    'gallery.artifacts': 'Artifacts',
    'gallery.ceremonies': 'Ceremonies',

    // About
    'about.title': 'About Wolaita Museum',
    'about.subtitle': 'Preserving and sharing Wolaita heritage',
    'about.mission': 'Our Mission',
    'about.vision': 'Our Vision',
    'about.team': 'Our Team',
    'about.contact': 'Contact Us',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.address': 'Address',
    'contact.phone': 'Phone',

    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.heritage': 'Heritage',
    'footer.resources': 'Resources',
    'footer.connect': 'Connect',
    'footer.copyright': 'All rights reserved',
    'footer.preserving': 'Preserving Wolaita Heritage',

    // Heritage Sites
    'heritage.title': 'Heritage Sites',
    'heritage.subtitle': 'Discover the sacred and historical places of Wolaita',
    'heritage.natural': 'Natural Sites',
    'heritage.cultural': 'Cultural Sites',
    'heritage.historical': 'Historical Sites',

    // Notable People
    'people.title': 'Notable People',
    'people.subtitle': 'Celebrating Wolaita leaders and changemakers',
    'people.leaders': 'Community Leaders',
    'people.scholars': 'Scholars',
    'people.artists': 'Artists',

    // Calendar
    'calendar.title': 'Wolaita Calendar',
    'calendar.subtitle': 'Traditional timekeeping and seasons',
    'calendar.months': 'Months',
    'calendar.seasons': 'Seasons',
    'calendar.celebrations': 'Important Dates',

    // Marccuwaa
    'marccuwaa.title': 'Marccuwaa — Traditional Currency',
    'marccuwaa.subtitle': 'The historic currency of Wolaita Kingdom',
    'marccuwaa.history': 'Historical Background',
    'marccuwaa.usage': 'Traditional Usage',
    'marccuwaa.significance': 'Cultural Significance',

    // Life Ceremonies
    'ceremonies.title': 'Life Ceremonies',
    'ceremonies.subtitle': 'Traditional rites of passage',
    'ceremonies.birth': 'Birth Ceremonies',
    'ceremonies.marriage': 'Marriage Traditions',
    'ceremonies.coming': 'Coming of Age',
    'ceremonies.funeral': 'Funeral Rites',

    // Puzzles
    'puzzles.title': 'Traditional Puzzles & Riddles',
    'puzzles.subtitle': 'Wolaita brain teasers and wordplay',

    // Dictionary
    'dictionary.title': 'Wolaita-English Dictionary',
    'dictionary.subtitle': 'Essential words and phrases',
    'dictionary.search': 'Search words...',
    'dictionary.selectLetter': 'Select a letter',

    // Education
    'education.title': 'Educational Resources',
    'education.subtitle': 'Learn about Wolaita heritage',
    'education.materials': 'Learning Materials',
    'education.courses': 'Online Courses',
    'education.research': 'Research Papers',

    // Accommodation
    'accommodation.title': 'Where to Stay in Wolaita',
    'accommodation.subtitle': 'Hotels, lodges, and guesthouses',
    'accommodation.hotels': 'Hotels',
    'accommodation.guesthouses': 'Guest Houses',
    'accommodation.lodges': 'Lodges',
  },

  // ─── WOLAITIGNA ─────────────────────────────────────────────────────────────
  wo: {
    'nav.home': 'Soo',
    'nav.gifaataa': 'Gifaataa',
    'nav.dingguza': 'Dingguza',
    'nav.history': 'Tarikaa',
    'nav.culture': 'Aadaa',
    'nav.music': 'Yeezaa',
    'nav.food': 'Muzaa',
    'nav.gallery': 'Misilaa',
    'nav.kings': 'Kawooti',
    'nav.visit': 'Bisaa',
    'nav.language': 'Qofa & Cinccataa',
    'nav.about': 'Wozanaa',
    'nav.contact': 'Qaxxaraa',
    'nav.quiz': 'Oychchiyaa',

    'hero.title': 'Wolayitaa Dure Laammaa Erettite',
    'hero.subtitle': 'Itiyophiyaa Wozanaan Xeetu Laatta Aadaa, Tarikaa, Kaawa Tarikaa Shaarettite',
    'hero.cta': 'Kayssi Erettite',
    'hero.history': 'Tarikaa Shaarettite',

    'common.readMore': 'Darotaa Nabbabaa',
    'common.learnMore': 'Kayssi Tammarite',
    'common.viewAll': 'Ubbaa Be7ite',
    'common.explore': 'Shaarettite',
    'common.discover': 'Demmanttite',
    'common.back': 'Guyyaa',
    'common.next': 'Sintthuwaa',
    'common.previous': 'Sintaa',
    'common.submit': 'Mokkite',
    'common.cancel': 'Diggite',
    'common.close': 'Gordite',
    'common.loading': 'Eissiya...',
    'common.search': 'Koyyaa',

    'home.title': 'Wolayitaa — Laammaa, Bonchchuwaa & Aadaa',
    'home.museumTitle': 'Wolayitaa Aadaa Dijitaalii Muuziyeemii',
    'home.heroLocation': 'Wolayitaa, Kibbaa Itoophiyaa',
    'home.subtitle': 'Wolayitaa asaa xeetu laatta tarikaa, aadaa & ubbabaa ogiyaa biittaa haahuwan.',
    'home.seoDescription': 'Wolayitaa Aadaa Dijitaalii Muuziyeemii — kaawa laammaa, Gifaataa, Dingguza, afaan, muuziqaa fi laammaa de7o.',
    'home.cta': 'Ogiyaa Doommite',
    'home.takeQuiz': 'Beekumsa Keessan Madaalaa',
    'home.finalCtaDesc': 'Seenaa, galerii fi barumsa irratti hundaa\'e Wolayitaa laammaa erettite.',

    'home.welcomeEn': 'Welcome',
    'home.welcomeWo': 'Halaale',
    'home.welcomeAm': 'እንኳን ደህና መጡ',
    'home.trilingualTagline': 'Wolayitaa qofa heezzu giddon erettite',

    'home.prideTitle': 'Wolayitaa Mallattaa Naamuwan Gita',
    'home.prideSubtitle': 'Biittaa ubban erettida naamuwan mallattaa Wolayitaa erettissiyaa',

    'home.gifaataaCardDesc': 'Laamuwaa, issippe shiishiyaa & aadaa bonchchuwaa gitataa ufaissiyaa. Wolayitaa ubbay yeezaan, paxxalan & cimaa bayraatan dechchiya wodiyaa.',
    'home.dingguuzaCardDesc': 'Ubbaa ufaissiyaan bonchcha giyaa qanttaa, bo77uwaa & woguwan miizetida eqqaa — Wolayitaa mallattaa de7o zimithaan.',
    'home.exploreGifaataa': 'Gifaataa Shaarettite',
    'home.exploreDingguza': 'Dingguza Shaarettite',
    'home.annualFestival': 'Layttaa Bayraataa',
    'home.globalRecognition': 'Biittaa Bonchchuwaa',
    'home.handwoven': 'Kusshi Kussiday',
    'home.culturalSymbol': 'Aadaa Mallattaa',

    'home.alsoDiscover': 'Kayssi Demmanttite',
    'home.marccuwaaLabel': 'Marccuwaa (Miishshaa)',
    'home.calendarLabel': 'Wolayitaa Wodiyaa',
    'home.heritageSitesLabel': 'Laammaa Sohuwa',
    'home.lifeCeremoniesLabel': 'Deyo Bayraataa',

    'home.visitTitle': 'Wolayitaa Bisaa',
    'home.visitLandOf': '50+ Kawooti Biittaa',
    'home.mightyKings': 'Wolqqaama Kawooti',
    'home.yearsHistory': 'Laattaa Tarikaa',
    'home.legacyLives': 'Laammaa De7ees',
    'home.meetKings': 'Kawoota Be7ite',
    'home.planVisit': 'Bisaa Giigissaa',
    'home.completeLineage': '📜 Kaawa Laammaa',
    'home.kingdomHeritage': '🏛️ Kaawotettaa Laammaa',

    'home.civilizationTitle': 'Gitataa Aadaa Laammaa',
    'home.civilizationDesc': 'Itiyophiyaa Denddaa Wolayitaa asay aadaa & tarikaa dure laammaa de7oosona — bantta Kaawotettaa, gita misiraa gursiyaa & ubbay siiqiya asaa giigisuwaa daro laammaa.',

    'home.preservingTitle': 'Nu Mallattaa Naagettite',
    'home.preservingDesc': 'Hachi Wodiyaa Wolqqaama Laamettiya Biittan nu oonakko erettiyaagaa naagiyaagee daro koshshees. Ha xoqquwan nu maadeti, nu oosoy & nu maadeti tarikaa diziyaa — yelatai akeekiyaa mallan.',
    'home.globalReach': 'Biittaa Ubba Gakkiyaa',
    'home.globalReachDesc': 'Wolayitaa aadaa biittaa ubbaa.',
    'home.communityLabel': 'Asaa Issippe Shiishiyaa',
    'home.communityDesc': 'Laammaan asaa issippe shiishiyaa.',
    'home.educationLabel': 'Tamaaraa',
    'home.educationDesc': 'Layttaa ubban tamaaraa azazettaa.',
    'home.learnMission': 'Nu oosuwaa tamaarite',

    'home.kingsHighlight': '50+ Kawooti',
    'home.kingsExcerpt': '500+ laatta wodiyaa cinccatan & minnottan haggaaziida Wolayitaa wolqqaama kawoota laammaa koyyaa.',
    'home.languageHighlight': 'Qofaa & Odettaa',
    'home.languageExcerpt': 'Wolayitigna qofaa — bonchcho Wolayitaa qofaa — & yelataa giddo aadhiida aadaa odettaa giddo de7iya cimaa cinccataa demmanttite.',
    'home.foodHighlight': 'Aadaa Muzaa',
    'home.foodExcerpt': 'Inseeta ayssuwan giigissida muzaa giddo asaa issippe shiishiya geeshsha buna bayraataa gakkanaassi bonchcho Wolayitaa shoo7o erettite.',

    'home.proverbLabel': 'Wolayitaa Cinccataa',
    'home.proverbEn': '"A person who knows their roots stands firm like a great tree."',
    'home.proverbWo': '"Tarikaa erettiday asa wolqqaama zooqiyaadan minnana danddayees."',
    'home.proverbAm': '"ሥሮቹን የሚያውቅ ሰው እንደ ታላቅ ዛፍ ቆሞ ይቆማል።"',

    'home.statsLanguages': 'Miliyoone Haasayiyaageeti',
    'home.statsSqKm': 'Kilo Miitta Laaqqa',
    'home.statsPages': 'Laammaa Xaafaa',
    'home.statsYears': 'Laattaa Tarikaa',

    'kings.title': 'Kaawa Laammaa',
    'kings.subtitle': 'Wolayitaa Tarikaa Maxaafaa Ichchaasida 50+ Kawooti Erettite',
    'kings.viewAll': 'Ubbaa 50+ Kawooti Be7ite',
    'kings.featured': 'Siiqettidaa',
    'kings.nearEra': 'Kawo Tona Wodiyaa Hezzzu',
    'kings.earlierEras': 'Sintaa Wodiyaa',
    'kings.exploreRoyalLegacy': 'Kaawa Laammaa Shaarettite',
    'kings.diplomat': 'Haaraa Oothoysiyaa',
    'kings.warriorKing': 'Olaa Kaawaa',
    'kings.builder': 'Kexxiyaa',
    'kings.modernizer': 'Oorata Oothoysiyaa',
    'kings.lastMonarch': 'Wurssetaa Bantta Kaawaa',
    'kings.lawGiver': 'Higgee Immiyaa',
    'kings.expander': 'Biittaa Gita Oothoysiyaa',
    'kings.founder': 'Ayssi Kaawaa',

    'visit.planYourVisit': 'Bisaa Qofaa Giigissaa',
    'visit.essentialTravel': 'Bisuwa Azazettaa Eriiyaa',
    'visit.heritageSites': 'Laammaa Sohuwa',
    'visit.naturalCultural': 'Biittaa & Aadaa Malkkattaa',
    'visit.tangibleHeritage': 'Be7ettanaa Laammaa',
    'visit.physicalArtifacts': 'Oottuwaa & Kushe Oosuwa',
    'visit.intangibleHeritage': 'Be7ettennaa Laammaa',
    'visit.traditions': 'Aadaa & Oosuwaa',
    'visit.whereToStay': 'Awan Uttanesii',
    'visit.hotels': 'Keellaa & Xanaa Keetaa',
    'visit.festivals': 'Bayraataa',
    'visit.culturalCelebrations': 'Aadaa Ufaissiyaa',
    'visit.heritageCulture': 'Laammaa & Aadaa',
    'visit.practicalInfo': 'Oosuwan Eriiyaa',
    'visit.title': 'Wolayitaa Bisaa',
    'visit.subtitle': 'Itiyophiyaa Laammaa Wozanaa Ogiyaa Bisaa Qofaa Giigissaa',
    'visit.gettingThere': 'Bessiyaa',
    'visit.accommodation': 'Uttana Sohuwa',
    'visit.bestTime': 'Lo77o Wodiyaa',

    'language.overview': 'Qofa Leemiso',
    'language.wolaitigna': 'Wolayitigna qofaa & maxaafaa',
    'language.dictionary': 'Qofa Maxaafaa',
    'language.translations': 'Wolayitaa-English qofa laammuwaa',
    'language.proverbs': 'Odettaa',
    'language.traditionalWisdom': 'Aadaa Cinccataa',
    'language.sayings': 'Hasarettaa',
    'language.commonExpressions': 'Bonxxuwaa hasarettaa',
    'language.puzzles': 'Taappettaa & Siiraa',
    'language.brainTeasers': 'Qoppaa Oychchiyaa & Siiraa',
    'language.resources': 'Azazettaa',
    'language.title': 'Wolayitigna Qofaa',
    'language.subtitle': 'Bonchcho Wolayitaa qofaa & maxaafaa demmanttite',

    'gifaataa.title': 'Gifaataa — Wolayitaa Layttaa Amuwaa',
    'gifaataa.subtitle': 'Wolayitaa daroo gitataa aadaa bayraataa ufaissiyaa',
    'gifaataa.description': 'Gifaataa Wolayitaa Layttaa Amuwaa ufaissiyaa',
    'gifaataa.whenCelebrated': 'Awan Ufaisettiyaagii',
    'gifaataa.traditions': 'Aadaa Ufaissiyaa',
    'gifaataa.significance': 'Aadaa Bonchchuwaa',

    'dingguza.title': 'Dingguza — Aadaa Eqqaa',
    'dingguza.subtitle': 'Wolayitaa mallattaa eqqaa',
    'dingguza.description': 'Dingguza Wolayitaa aadaa kushshi kussiya eqqaa',
    'dingguza.patterns': 'Aadaa Misilee',
    'dingguza.making': 'Kushshi Kussuwa Oosuwaa',
    'dingguza.significance': 'Aadaa Bonchchuwaa',

    'culture.title': 'Wolayitaa Aadaa',
    'culture.subtitle': 'Dure aadaa & galla galla deewaa',
    'culture.dailyLife': 'Galla Galla Deewaa',
    'culture.socialStructure': 'Asaa Giigisuwaa',
    'culture.ceremonies': 'Deyo Bayraataa',
    'culture.traditions': 'Aadaa Oosuwaa',

    'history.title': 'Wolayitaa Tarikaa',
    'history.subtitle': 'Xeetu laattaa dure laammaa ogiyaa',
    'history.ancientOrigins': 'Cimaa Aysiyaa',
    'history.medievalPeriod': 'Gidduwaa Wodiyaa',
    'history.royalEra': 'Kaawa Wodiyaa',
    'history.modernHistory': 'Hachi Wodiyaa Tarikaa',

    'food.title': 'Wolayitaa Muzaa',
    'food.subtitle': 'Aadaa muzaa & mokkaa laammaa',
    'food.traditional': 'Aadaa Muzaa',
    'food.ingredients': 'Biittaa Mishshaa',
    'food.preparation': 'Giigissiya Oosuwaa',
    'food.celebrations': 'Bayraata Muzaa',

    'music.title': 'Wolayitaa Yeezaa',
    'music.subtitle': 'Aadaa yeezaa & yezo laammaa',
    'music.instruments': 'Aadaa Yezo Michchuwaa',
    'music.songs': 'Siiqettida Yeezaa',
    'music.dances': 'Aadaa Paxxaalaa',

    'festivals.title': 'Bayraataa & Ufaissiyaa',
    'festivals.subtitle': 'Layttaa layttaa ufaissiyaa & aadaa oosuwaa',
    'festivals.annual': 'Layttaa Bayraataa',
    'festivals.religious': 'Amanuwa Ufaissiyaa',
    'festivals.cultural': 'Aadaa Oosuwaa',

    'gallery.title': 'Misilaa Keellaa',
    'gallery.subtitle': 'Wolayitaa laammaa be7iya ogiyaa',
    'gallery.landscapes': 'Biittaa Bonchchuwaa',
    'gallery.people': 'Asaa & Aadaa',
    'gallery.artifacts': 'Aadaa Oottuwaa',
    'gallery.ceremonies': 'Bayraataa',

    'about.title': 'Wolayitaa Museum Wozanaa',
    'about.subtitle': 'Wolayitaa laammaa naagettiyaa & laammuwaa',
    'about.mission': 'Nu Oosuwaa',
    'about.vision': 'Nu Be7uwaa',
    'about.team': 'Nu Koomaa',
    'about.contact': 'Nuuni Qaxxaraa',

    'contact.title': 'Nuuni Qaxxaraa',
    'contact.subtitle': 'Nuuni haasayettite',
    'contact.name': 'Suntthaa',
    'contact.email': 'Email',
    'contact.message': 'Qaala',
    'contact.send': 'Qaala Mokkite',
    'contact.address': 'Sohuwa',
    'contact.phone': 'Bilbilaa',

    'footer.quickLinks': 'Ellesiyaa Geeshaa',
    'footer.heritage': 'Laammaa',
    'footer.resources': 'Azazettaa',
    'footer.connect': 'Qaxxaraa',
    'footer.copyright': 'Ubbaa maataa naagettida',
    'footer.preserving': 'Wolayitaa Laammaa Naagettiyaa',

    'heritage.title': 'Laammaa Sohuwa',
    'heritage.subtitle': 'Wolayitaa geeshsha & tarikaa sohuwa demmanttite',
    'heritage.natural': 'Biittaa Sohuwa',
    'heritage.cultural': 'Aadaa Sohuwa',
    'heritage.historical': 'Tarikaa Sohuwa',

    'people.title': 'Bonchcho Asaa',
    'people.subtitle': 'Wolayitaa haarissanchaa & laammetuwaa ufaissiyaa',
    'people.leaders': 'Haarissanchaa',
    'people.scholars': 'Tamaarisiyaa',
    'people.artists': 'Kushe Oottoysaa',

    'calendar.title': 'Wolayitaa Wodiyaa Maxaafaa',
    'calendar.subtitle': 'Aadaa wodiyaa qoppuwa & gidaa',
    'calendar.months': 'Tunaa',
    'calendar.seasons': 'Gidaa',
    'calendar.celebrations': 'Bonchcho Gallasaa',

    'marccuwaa.title': 'Marccuwaa — Aadaa Miishshaa',
    'marccuwaa.subtitle': 'Wolayitaa Kaawotettaa sintaa miishshaa',
    'marccuwaa.history': 'Tarikaa Wozanaa',
    'marccuwaa.usage': 'Aadaa Oosuwa',
    'marccuwaa.significance': 'Aadaa Bonchchuwaa',

    'ceremonies.title': 'Deyo Bayraataa',
    'ceremonies.subtitle': 'Aadaa deyo aadhuwaa',
    'ceremonies.birth': 'Yelettuwaa Bayraataa',
    'ceremonies.marriage': 'Geyuwaa Aadaa',
    'ceremonies.coming': 'Gita Wodiyaa',
    'ceremonies.funeral': 'Hayqquwaa Oosuwaa',

    'puzzles.title': 'Aadaa Taappettaa & Siiraa',
    'puzzles.subtitle': 'Wolayitaa qoppaa oychchiyaa & siiraa',

    'dictionary.title': 'Wolayitaa-English Qofa Maxaafaa',
    'dictionary.subtitle': 'Koshshiya qofalaa & hasarettaa',
    'dictionary.search': 'Qofalaa koyyaa...',
    'dictionary.selectLetter': 'Xaafaa doorite',

    'education.title': 'Tamaaraa Azazettaa',
    'education.subtitle': 'Wolayitaa laammaa wozanaa tamaarite',
    'education.materials': 'Tamaaraa Michchuwaa',
    'education.courses': 'Online Tamaaraa',
    'education.research': 'Qoppa Maxaafaa',

    'accommodation.title': 'Wolayitaan Awan Uttanesii',
    'accommodation.subtitle': 'Keellaa, xanaa keetaa, & imatta keetaa',
    'accommodation.hotels': 'Keellaa',
    'accommodation.guesthouses': 'Imatta Keetaa',
    'accommodation.lodges': 'Xanaa Keetaa',
  },

  // ─── AMHARIC ────────────────────────────────────────────────────────────────
  am: {
    'nav.home': 'መነሻ',
    'nav.gifaataa': 'ጊፋታ',
    'nav.dingguza': 'ዲንጉዛ',
    'nav.history': 'ታሪክ',
    'nav.culture': 'ባህል',
    'nav.music': 'ሙዚቃ',
    'nav.food': 'ምግብ',
    'nav.gallery': 'ምስል ቤት',
    'nav.kings': 'ነገስታት',
    'nav.visit': 'ጉብኝት',
    'nav.language': 'ቋንቋ እና ጥበብ',
    'nav.about': 'ስለ እኛ',
    'nav.contact': 'አግኙን',
    'nav.quiz': 'ጥያቄዎች',

    'hero.title': 'የወላይታ ብልጽጋ ቅርስ ያግኙ',
    'hero.subtitle': 'በኢትዮጵያ ልብ ውስጥ የዘመናት ባህል፣ ታሪክ እና ንጉሳዊ ቅርስ ያስሱ',
    'hero.cta': 'ተጨማሪ ያግኙ',
    'hero.history': 'ታሪክ ያስሱ',

    'common.readMore': 'ተጨማሪ ያንብቡ',
    'common.learnMore': 'ተጨማሪ ይማሩ',
    'common.viewAll': 'ሁሉንም ይመልከቱ',
    'common.explore': 'ያስሱ',
    'common.discover': 'ያግኙ',
    'common.back': 'ወደ ኋላ',
    'common.next': 'ቀጣይ',
    'common.previous': 'ቀዳሚ',
    'common.submit': 'ላክ',
    'common.cancel': 'ሰርዝ',
    'common.close': 'ዝጋ',
    'common.loading': 'በመጫን ላይ...',
    'common.search': 'ፈልግ',

    'home.title': 'ወላይታ — ቅርስ፣ ኩራት እና ሥልጣኔ',
    'home.museumTitle': 'የወላይታ ባህላዊ ዲጂታል ሙዚየም',
    'home.heroLocation': 'ወላይታ፣ ደቡብ ኢትዮጵያ',
    'home.subtitle': 'በወላይታ ሕዝብ ዘመናት ታሪክ፣ ባህል እና ወጎች ውስጥ ጉዞ።',
    'home.seoDescription': 'የወላይታ ባህላዊ ዲጂታል ሙዚየም — ንጉሣዊ ታሪክ፣ ጊፋታ፣ ዲንጉዛ፣ ቋንቋ፣ ሙዚቃ እና ሕያው ቅርስ።',
    'home.cta': 'ጉዞውን ይጀምሩ',
    'home.takeQuiz': 'እውቀትዎን ይሞክሩ',
    'home.finalCtaDesc': 'ታሪኮች፣ ጋለሪዎች እና መማሪያ በኩል የወላይታ ቅርስ ያግኙ።',

    'home.welcomeEn': 'Welcome',
    'home.welcomeWo': 'Halaale',
    'home.welcomeAm': 'እንኳን ደህና መጡ',
    'home.trilingualTagline': 'ወላይታን በሦስት ቋንቋዎች ይለማመዱ',

    'home.prideTitle': 'የወላይታ ማንነት ሁለት ምሰሶዎች',
    'home.prideSubtitle': 'ሁለት በዓለም አቀፍ ደረጃ የሚታወቁ ውድ ሀብቶች ወላይታን ለዓለም ይወክላሉ',

    'home.gifaataaCardDesc': 'የታደሰ፣ ማህበረሰብ እና ባህላዊ ኩራትን የሚያከብር ድንቅ ፌስቲቫል። ሁሉም ወላይታ ሙዚቃ፣ ዳንስ እና ጥንታዊ ሥነ ሥርዓቶች ሲያሟሟቅ።',
    'home.dingguuzaCardDesc': 'ጥቁር፣ ቢጫ እና ቀይ ሰቃሚ ልብስ — በእያንዳንዱ ክብረ በዓል ኩራት ሆኖ የሚለበስ — የወላይታ ማንነት ሕያው ሸራ።',
    'home.exploreGifaataa': 'ጊፋታ ያስሱ',
    'home.exploreDingguza': 'ዲንጉዛ ያስሱ',
    'home.annualFestival': 'አመታዊ ፌስቲቫል',
    'home.globalRecognition': 'ዓለም አቀፍ እውቅና',
    'home.handwoven': 'እጅ ሸመነ',
    'home.culturalSymbol': 'ባህላዊ ምልክት',

    'home.alsoDiscover': 'ተጨማሪ ያግኙ',
    'home.marccuwaaLabel': 'ማርቹዋ (ገንዘብ)',
    'home.calendarLabel': 'የወላይታ ቀን መቁጠሪያ',
    'home.heritageSitesLabel': 'የቅርስ ቦታዎች',
    'home.lifeCeremoniesLabel': 'የህይወት ሥነ ሥርዓቶች',

    'home.visitTitle': 'ወላይታን ይጎብኙ',
    'home.visitLandOf': 'የ50+ ነገስታት ምድር',
    'home.mightyKings': 'ጠንካራ ነገስታት',
    'home.yearsHistory': 'ዓመታት ታሪክ',
    'home.legacyLives': 'ቅርስ ይቀጥላል',
    'home.meetKings': 'ነገስታቱን ይጎብኙ',
    'home.planVisit': 'ጉብኝትዎን ያቅዱ',
    'home.completeLineage': '📜 ሙሉ ንጉሳዊ ዘር',
    'home.kingdomHeritage': '🏛️ የንጉሳዊ ቅርስ',

    'home.civilizationTitle': 'የሥልጣኔ ቅርስ',
    'home.civilizationDesc': 'የደቡብ ኢትዮጵያ ወላይታ ሕዝቦች ልዩ እና ኃይለኛ ቅርስ አላቸው — የነጻ መንግስትነት፣ የላቀ እርሻ እና ጥልቅ ማህበራዊ መዋቅር ታሪክ ያለው የኢትዮጵያ ሥልጣኔ ምሰሶ።',

    'home.preservingTitle': 'ማንነታችንን እናስጠብቅ',
    'home.preservingDesc': 'በፍጥነት ዘመናዊ በሆነ ዓለም ውስጥ፣ እኛ ማን እንደሆንን ዋናው ነገር ማቆየት ቅድሚያ ይሰጠዋል። ይህ መድረክ የቅድመ አያቶቻችን ጥበብ፣ ጥበብ እና ታሪኮች ዲጂታል ማከማቻ ሆኖ ያገለግላል።',
    'home.globalReach': 'ዓለም አቀፍ ተደራሽነት',
    'home.globalReachDesc': 'የወላይታ ባህልን ለዓለም ማካፈል።',
    'home.communityLabel': 'ማህበረሰብ',
    'home.communityDesc': 'ሰዎችን በጋራ ቅርስ ማገናኘት።',
    'home.educationLabel': 'ትምህርት',
    'home.educationDesc': 'ለሁሉም ዕድሜ የትምህርት ምንጮች።',
    'home.learnMission': 'ስለ ዓላማችን ይወቁ',

    'home.kingsHighlight': '50+ ነገስታት',
    'home.kingsExcerpt': 'ለ500+ ዓመታት በጥበብ እና ድፍረት ያገለገሉ የወላይታ ኃያል ነገስታት ዘር ይከታተሉ።',
    'home.languageHighlight': 'ቋንቋ እና ምሳሌዎች',
    'home.languageExcerpt': 'ወላይትኛን — ወላይታ ቋንቋ — እና በትውልድ ውስጥ ካለፉ ባህላዊ ምሳሌዎች ውስጥ ያለውን ጥንታዊ ጥበብ ያግኙ።',
    'home.foodHighlight': 'ባህላዊ ምግብ',
    'home.foodExcerpt': 'ከኢንሴት ምግቦች እስከ ማህበረሰቦችን ለዘመናት ያሰባሰበው ቅዱስ የቡና ሥነ ሥርዓት ድረስ ልዩ ወላይታ ጣዕም ይለማመዱ።',

    'home.proverbLabel': 'የወላይታ ጥበብ',
    'home.proverbEn': '"A person who knows their roots stands firm like a great tree."',
    'home.proverbWo': '"Tarikaa erettiday asa wolqqaama zooqiyaadan minnana danddayees."',
    'home.proverbAm': '"ሥሮቹን የሚያውቅ ሰው እንደ ታላቅ ዛፍ ቆሞ ይቆማል።"',

    'home.statsLanguages': 'ሚሊዮን ተናጋሪዎች',
    'home.statsSqKm': 'ካሬ ኪሎ ሜትር',
    'home.statsPages': 'የቅርስ ገፆች',
    'home.statsYears': 'ዓመታት ታሪክ',

    'kings.title': 'ንጉሳዊ ቅርስ',
    'kings.subtitle': 'የወላይታ ታሪክን ያዋቀሩት 50+ ነገስታት ያግኙ',
    'kings.viewAll': 'ሁሉንም 50+ ነገስታት ይመልከቱ',
    'kings.featured': 'የተመረጡ',
    'kings.nearEra': 'በካዎ ቶና ዘመን',
    'kings.earlierEras': 'ቀደምት ዘመናት',
    'kings.exploreRoyalLegacy': 'ንጉሳዊ ቅርስ ያስሱ',
    'kings.diplomat': 'ዲፕሎማቱ',
    'kings.warriorKing': 'ወታደራዊ ንጉሥ',
    'kings.builder': 'ገንቢው',
    'kings.modernizer': 'ዘመናዊው',
    'kings.lastMonarch': 'የመጨረሻው ነጻ ንጉሥ',
    'kings.lawGiver': 'ሕግ ሰጪው',
    'kings.expander': 'ግዛት ሰፋሪው',
    'kings.founder': 'መስራቹ ንጉሥ',

    'visit.planYourVisit': 'ጉብኝትዎን ያቅዱ',
    'visit.essentialTravel': 'አስፈላጊ የጉዞ መረጃ',
    'visit.heritageSites': 'የቅርስ ቦታዎች',
    'visit.naturalCultural': 'ተፈጥሯዊ እና ባህላዊ ምልክቶች',
    'visit.tangibleHeritage': 'ተደራሽ ቅርስ',
    'visit.physicalArtifacts': 'አካላዊ ቅርሶች እና እደ ጥበቦች',
    'visit.intangibleHeritage': 'የማይዳሰስ ቅርስ',
    'visit.traditions': 'ባህሎች እና ልማዶች',
    'visit.whereToStay': 'የሚቆዩበት ቦታ',
    'visit.hotels': 'ሆቴሎች እና ሎጆች',
    'visit.festivals': 'ፌስቲቫሎች',
    'visit.culturalCelebrations': 'ባህላዊ ክብረ በዓላት',
    'visit.heritageCulture': 'ቅርስ እና ባህል',
    'visit.practicalInfo': 'ተግባራዊ መረጃ',
    'visit.title': 'ወላይታን ይጎብኙ',
    'visit.subtitle': 'ወደ የኢትዮጵያ ቅርስ ልብ ጉዞዎን ያቅዱ',
    'visit.gettingThere': 'እንዴት መድረስ እንደሚቻል',
    'visit.accommodation': 'የማረፊያ ቦታዎች',
    'visit.bestTime': 'ምርጥ ጊዜ ለጉብኝት',

    'language.overview': 'የቋንቋ አጠቃላይ እይታ',
    'language.wolaitigna': 'ወላይትኛ ቋንቋ እና ጽሑፍ',
    'language.dictionary': 'መዝገበ ቃላት',
    'language.translations': 'ወላይትኛ-እንግሊዝኛ ትርጉሞች',
    'language.proverbs': 'ምሳሌዎች',
    'language.traditionalWisdom': 'ባህላዊ ጥበብ',
    'language.sayings': 'አባባሎች',
    'language.commonExpressions': 'የተለመዱ አገላለጾች',
    'language.puzzles': 'እንቆቅልሾች እና ጥያቄዎች',
    'language.brainTeasers': 'የአዕምሮ ፈተናዎች',
    'language.resources': 'ምንጮች',
    'language.title': 'ወላይትኛ ቋንቋ',
    'language.subtitle': 'ውብ የወላይታ ቋንቋ እና ፊደላት ያግኙ',

    'gifaataa.title': 'ጊፋታ — የወላይታ አዲስ ዓመት',
    'gifaataa.subtitle': 'ወላይታ ዋናው ባህላዊ ፌስቲቫል',
    'gifaataa.description': 'ጊፋታ የወላይታ አዲስ ዓመት ክብረ በዓል ነው',
    'gifaataa.whenCelebrated': 'መቼ ይከበራል',
    'gifaataa.traditions': 'ባህላዊ ክብረ በዓላት',
    'gifaataa.significance': 'ባህላዊ ጠቀሜታ',

    'dingguza.title': 'ዲንጉዛ — ባህላዊ ልብስ',
    'dingguza.subtitle': 'የወላይታ ማንነት የሚወክል ልዩ ጨርቅ',
    'dingguza.description': 'ዲንጉዛ የወላይታ ባህላዊ እጅ ሸመነ ጨርቅ ነው',
    'dingguza.patterns': 'ባህላዊ ቅርጾች',
    'dingguza.making': 'የሸምኖ ሂደት',
    'dingguza.significance': 'ባህላዊ ጠቀሜታ',

    'culture.title': 'የወላይታ ባህል',
    'culture.subtitle': 'ብልጽጋ ወጎች እና በወላይታ የዕለት ተዕለት ኑሮ',
    'culture.dailyLife': 'የዕለት ተዕለት ኑሮ',
    'culture.socialStructure': 'ማህበራዊ አወቃቀር',
    'culture.ceremonies': 'የህይወት ሥነ ሥርዓቶች',
    'culture.traditions': 'ባህላዊ ልማዶች',

    'history.title': 'የወላይታ ታሪክ',
    'history.subtitle': 'በዘመናት ብልጽጋ ቅርስ ውስጥ ጉዞ',
    'history.ancientOrigins': 'ጥንታዊ ምንጭ',
    'history.medievalPeriod': 'የመካከለኛ ዘመን',
    'history.royalEra': 'ንጉሳዊ ዘመን',
    'history.modernHistory': 'ዘመናዊ ታሪክ',

    'food.title': 'የወላይታ ምግብ',
    'food.subtitle': 'ባህላዊ ምግቦች እና የምግብ ቅርስ',
    'food.traditional': 'ባህላዊ ምግቦች',
    'food.ingredients': 'የአካባቢ ግብዓቶች',
    'food.preparation': 'የማዘጋጀት ዘዴዎች',
    'food.celebrations': 'የክብረ በዓል ምግቦች',

    'music.title': 'የወላይታ ሙዚቃ',
    'music.subtitle': 'ባህላዊ ዘፈኖች እና የሙዚቃ ቅርስ',
    'music.instruments': 'ባህላዊ መሣሪያዎች',
    'music.songs': 'ታዋቂ ዘፈኖች',
    'music.dances': 'ባህላዊ ዳንሶች',

    'festivals.title': 'ፌስቲቫሎች እና ክብረ በዓላት',
    'festivals.subtitle': 'አመታዊ ፌስቲቫሎች እና ባህላዊ ዝግጅቶች',
    'festivals.annual': 'አመታዊ ፌስቲቫሎች',
    'festivals.religious': 'ሃይማኖታዊ ክብረ በዓላት',
    'festivals.cultural': 'ባህላዊ ዝግጅቶች',

    'gallery.title': 'የፎቶ ማዕከል',
    'gallery.subtitle': 'በወላይታ ቅርስ ውስጥ የምስል ጉዞ',
    'gallery.landscapes': 'መልክዓ ምድር',
    'gallery.people': 'ሰዎች እና ባህል',
    'gallery.artifacts': 'ቅርሶች',
    'gallery.ceremonies': 'ሥነ ሥርዓቶች',

    'about.title': 'ስለ ወላይታ ሙዚየም',
    'about.subtitle': 'የወላይታ ቅርስን መጠበቅ እና ማካፈል',
    'about.mission': 'ዓላማችን',
    'about.vision': 'ራዕያችን',
    'about.team': 'ቡድናችን',
    'about.contact': 'አግኙን',

    'contact.title': 'አግኙን',
    'contact.subtitle': 'ከእኛ ጋር ይገናኙ',
    'contact.name': 'ስም',
    'contact.email': 'ኢሜይል',
    'contact.message': 'መልዕክት',
    'contact.send': 'መልዕክት ላክ',
    'contact.address': 'አድራሻ',
    'contact.phone': 'ስልክ',

    'footer.quickLinks': 'ፈጣን አገናኞች',
    'footer.heritage': 'ቅርስ',
    'footer.resources': 'ምንጮች',
    'footer.connect': 'ተገናኙ',
    'footer.copyright': 'ሁሉም መብቶች የተጠበቁ ናቸው',
    'footer.preserving': 'የወላይታ ቅርስን መጠበቅ',

    'heritage.title': 'የቅርስ ቦታዎች',
    'heritage.subtitle': 'የወላይታ ቅዱስ እና ታሪካዊ ቦታዎች ያግኙ',
    'heritage.natural': 'ተፈጥሯዊ ቦታዎች',
    'heritage.cultural': 'ባህላዊ ቦታዎች',
    'heritage.historical': 'ታሪካዊ ቦታዎች',

    'people.title': 'ታዋቂ ሰዎች',
    'people.subtitle': 'የወላይታ መሪዎች እና ለውጥ አምጪዎችን ማክበር',
    'people.leaders': 'የማህበረሰብ መሪዎች',
    'people.scholars': 'ምሁራን',
    'people.artists': 'አርቲስቶች',

    'calendar.title': 'የወላይታ ቀን መቁጠሪያ',
    'calendar.subtitle': 'ባህላዊ የጊዜ አቆጣጠር እና ወቅቶች',
    'calendar.months': 'ወራት',
    'calendar.seasons': 'ወቅቶች',
    'calendar.celebrations': 'አስፈላጊ ቀናት',

    'marccuwaa.title': 'ማርቹዋ — ባህላዊ ገንዘብ',
    'marccuwaa.subtitle': 'የወላይታ ግዛት ታሪካዊ ገንዘብ',
    'marccuwaa.history': 'ታሪካዊ ዳራ',
    'marccuwaa.usage': 'ባህላዊ አጠቃቀም',
    'marccuwaa.significance': 'ባህላዊ ጠቀሜታ',

    'ceremonies.title': 'የህይወት ሥነ ሥርዓቶች',
    'ceremonies.subtitle': 'ባህላዊ የምርቃት ሥነ ሥርዓቶች',
    'ceremonies.birth': 'የልደት ሥነ ሥርዓቶች',
    'ceremonies.marriage': 'የጋብቻ ወጎች',
    'ceremonies.coming': 'ዕድሜ መድረስ',
    'ceremonies.funeral': 'የቀብር ሥነ ሥርዓቶች',

    'puzzles.title': 'ባህላዊ እንቆቅልሾች',
    'puzzles.subtitle': 'የወላይታ የአዕምሮ ፈተናዎች',

    'dictionary.title': 'ወላይትኛ-እንግሊዝኛ መዝገበ ቃላት',
    'dictionary.subtitle': 'አስፈላጊ ቃላት እና ሀረጎች',
    'dictionary.search': 'ቃላት ይፈልጉ...',
    'dictionary.selectLetter': 'ፊደል ይምረጡ',

    'education.title': 'የትምህርት ምንጮች',
    'education.subtitle': 'ስለ ወላይታ ቅርስ ይማሩ',
    'education.materials': 'የመማሪያ ቁሳቁሶች',
    'education.courses': 'የኦንላይን ኮርሶች',
    'education.research': 'የምርምር ሰነዶች',

    'accommodation.title': 'ወላይታ ውስጥ የሚቆዩበት ቦታ',
    'accommodation.subtitle': 'ሆቴሎች፣ ሎጆች እና ማረፊያዎች',
    'accommodation.hotels': 'ሆቴሎች',
    'accommodation.guesthouses': 'የእንግዳ ቤቶች',
    'accommodation.lodges': 'ሎጆች',
  },
};
