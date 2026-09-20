// The royal line of Wolaita, as supplied by Ashenafi Bancha in Amharic.
// `name` is the English transliteration; `amharic` keeps the original spelling
// so elders and historians can verify it. Contributions/reigns are still to come.
export type RoyalLineEntry = {
  order: number;
  name: string;
  amharic: string;
  /** Set when the name is still to be confirmed. */
  pending?: boolean;
};

export const ROYAL_LINE: RoyalLineEntry[] = [
  { order: 1, name: "Kawo Bito", amharic: "ካዎ ቢቶ" },
  { order: 2, name: "Kawo Bidinto", amharic: "ካዎ ቢድንቶ" },
  { order: 3, name: "Kawo Hansa", amharic: "ካዎ ሃንሳ" },
  { order: 4, name: "Kawo Hatiyo", amharic: "ካዎ ሃጢዮ" },
  { order: 5, name: "Kawo Hate", amharic: "ካዎ ሃጤ" },
  { order: 6, name: "Kawo Worde", amharic: "ካዎ ዎርዴ" },
  { order: 7, name: "Kawo Woda", amharic: "ካዎ ዎዳ" },
  { order: 8, name: "Kawo Sagada", amharic: "ካዎ ሳጋዳ" },
  { order: 9, name: "Kawo Bure", amharic: "ካዎ ቡሬ" },
  { order: 10, name: "Name to be confirmed", amharic: "", pending: true },
  { order: 11, name: "Kawo Halala", amharic: "ካዎ ሃላላ" },
  { order: 12, name: "Kawo Badea", amharic: "ካዎ ባደአ" },
  { order: 13, name: "Kawo Badila", amharic: "ካዎ ባዲላ" },
  { order: 14, name: "Kawo Bad Gedila", amharic: "ካዎ ባድ ገድላ" },
  { order: 15, name: "Kawo Barchi Godira", amharic: "ካዎ ባርች ጎዲራ" },
  { order: 16, name: "Kawo Badiya (Bade)", amharic: "ካዎ ባዲያ (ባዴ)" },
  { order: 17, name: "Kawo Bayewa", amharic: "ካዎ ባየዋ" },
  { order: 18, name: "Kawo Burana", amharic: "ካዎ ቡራና" },
  { order: 19, name: "Kawo Gonga", amharic: "ካዎ ጎንጋ" },
  { order: 20, name: "Kawo Dangula", amharic: "ካዎ ዳንጉላ" },
  { order: 21, name: "Kawo Damota", amharic: "ካዎ ዳሞታ" },
  { order: 22, name: "Kawo Sane", amharic: "ካዎ ሣኔ" },
  { order: 23, name: "Kawo Sabore", amharic: "ካዎ ሣቦሬ" },
  { order: 24, name: "Kawo Samore", amharic: "ካዎ ሣሞሬ" },
  { order: 25, name: "Kawo Sagulo", amharic: "ካዎ ሣጉሎ" },
  { order: 26, name: "Kawo Sa'ala", amharic: "ካዎ ሣኣላ" },
  { order: 27, name: "Kawo Salimona", amharic: "ካዎ ሳሊሞና" },
  { order: 28, name: "Kawo Same", amharic: "ካዎ ሳሜ" },
  { order: 29, name: "Kawo Sate", amharic: "ካዎ ሳቴ" },
  { order: 30, name: "Kawo Zate", amharic: "ካዎ ዛቴ" },
  { order: 31, name: "Kawo Sate Motoleroke", amharic: "ካዎ ሳቴ ሞቶለሮቄ" },
  { order: 32, name: "Kawo Sate Motolome", amharic: "ካዎ ሳቴ ሞቶሎሜ" },
  { order: 33, name: "Kawo Talame", amharic: "ካዎ ታላሜ" },
  { order: 34, name: "Kawo Moska", amharic: "ካዎ ሞስካ" },
  { order: 35, name: "Kawo Mote", amharic: "ካዎ ሞቴ" },
  { order: 36, name: "Kawo Oche", amharic: "ካዎ ኦቼ" },
  { order: 37, name: "Kawo Lache", amharic: "ካዎ ላቸ" },
  { order: 38, name: "Kawo Mikahela", amharic: "ካዎ ሚካሄላ" },
  { order: 39, name: "Kawo Girma", amharic: "ካዎ ግርማ" },
  { order: 40, name: "Kawo Azagn", amharic: "ካዎ አዛኝ" },
  { order: 41, name: "Kawo Adaye", amharic: "ካዎ አዳዬ" },
  { order: 42, name: "Kawo Kote", amharic: "ካዎ ኮቴ" },
  { order: 43, name: "Kawo Libana", amharic: "ካዎ ሊባና" },
  { order: 44, name: "Kawo Tube", amharic: "ካዎ ቱቤ" },
  { order: 45, name: "Kawo Sana", amharic: "ካዎ ሣና" },
  { order: 46, name: "Kawo Ogato", amharic: "ካዎ ኦጋቶ" },
  { order: 47, name: "Kawo Amado", amharic: "ካዎ አማዶ" },
  { order: 48, name: "Kawo Damote", amharic: "ካዎ ዳሞቴ" },
  { order: 49, name: "Kawo Gobe", amharic: "ካዎ ጎቤ" },
  { order: 50, name: "Kawo Tona", amharic: "ካዎ ጦና" },
];
