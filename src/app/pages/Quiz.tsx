import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trophy, Star, Clock, ChevronRight, RotateCcw, Home,
  CheckCircle, XCircle, BookOpen, MapPin, Music2, Utensils,
  Crown, Globe, Landmark, Sparkles, Flame, Target, Award,
  ArrowLeft, Zap, Shield, Heart
} from 'lucide-react';
import { Link } from 'react-router';

// ─── Types ────────────────────────────────────────────────────────────────────

type QuestionType = 'multiple-choice' | 'image-identify' | 'true-false' | 'fill-blank';

interface Question {
  id: number;
  category: string;
  type: QuestionType;
  question: string;
  image?: string;
  imageAlt?: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  ring: string;
  description: string;
  questionCount: number;
}

type GameState = 'landing' | 'category' | 'playing' | 'review' | 'results';

// ─── Question Bank ─────────────────────────────────────────────────────────────

const ALL_QUESTIONS: Question[] = [
  // HISTORY
  {
    id: 1, category: 'history', type: 'multiple-choice', difficulty: 'medium',
    question: 'Who was the last independent monarch of the Wolaita Kingdom before annexation?',
    options: ['Kawo Tona Gaga', 'Kawo Toqa (Tona Aura)', 'Kawo Kawudana', 'Kawo Sumuro'],
    correct: 1,
    explanation: 'Kawo Toqa (also known as Tona Aura) was the last independent monarch of Wolaita, reigning until 1894 when Emperor Menelik II annexed the kingdom.'
  },
  {
    id: 2, category: 'history', type: 'multiple-choice', difficulty: 'hard',
    question: 'Kawo Tona Gaga is historically known as which of the following?',
    options: ['The Warrior King', 'The Builder', 'The Diplomat', 'The Law Giver'],
    correct: 2,
    explanation: 'Kawo Tona Gaga, who reigned in the early 1800s, is celebrated as "The Diplomat" for his remarkable skill in forging alliances and managing relations with neighboring kingdoms.'
  },
  {
    id: 3, category: 'history', type: 'multiple-choice', difficulty: 'easy',
    question: 'Approximately how many kings (Kawos) have ruled the Wolaita Kingdom throughout history?',
    options: ['About 20', 'About 35', 'More than 50', 'About 10'],
    correct: 2,
    explanation: 'Wolaita has a rich royal lineage of more than 50 kings (Kawos), spanning many centuries from the founding monarch Kawo Motolomi to modern times.'
  },
  {
    id: 4, category: 'history', type: 'multiple-choice', difficulty: 'hard',
    question: 'Which Wolaita king earned the title "The Founding Monarch"?',
    options: ['Kawo Gobo', 'Kawo Damot', 'Kawo Motolomi', 'Kawo Gichata'],
    correct: 2,
    explanation: 'Kawo Motolomi, who reigned in the pre-1500s era, is honored as the Founding Monarch of the Wolaita Kingdom, establishing the royal lineage that would span centuries.'
  },
  {
    id: 5, category: 'history', type: 'true-false', difficulty: 'medium',
    question: 'The Wolaita Zone is located in the Southern Nations, Nationalities, and Peoples\' Region (SNNPR) of Ethiopia.',
    options: ['True', 'False', 'Partially True', 'Unknown'],
    correct: 0,
    explanation: 'True. Wolaita Zone is indeed located in the SNNPR of Ethiopia, with Wolaita Sodo as its administrative capital.'
  },
  {
    id: 6, category: 'history', type: 'multiple-choice', difficulty: 'medium',
    question: 'What is the administrative capital city of Wolaita Zone?',
    options: ['Hawassa', 'Wolaita Sodo', 'Arba Minch', 'Jimma'],
    correct: 1,
    explanation: 'Wolaita Sodo (also spelled Sodo) is the capital city of Wolaita Zone, serving as the political, commercial, and cultural hub of the region.'
  },
  {
    id: 7, category: 'history', type: 'multiple-choice', difficulty: 'hard',
    question: 'Which king was known as "The Modernizer" among Wolaita rulers?',
    options: ['Kawo Sumuro', 'Kawo Gichata', 'Kawo Gobo', 'Kawo Damot'],
    correct: 1,
    explanation: 'Kawo Gichata, who reigned from the 1850s to 1880s, is remembered as "The Modernizer" for introducing new administrative practices and reforms to the Wolaita Kingdom.'
  },
  {
    id: 8, category: 'history', type: 'multiple-choice', difficulty: 'medium',
    question: 'Kawo Gobo is remembered in Wolaita history as which of the following?',
    options: ['The Territorial Expander', 'The Law Giver', 'The Builder', 'The Warrior King'],
    correct: 1,
    explanation: 'Kawo Gobo, who reigned in the 1600s–1700s, is celebrated as "The Law Giver" for codifying customary laws and establishing governance structures that shaped Wolaita society.'
  },

  // CULTURE & DAILY LIFE
  {
    id: 9, category: 'culture', type: 'multiple-choice', difficulty: 'easy',
    question: 'What is the traditional house style of the Wolaita people called?',
    options: ['Tukul', 'Gotera', 'Chika Bet', 'Muna'],
    correct: 0,
    explanation: 'The traditional Wolaita house, known as "Tukul," features a conical thatched roof and circular walls made from mud and poles. It represents centuries of architectural wisdom adapted to the local climate.'
  },
  {
    id: 10, category: 'culture', type: 'multiple-choice', difficulty: 'medium',
    question: 'What is the Wolaita traditional system of cooperative labor called, where community members work together on each other\'s farms?',
    options: ['Debo', 'Wenfel', 'Dabo', 'Iqub'],
    correct: 0,
    explanation: '"Debo" is the Wolaita traditional system of communal labor exchange, where neighbors and community members take turns working on each other\'s agricultural land, reinforcing social bonds.'
  },
  {
    id: 11, category: 'culture', type: 'multiple-choice', difficulty: 'hard',
    question: 'What is the Wolaita traditional social savings and credit system called?',
    options: ['Debo', 'Iqub', 'Iddir', 'Mela'],
    correct: 1,
    explanation: '"Iqub" is the traditional rotating savings and credit association practiced widely in Ethiopia, including among the Wolaita people. Members contribute regularly and take turns receiving the pooled sum.'
  },
  {
    id: 12, category: 'culture', type: 'multiple-choice', difficulty: 'medium',
    question: 'What does the Wolaita word "Kawo" mean?',
    options: ['Elder', 'King / Chief', 'Warrior', 'Priest'],
    correct: 1,
    explanation: '"Kawo" is the Wolaita word for King or Chief. The title was given to the ruling monarchs of the Wolaita Kingdom and is central to Wolaita royal history and identity.'
  },
  {
    id: 13, category: 'culture', type: 'multiple-choice', difficulty: 'easy',
    question: 'The Wolaita people are renowned for which traditional craft?',
    options: ['Gold jewelry making', 'Weaving colorful cotton cloth', 'Pottery and ceramics', 'Ironwork and blacksmithing'],
    correct: 1,
    explanation: 'Wolaita people are celebrated for their exceptional skill in weaving colorful cotton cloth. The distinctive Dingguza cloth, with its vibrant black, yellow, and red patterns, is recognized globally as a Wolaita cultural symbol.'
  },

  // GIFAATAA & FESTIVALS
  {
    id: 14, category: 'festivals', type: 'multiple-choice', difficulty: 'easy',
    question: 'What is Gifaataa?',
    options: ['A traditional Wolaita dance', 'The Wolaita New Year celebration', 'A harvest festival ritual', 'A royal coronation ceremony'],
    correct: 1,
    explanation: 'Gifaataa is the Wolaita New Year celebration — one of the most globally significant cultural identifiers of the Wolaita people. It is a vibrant festival marking renewal, community, and cultural pride.'
  },
  {
    id: 15, category: 'festivals', type: 'multiple-choice', difficulty: 'medium',
    question: 'During Gifaataa, what is the traditional greeting exchanged among Wolaita people?',
    options: ['"Aanja Gifaataa"', '"Wolaita Bette"', '"Kawo Gide"', '"Tona Wola"'],
    correct: 0,
    explanation: '"Aanja Gifaataa" is the traditional New Year greeting in Wolaitigna, roughly meaning "Happy New Year." It is exchanged with joy and warmth during the Gifaataa celebrations.'
  },
  {
    id: 16, category: 'festivals', type: 'multiple-choice', difficulty: 'hard',
    question: 'What unique cultural activity is traditionally central to Gifaataa celebrations?',
    options: [
      'Competitive archery tournaments',
      'Ceremonial cattle racing across rivers',
      'Communal singing, dancing, feasting, and the display of traditional attire including Dingguza',
      'Public recitation of ancient epic poetry'
    ],
    correct: 2,
    explanation: 'Gifaataa celebrations revolve around communal singing and dancing in traditional Wolaita music styles, shared feasting on traditional foods, and the proud display of Dingguza cloth and other traditional attire — reinforcing cultural identity.'
  },
  {
    id: 17, category: 'festivals', type: 'multiple-choice', difficulty: 'easy',
    question: 'What are the identity colors of the Wolaita people?',
    options: ['Green, Gold, Blue', 'Black, Yellow, Red', 'White, Brown, Green', 'Purple, Orange, White'],
    correct: 1,
    explanation: 'Black, Yellow, and Red are the iconic identity colors of the Wolaita people, prominently displayed in their traditional Dingguza cloth, festivals, and cultural symbols.'
  },

  // DINGGUZA & TANGIBLE HERITAGE
  {
    id: 18, category: 'heritage', type: 'multiple-choice', difficulty: 'easy',
    question: 'What is Dingguza?',
    options: [
      'A traditional Wolaita musical instrument',
      'The traditional woven cotton cloth of the Wolaita people',
      'A ceremonial cooking vessel',
      'A type of traditional crown worn by kings'
    ],
    correct: 1,
    explanation: 'Dingguza is the iconic traditional woven cotton cloth of the Wolaita people. Featuring distinctive black, yellow, and red patterns, it is one of the two most globally significant identifiers of Wolaita culture, alongside Gifaataa.'
  },
  {
    id: 19, category: 'heritage', type: 'multiple-choice', difficulty: 'medium',
    question: 'What is Marccuwaa in Wolaita cultural heritage?',
    options: [
      'A traditional Wolaita currency made from iron',
      'A type of ceremonial shield',
      'A traditional Wolaita currency/iron bar used as a medium of exchange',
      'A form of ancient writing'
    ],
    correct: 2,
    explanation: 'Marccuwaa refers to the traditional iron currency bars used as a medium of exchange in the Wolaita Kingdom. These iron bars represent an early sophisticated economic system predating modern currency.'
  },
  {
    id: 20, category: 'heritage', type: 'multiple-choice', difficulty: 'hard',
    question: 'The Wolaita traditional cloth Dingguza is primarily woven using which technique?',
    options: ['Knitting with needles', 'Hand-loom weaving with cotton threads', 'Machine embroidery', 'Batik dyeing'],
    correct: 1,
    explanation: 'Dingguza is created through traditional hand-loom weaving, where skilled artisans — often from hereditary weaving clans — interlace cotton threads to create the distinctive geometric patterns in Wolaita\'s signature black, yellow, and red colors.'
  },
  {
    id: 21, category: 'heritage', type: 'multiple-choice', difficulty: 'medium',
    question: 'Which of the following is a major heritage site in Wolaita?',
    options: ['Bonga Forest Reserve', 'Lake Abijata', 'Konso Cultural Landscape', 'Sodo Heritage Museum'],
    correct: 3,
    explanation: 'The Sodo Heritage Museum in Wolaita Sodo is a key heritage site preserving and displaying the material culture, royal artifacts, and historical records of the Wolaita people.'
  },

  // FOOD & CUISINE
  {
    id: 22, category: 'food', type: 'multiple-choice', difficulty: 'easy',
    question: 'What is the staple food crop most associated with Wolaita cuisine?',
    options: ['Teff', 'Enset (False Banana)', 'Wheat', 'Sorghum'],
    correct: 1,
    explanation: 'Enset (Ensete ventricosum), known locally as the "false banana" or "tree against hunger," is the cornerstone of Wolaita agriculture and cuisine. Nearly every meal in Wolaita involves enset-based foods.'
  },
  {
    id: 23, category: 'food', type: 'multiple-choice', difficulty: 'medium',
    question: 'What is "Bulla" in Wolaita traditional food?',
    options: [
      'A spiced beef stew',
      'A fermented enset porridge eaten during celebrations',
      'A type of flatbread made from teff',
      'A honey wine similar to tej'
    ],
    correct: 1,
    explanation: 'Bulla is a prized white porridge made from the starchy juice of the enset plant. It is considered a prestige food, often served during special celebrations, weddings, and to honored guests.'
  },
  {
    id: 24, category: 'food', type: 'multiple-choice', difficulty: 'medium',
    question: 'What is "Kocho" in Wolaita cuisine?',
    options: [
      'A spiced chicken dish',
      'A fermented enset flatbread',
      'A honey mead drink',
      'A vegetable soup'
    ],
    correct: 1,
    explanation: 'Kocho is a dense flatbread made from fermented enset pulp. It is one of the most important everyday foods in Wolaita, typically eaten with kitfo (minced meat), ayib (cottage cheese), or vegetable stews.'
  },
  {
    id: 25, category: 'food', type: 'multiple-choice', difficulty: 'hard',
    question: 'What traditional fermented beverage is widely consumed in Wolaita during festivals?',
    options: ['Areki', 'Tej (Honey Wine)', 'Tella (Barley Beer)', 'All of the above'],
    correct: 3,
    explanation: 'All three beverages — Areki (distilled spirit), Tej (honey wine), and Tella (grain-based beer) — are traditionally brewed and consumed in Wolaita, particularly during Gifaataa, weddings, and other major celebrations.'
  },

  // LANGUAGE
  {
    id: 26, category: 'language', type: 'multiple-choice', difficulty: 'easy',
    question: 'What language family does Wolaitigna (the Wolaita language) belong to?',
    options: ['Semitic', 'Omotic (Afro-Asiatic)', 'Cushitic', 'Nilo-Saharan'],
    correct: 1,
    explanation: 'Wolaitigna belongs to the Omotic branch of the Afro-Asiatic language family. It is spoken by over 2 million people, primarily in the Wolaita Zone of southern Ethiopia.'
  },
  {
    id: 27, category: 'language', type: 'multiple-choice', difficulty: 'medium',
    question: 'How do you say "Hello / Welcome" in Wolaitigna?',
    options: ['"Dera"', '"Mela"', '"Halaale"', '"Kairo"'],
    correct: 2,
    explanation: '"Halaale" is the traditional Wolaita greeting meaning "Hello" or "Welcome." It reflects the warm, hospitable culture of the Wolaita people.'
  },
  {
    id: 28, category: 'language', type: 'multiple-choice', difficulty: 'hard',
    question: 'What does the Wolaita proverb "Asa tuma daro ekkana" roughly mean?',
    options: [
      'A person who works hard will eat well',
      'One who listens to elders will find wisdom',
      'Unity is strength',
      'The heart of a community is its elders'
    ],
    correct: 0,
    explanation: 'This Wolaita proverb speaks to the value of hard work and diligence — a core cultural value in Wolaita society where agricultural labor and craftsmanship have always been sources of pride and survival.'
  },
  {
    id: 29, category: 'language', type: 'multiple-choice', difficulty: 'medium',
    question: 'What does "Wolaita" mean etymologically?',
    options: [
      'Land of the highlands',
      'People of the river',
      'Interpreted as "the able ones" or "those who can"',
      'Children of the sun'
    ],
    correct: 2,
    explanation: 'The name "Wolaita" is often interpreted as meaning "the able ones" or "those who can" — reflecting the legendary industriousness, resilience, and capability that the Wolaita people are historically known for across Ethiopia.'
  },
  {
    id: 30, category: 'language', type: 'multiple-choice', difficulty: 'easy',
    question: 'How do you say "Thank you" in Wolaitigna?',
    options: ['"Galatooma"', '"Ameseginalehu"', '"Galatanke"', '"Deriyo"'],
    correct: 2,
    explanation: '"Galatanke" means "Thank you" in Wolaitigna. The root "galata" (gratitude/thanks) appears in many Omotic languages across southern Ethiopia, reflecting shared linguistic heritage.'
  },

  // MUSIC
  {
    id: 31, category: 'music', type: 'multiple-choice', difficulty: 'medium',
    question: 'What is the traditional string instrument of the Wolaita people?',
    options: ['Masinko', 'Krar (Wolaita-style)', 'Begena', 'Washint'],
    correct: 1,
    explanation: 'The Krar in its Wolaita style is a traditional string instrument played in Wolaita music. The local playing technique and musical scales give it a distinctly Wolaita sound, accompanying traditional songs and ceremonies.'
  },
  {
    id: 32, category: 'music', type: 'multiple-choice', difficulty: 'easy',
    question: 'What type of music is traditionally performed at Wolaita ceremonies and celebrations?',
    options: ['Jazz fusion', 'Pentatonic folk music with call-and-response patterns', 'Classical orchestral music', 'Blues-influenced music'],
    correct: 1,
    explanation: 'Traditional Wolaita music features pentatonic scales (five-note musical scales) and call-and-response patterns where a lead singer calls out and the community responds in chorus — a style deeply connected to communal work songs, funeral dirges, and celebration music.'
  },
  {
    id: 33, category: 'music', type: 'multiple-choice', difficulty: 'hard',
    question: 'What is "Shilla" in Wolaita cultural expression?',
    options: [
      'A type of traditional pottery',
      'A traditional Wolaita war cry and victory song',
      'A ceremonial headgear',
      'A form of body painting'
    ],
    correct: 1,
    explanation: '"Shilla" is the traditional Wolaita war cry and victory song — a powerful vocalization performed during battles, celebrations of victory, and important rites of passage. It is a highly charged cultural expression of strength and triumph.'
  },

  // HERITAGE SITES (IMAGE-BASED)
  {
    id: 34, category: 'heritage', type: 'image-identify', difficulty: 'medium',
    question: 'This sacred lake is one of Wolaita\'s most important heritage sites, known for its spiritual significance and biodiversity. What is it?',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop&auto=format',
    imageAlt: 'Scenic lake surrounded by lush green hills in Ethiopian highlands',
    options: ['Lake Hawassa', 'Lake Abaya', 'Lake Abbijata', 'Lake Langano'],
    correct: 1,
    explanation: 'Lake Abaya (also called Lake Abijata locally) is a major heritage site near Wolaita, revered for its ecological importance and spiritual significance to local communities. Its dark waters are home to diverse wildlife.'
  },
  {
    id: 35, category: 'heritage', type: 'image-identify', difficulty: 'easy',
    question: 'This traditional woven cloth with black, yellow and red patterns is the most iconic symbol of Wolaita identity. Name it.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format',
    imageAlt: 'Colorful woven fabric with geometric patterns in warm earth tones',
    options: ['Shemma', 'Gabi', 'Dingguza', 'Netela'],
    correct: 2,
    explanation: 'Dingguza is the iconic traditional woven cotton cloth of the Wolaita people. The distinctive black, yellow, and red geometric patterns make it immediately recognizable as a Wolaita cultural artifact.'
  },
  {
    id: 36, category: 'heritage', type: 'image-identify', difficulty: 'hard',
    question: 'This ancient hill fortress was a strategic stronghold of the Wolaita Kingdom. Identify the site.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&auto=format',
    imageAlt: 'Rocky hilltop landscape with ancient stone ruins in highland Ethiopia',
    options: ['Amba Geshen', 'Damota Mountain', 'Tullu Dimtu', 'Konta Fortress'],
    correct: 1,
    explanation: 'Damota Mountain (also called Damot) is an iconic landmark in Wolaita, historically serving as a natural fortress and spiritual site. The mountain is central to Wolaita identity and appears in numerous historical accounts of the kingdom\'s power.'
  },

  // NOTABLE PEOPLE
  {
    id: 37, category: 'history', type: 'multiple-choice', difficulty: 'medium',
    question: 'Who is considered one of the most prominent modern Wolaita political figures who contributed to Ethiopia\'s development?',
    options: ['Haile Selassie', 'Abebe Bikila', 'Tilahun Gessesse', 'Various Wolaita administrators in EPRDF/TPLF era'],
    correct: 3,
    explanation: 'Several prominent Wolaita figures have contributed to Ethiopian national politics and administration, particularly during the EPRDF era, holding important ministerial and regional governmental positions.'
  },
  {
    id: 38, category: 'culture', type: 'multiple-choice', difficulty: 'medium',
    question: 'What is the Wolaita traditional calendar system based on?',
    options: ['Solar cycles only', 'Lunar cycles only', 'A combination of lunar and agricultural cycles', 'The Ethiopian Orthodox Church calendar'],
    correct: 2,
    explanation: 'The traditional Wolaita calendar combines lunar observations with agricultural cycles tied to planting and harvest seasons. This calendar guides the timing of festivals like Gifaataa and ritual ceremonies throughout the year.'
  },
  {
    id: 39, category: 'culture', type: 'multiple-choice', difficulty: 'hard',
    question: 'What is the traditional Wolaita institution of conflict resolution and social governance called?',
    options: ['Gada', 'Mela', 'Woga', 'Gadaa'],
    correct: 2,
    explanation: '"Woga" refers to the body of customary laws and social norms governing Wolaita society. It covers everything from land disputes to marriage, inheritance, and community relations, administered by respected elders.'
  },
  {
    id: 40, category: 'festivals', type: 'multiple-choice', difficulty: 'medium',
    question: 'Life ceremonies in Wolaita culture typically include which of the following milestone events?',
    options: [
      'Birth, initiation, marriage, and death rituals',
      'Only birth and death rituals',
      'Seasonal farming ceremonies only',
      'Annual royal coronation ceremonies'
    ],
    correct: 0,
    explanation: 'Wolaita life ceremonies (rites of passage) encompass the full human lifecycle: birth celebrations, coming-of-age initiation rites, elaborate wedding ceremonies, and dignified death and mourning rituals — each with specific traditions and community roles.'
  },
];

// ─── Categories ───────────────────────────────────────────────────────────────

const CATEGORIES: Category[] = [
  {
    id: 'all', name: 'All Topics', icon: <Sparkles size={22} />,
    color: 'text-amber-700 dark:text-amber-300',
    bg: 'bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20',
    ring: 'ring-amber-400',
    description: 'Challenge yourself with questions from every category',
    questionCount: ALL_QUESTIONS.length,
  },
  {
    id: 'history', name: 'History & Kings', icon: <Crown size={22} />,
    color: 'text-red-700 dark:text-red-300',
    bg: 'bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-900/30 dark:to-rose-900/20',
    ring: 'ring-red-400',
    description: 'Kings, battles, and the story of the Wolaita Kingdom',
    questionCount: ALL_QUESTIONS.filter(q => q.category === 'history').length,
  },
  {
    id: 'culture', name: 'Culture & Life', icon: <Heart size={22} />,
    color: 'text-orange-700 dark:text-orange-300',
    bg: 'bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/20',
    ring: 'ring-orange-400',
    description: 'Daily life, customs, social systems, and values',
    questionCount: ALL_QUESTIONS.filter(q => q.category === 'culture').length,
  },
  {
    id: 'heritage', name: 'Heritage & Sites', icon: <Landmark size={22} />,
    color: 'text-stone-700 dark:text-stone-300',
    bg: 'bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-800/50 dark:to-stone-700/30',
    ring: 'ring-stone-400',
    description: 'Dingguza, Marccuwaa, and historic sites of Wolaita',
    questionCount: ALL_QUESTIONS.filter(q => q.category === 'heritage').length,
  },
  {
    id: 'festivals', name: 'Festivals & Ceremonies', icon: <Star size={22} />,
    color: 'text-yellow-700 dark:text-yellow-300',
    bg: 'bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/20',
    ring: 'ring-yellow-400',
    description: 'Gifaataa, life ceremonies, and cultural celebrations',
    questionCount: ALL_QUESTIONS.filter(q => q.category === 'festivals').length,
  },
  {
    id: 'food', name: 'Food & Cuisine', icon: <Utensils size={22} />,
    color: 'text-green-700 dark:text-green-300',
    bg: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20',
    ring: 'ring-green-400',
    description: 'Kocho, Bulla, Enset, and traditional Wolaita foods',
    questionCount: ALL_QUESTIONS.filter(q => q.category === 'food').length,
  },
  {
    id: 'language', name: 'Language & Wisdom', icon: <BookOpen size={22} />,
    color: 'text-blue-700 dark:text-blue-300',
    bg: 'bg-gradient-to-br from-blue-50 to-sky-100 dark:from-blue-900/30 dark:to-sky-900/20',
    ring: 'ring-blue-400',
    description: 'Wolaitigna words, proverbs, and linguistic heritage',
    questionCount: ALL_QUESTIONS.filter(q => q.category === 'language').length,
  },
  {
    id: 'music', name: 'Music & Arts', icon: <Music2 size={22} />,
    color: 'text-purple-700 dark:text-purple-300',
    bg: 'bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20',
    ring: 'ring-purple-400',
    description: 'Traditional music, instruments, and artistic expression',
    questionCount: ALL_QUESTIONS.filter(q => q.category === 'music').length,
  },
];

// ─── Difficulty badge ──────────────────────────────────────────────────────────

const DifficultyBadge = ({ difficulty }: { difficulty: string }) => {
  const map: Record<string, string> = {
    easy: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
    medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
    hard: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide ${map[difficulty]}`}>
      {difficulty}
    </span>
  );
};

// ─── Progress Bar ──────────────────────────────────────────────────────────────

const ProgressBar = ({ value, max }: { value: number; max: number }) => (
  <div className="h-2 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${(value / max) * 100}%` }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    />
  </div>
);

// ─── Score badge helper ────────────────────────────────────────────────────────

function getRank(score: number, total: number) {
  const pct = (score / total) * 100;
  if (pct === 100) return { label: 'Kawo (King)', emoji: '👑', color: 'text-yellow-600' };
  if (pct >= 80) return { label: 'Scholar', emoji: '🏆', color: 'text-amber-600' };
  if (pct >= 60) return { label: 'Apprentice', emoji: '⭐', color: 'text-orange-600' };
  if (pct >= 40) return { label: 'Explorer', emoji: '🌍', color: 'text-stone-600' };
  return { label: 'Beginner', emoji: '🌱', color: 'text-green-600' };
}

// ─── Main Quiz Component ───────────────────────────────────────────────────────

const TIMER_SECONDS = 20;

export default function Quiz() {
  const [gameState, setGameState] = useState<GameState>('landing');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [timerActive, setTimerActive] = useState(false);
  const [useTimer, setUseTimer] = useState(true);
  const [reviewIndex, setReviewIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  // Shuffle and filter questions
  const startQuiz = useCallback((categoryId: string) => {
    const pool = categoryId === 'all' ? ALL_QUESTIONS : ALL_QUESTIONS.filter(q => q.category === categoryId);
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(pool.length, 15));
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswers(new Array(shuffled.length).fill(null));
    setShowExplanation(false);
    setScore(0);
    setTimeLeft(TIMER_SECONDS);
    setTimerActive(useTimer);
    setGameState('playing');
  }, [useTimer]);

  // Timer
  useEffect(() => {
    if (!timerActive || selectedAnswer !== null || gameState !== 'playing') return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          // Auto-submit with no answer
          setSelectedAnswer(-1);
          setShowExplanation(true);
          setTimerActive(false);
          setAnswers(prev => { const a = [...prev]; a[currentIndex] = -1; return a; });
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [timerActive, selectedAnswer, gameState, currentIndex]);

  const handleAnswer = (optionIndex: number) => {
    if (selectedAnswer !== null) return;
    if (timerRef.current) clearInterval(timerRef.current);
    setTimerActive(false);
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
    const isCorrect = optionIndex === currentQuestion.correct;
    if (isCorrect) setScore(s => s + 1);
    setAnswers(prev => { const a = [...prev]; a[currentIndex] = optionIndex; return a; });
  };

  const handleNext = () => {
    if (isLast) {
      setGameState('results');
      return;
    }
    setCurrentIndex(i => i + 1);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setTimeLeft(TIMER_SECONDS);
    setTimerActive(useTimer);
  };

  const resetQuiz = () => {
    setGameState('category');
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowExplanation(false);
    setScore(0);
  };

  // ── Landing ────────────────────────────────────────────────────────────────

  if (gameState === 'landing') {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full text-amber-800 dark:text-amber-300 text-sm font-semibold mb-6">
              <Sparkles size={16} />
              Interactive Cultural Quiz
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-stone-900 dark:text-stone-50 mb-4 leading-tight sm:text-5xl">
              Wolaita
              <span className="block text-amber-700 dark:text-amber-400">Knowledge Quest</span>
            </h1>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-xl mx-auto leading-relaxed">
              Test your knowledge of Wolaita history, culture, heritage sites, language, food, and more.
              Earn the title of <strong className="text-amber-700 dark:text-amber-400">Kawo</strong> — King of knowledge.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-3 gap-4 mb-10"
          >
            {[
              { icon: <Target size={20} />, label: 'Questions', value: `${ALL_QUESTIONS.length}+` },
              { icon: <Globe size={20} />, label: 'Categories', value: `${CATEGORIES.length - 1}` },
              { icon: <Award size={20} />, label: 'Ranks to Earn', value: '5' },
            ].map(s => (
              <div key={s.label} className="bg-white dark:bg-stone-900 rounded-2xl p-5 text-center shadow-sm border border-stone-100 dark:border-stone-800">
                <div className="flex justify-center text-amber-600 dark:text-amber-400 mb-2">{s.icon}</div>
                <div className="font-bold text-2xl text-stone-900 dark:text-stone-50">{s.value}</div>
                <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Timer toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-2xl p-5 mb-8 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-700 dark:text-orange-300">
                <Clock size={20} />
              </div>
              <div>
                <div className="font-semibold text-stone-800 dark:text-stone-100 text-sm">Timed Mode</div>
                <div className="text-xs text-stone-500 dark:text-stone-400">{TIMER_SECONDS} seconds per question</div>
              </div>
            </div>
            <button
              onClick={() => setUseTimer(u => !u)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none ${
                useTimer ? 'bg-orange-600' : 'bg-stone-300 dark:bg-stone-600'
              }`}
            >
              <motion.span
                animate={{ x: useTimer ? 28 : 4 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 left-0 w-5 h-5 bg-white rounded-full shadow-sm"
              />
            </button>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            onClick={() => setGameState('category')}
            className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 text-white font-bold text-lg rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            Start the Quest <ChevronRight size={22} />
          </motion.button>
        </div>
      </div>
    );
  }

  // ── Category Select ────────────────────────────────────────────────────────

  if (gameState === 'category') {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <button
              onClick={() => setGameState('landing')}
              className="p-2 rounded-xl hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors text-stone-600 dark:text-stone-400"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-50">Choose a Category</h2>
              <p className="text-stone-500 dark:text-stone-400 text-sm mt-0.5">Select a topic to focus on, or try All Topics</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat, i) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                onClick={() => {
                  setSelectedCategoryId(cat.id);
                  startQuiz(cat.id);
                }}
                className={`group text-left p-5 rounded-2xl border-2 transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] ${cat.bg} ${
                  cat.id === 'all'
                    ? 'border-amber-400 ring-2 ring-amber-200 dark:ring-amber-900/40 col-span-1 sm:col-span-2 lg:col-span-2'
                    : 'border-transparent hover:border-stone-300 dark:hover:border-stone-600'
                }`}
              >
                <div className={`mb-3 ${cat.color}`}>{cat.icon}</div>
                <div className="font-bold text-stone-900 dark:text-stone-50 mb-1">{cat.name}</div>
                <div className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed mb-3">{cat.description}</div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold ${cat.color}`}>{cat.questionCount} questions</span>
                  <ChevronRight size={16} className={`${cat.color} group-hover:translate-x-1 transition-transform`} />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Playing ────────────────────────────────────────────────────────────────

  if (gameState === 'playing' && currentQuestion) {
    const isCorrect = selectedAnswer === currentQuestion.correct;
    const timerPct = (timeLeft / TIMER_SECONDS) * 100;
    const timerColor = timerPct > 50 ? 'from-green-500 to-emerald-500' : timerPct > 25 ? 'from-yellow-500 to-amber-500' : 'from-red-500 to-rose-500';

    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={resetQuiz}
              className="p-2 rounded-xl hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors text-stone-600 dark:text-stone-400"
              aria-label="Exit quiz"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-sm font-semibold text-stone-700 dark:text-stone-300">
                <Trophy size={16} className="text-amber-500" />
                {score}
              </div>
              <span className="text-stone-400">·</span>
              <span className="text-sm text-stone-500 dark:text-stone-400">
                {currentIndex + 1} / {questions.length}
              </span>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <ProgressBar value={currentIndex + (selectedAnswer !== null ? 1 : 0)} max={questions.length} />
          </div>

          {/* Timer */}
          {useTimer && (
            <div className="mb-5">
              <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-1.5">
                <span className="flex items-center gap-1"><Clock size={12} /> Time remaining</span>
                <span className={`font-bold ${timeLeft <= 5 ? 'text-red-500' : ''}`}>{timeLeft}s</span>
              </div>
              <div className="h-1.5 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${timerColor}`}
                  animate={{ width: `${timerPct}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
            >
              {/* Question card */}
              <div className="bg-white dark:bg-stone-900 rounded-3xl shadow-sm border border-stone-100 dark:border-stone-800 overflow-hidden mb-4">
                {/* Category + difficulty */}
                <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-stone-100 dark:border-stone-800">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 capitalize">
                    {currentQuestion.category.replace('-', ' ')}
                  </span>
                  <DifficultyBadge difficulty={currentQuestion.difficulty} />
                </div>

                {/* Image for image-identify questions */}
                {currentQuestion.image && (
                  <div className="relative">
                    <img loading="lazy" decoding="async"
                      src={currentQuestion.image}
                      alt={currentQuestion.imageAlt || ''}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute bottom-2 left-3 flex items-center gap-1 text-white/80 text-xs">
                      <MapPin size={12} /> Identify this heritage site
                    </div>
                  </div>
                )}

                <div className="px-6 py-5">
                  <p className="text-lg font-semibold text-stone-900 dark:text-stone-50 leading-relaxed">
                    {currentQuestion.question}
                  </p>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-4">
                {currentQuestion.options.map((opt, i) => {
                  let optStyle = 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-700 hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/10';
                  let icon = null;

                  if (selectedAnswer !== null) {
                    if (i === currentQuestion.correct) {
                      optStyle = 'bg-green-50 dark:bg-green-900/20 border-green-500 shadow-green-100 dark:shadow-green-900/20 shadow-md';
                      icon = <CheckCircle size={20} className="text-green-600 dark:text-green-400 shrink-0" />;
                    } else if (i === selectedAnswer && !isCorrect) {
                      optStyle = 'bg-red-50 dark:bg-red-900/20 border-red-500 shadow-red-100 dark:shadow-red-900/20 shadow-md';
                      icon = <XCircle size={20} className="text-red-600 dark:text-red-400 shrink-0" />;
                    } else {
                      optStyle = 'bg-stone-50 dark:bg-stone-800/50 border-stone-200 dark:border-stone-700 opacity-60';
                    }
                  }

                  return (
                    <motion.button
                      key={i}
                      whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                      onClick={() => handleAnswer(i)}
                      disabled={selectedAnswer !== null}
                      className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl border-2 text-left transition-all duration-200 ${optStyle} disabled:cursor-default`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-xs font-bold text-stone-600 dark:text-stone-300">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="text-sm font-medium text-stone-800 dark:text-stone-100">{opt}</span>
                      </div>
                      {icon}
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mb-4"
                  >
                    <div className={`rounded-2xl p-4 border ${
                      selectedAnswer === currentQuestion.correct
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                        : 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
                    }`}>
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 ${selectedAnswer === currentQuestion.correct ? 'text-green-600' : 'text-amber-600'}`}>
                          {selectedAnswer === currentQuestion.correct
                            ? <CheckCircle size={18} />
                            : <Zap size={18} />}
                        </div>
                        <div>
                          <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                            selectedAnswer === currentQuestion.correct
                              ? 'text-green-700 dark:text-green-400'
                              : 'text-amber-700 dark:text-amber-400'
                          }`}>
                            {selectedAnswer === currentQuestion.correct ? 'Correct!' : selectedAnswer === -1 ? "Time's up!" : 'Not quite — here\'s why:'}
                          </div>
                          <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                            {currentQuestion.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next button */}
              {selectedAnswer !== null && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={handleNext}
                  className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  {isLast ? (
                    <><Trophy size={20} /> See Results</>
                  ) : (
                    <>Next Question <ChevronRight size={20} /></>
                  )}
                </motion.button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // ── Results ────────────────────────────────────────────────────────────────

  if (gameState === 'results') {
    const rank = getRank(score, questions.length);
    const pct = Math.round((score / questions.length) * 100);
    const wrongCount = questions.length - score;

    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Trophy card */}
            <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl p-5 sm:p-8 text-white text-center mb-6 shadow-xl shadow-amber-600/20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-3xl sm:text-4xl"
                    style={{
                      left: `${(i % 4) * 28 + 4}%`,
                      top: `${Math.floor(i / 4) * 36 + 5}%`,
                      opacity: 0.5,
                    }}
                  >
                    ★
                  </div>
                ))}
              </div>
              <div className="relative">
                <div className="text-5xl mb-3 sm:text-6xl">{rank.emoji}</div>
                <div className="font-serif text-3xl font-bold mb-1">{rank.label}</div>
                <div className="text-amber-200 text-sm mb-6">Your Cultural Knowledge Rank</div>
                <div className="flex items-center justify-center gap-8">
                  <div>
                    <div className="text-3xl font-bold sm:text-4xl">{score}</div>
                    <div className="text-amber-200 text-xs mt-0.5">Correct</div>
                  </div>
                  <div className="text-amber-300 text-2xl">/</div>
                  <div>
                    <div className="text-3xl font-bold sm:text-4xl">{questions.length}</div>
                    <div className="text-amber-200 text-xs mt-0.5">Total</div>
                  </div>
                  <div className="text-amber-300 text-2xl">=</div>
                  <div>
                    <div className="text-3xl font-bold sm:text-4xl">{pct}%</div>
                    <div className="text-amber-200 text-xs mt-0.5">Score</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-4 text-center">
                <CheckCircle size={24} className="text-green-600 dark:text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-700 dark:text-green-300">{score}</div>
                <div className="text-xs text-green-600 dark:text-green-400 mt-0.5">Correct Answers</div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-4 text-center">
                <XCircle size={24} className="text-red-600 dark:text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-red-700 dark:text-red-300">{wrongCount}</div>
                <div className="text-xs text-red-600 dark:text-red-400 mt-0.5">Missed Answers</div>
              </div>
            </div>

            {/* Rank ladder */}
            <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-100 dark:border-stone-800 p-5 mb-6">
              <h3 className="text-sm font-bold text-stone-700 dark:text-stone-300 mb-4 uppercase tracking-wider">Rank Ladder</h3>
              <div className="space-y-2">
                {[
                  { min: 100, label: 'Kawo (King)', emoji: '👑', color: 'text-yellow-600' },
                  { min: 80, label: 'Scholar', emoji: '🏆', color: 'text-amber-600' },
                  { min: 60, label: 'Apprentice', emoji: '⭐', color: 'text-orange-600' },
                  { min: 40, label: 'Explorer', emoji: '🌍', color: 'text-stone-600' },
                  { min: 0, label: 'Beginner', emoji: '🌱', color: 'text-green-600' },
                ].map(r => {
                  const active = rank.label === r.label;
                  return (
                    <div key={r.label} className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${active ? 'bg-amber-50 dark:bg-amber-900/20 ring-1 ring-amber-300' : ''}`}>
                      <span className="text-lg">{r.emoji}</span>
                      <div className="flex-1">
                        <span className={`text-sm font-semibold ${active ? 'text-amber-700 dark:text-amber-400' : 'text-stone-600 dark:text-stone-400'}`}>{r.label}</span>
                      </div>
                      <span className="text-xs text-stone-400">{r.min}%+</span>
                      {active && <Shield size={14} className="text-amber-500" />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Review wrong answers button */}
            {wrongCount > 0 && (
              <button
                onClick={() => { setReviewIndex(0); setGameState('review'); }}
                className="w-full py-3 border-2 border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-semibold rounded-2xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors mb-3 flex items-center justify-center gap-2"
              >
                <BookOpen size={18} /> Review Missed Questions
              </button>
            )}

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={resetQuiz}
                className="py-3 border-2 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 font-semibold rounded-2xl hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw size={18} /> Try Again
              </button>
              <Link
                to="/"
                className="py-3 bg-stone-800 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold rounded-2xl hover:bg-stone-700 dark:hover:bg-stone-200 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <Home size={18} /> Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ── Review ─────────────────────────────────────────────────────────────────

  if (gameState === 'review') {
    const missedQuestions = questions.filter((_, i) => answers[i] !== questions[i].correct);
    const reviewQ = missedQuestions[reviewIndex];
    if (!reviewQ) {
      setGameState('results');
      return null;
    }
    const origIndex = questions.findIndex(q => q.id === reviewQ.id);

    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setGameState('results')}
              className="p-2 rounded-xl hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors text-stone-600 dark:text-stone-400"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-50">Review Missed</h2>
              <p className="text-sm text-stone-500 dark:text-stone-400">{reviewIndex + 1} of {missedQuestions.length}</p>
            </div>
          </div>

          <ProgressBar value={reviewIndex + 1} max={missedQuestions.length} />
          <div className="mt-6" />

          <AnimatePresence mode="wait">
            <motion.div key={reviewIndex} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
              <div className="bg-white dark:bg-stone-900 rounded-3xl border border-stone-100 dark:border-stone-800 overflow-hidden mb-4">
                <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-stone-100 dark:border-stone-800">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 capitalize">{reviewQ.category}</span>
                  <DifficultyBadge difficulty={reviewQ.difficulty} />
                </div>
                {reviewQ.image && (
                  <img loading="lazy" decoding="async" src={reviewQ.image} alt={reviewQ.imageAlt || ''} className="w-full h-40 object-cover" />
                )}
                <div className="px-6 py-5">
                  <p className="text-base font-semibold text-stone-900 dark:text-stone-50 leading-relaxed">{reviewQ.question}</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {reviewQ.options.map((opt, i) => {
                  const userAnswer = answers[origIndex];
                  const isCorrect = i === reviewQ.correct;
                  const wasSelected = i === userAnswer;
                  let style = 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-700 opacity-60';
                  let icon = null;
                  if (isCorrect) {
                    style = 'bg-green-50 dark:bg-green-900/20 border-green-500';
                    icon = <CheckCircle size={18} className="text-green-600 dark:text-green-400 shrink-0" />;
                  } else if (wasSelected) {
                    style = 'bg-red-50 dark:bg-red-900/20 border-red-400';
                    icon = <XCircle size={18} className="text-red-500 dark:text-red-400 shrink-0" />;
                  }
                  return (
                    <div key={i} className={`flex items-center justify-between px-5 py-3.5 rounded-2xl border-2 ${style}`}>
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-xs font-bold text-stone-600 dark:text-stone-300">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="text-sm font-medium text-stone-800 dark:text-stone-100">{opt}</span>
                      </div>
                      {icon}
                    </div>
                  );
                })}
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 mb-4">
                <div className="flex items-start gap-3">
                  <Zap size={16} className="text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">{reviewQ.explanation}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {reviewIndex < missedQuestions.length - 1 ? (
                  <button
                    onClick={() => setReviewIndex(i => i + 1)}
                    className="col-span-2 py-3.5 bg-gradient-to-r from-amber-600 to-orange-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2"
                  >
                    Next Missed <ChevronRight size={18} />
                  </button>
                ) : (
                  <button
                    onClick={() => setGameState('results')}
                    className="col-span-2 py-3.5 bg-stone-800 dark:bg-stone-100 text-white dark:text-stone-900 font-bold rounded-2xl flex items-center justify-center gap-2"
                  >
                    <Trophy size={18} /> Back to Results
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return null;
}

// ─── tiny X icon used inline ──────────────────────────────────────────────────
function X({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
