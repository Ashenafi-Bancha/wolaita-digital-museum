import React from 'react';
import { motion } from 'motion/react';

const Timeline: React.FC = () => {
  const events = [
    {
      year: "Ancient Period",
      title: "Establishment of the Wolaita Kingdom",
      description: "The Wolaita people have a long history of independent statehood, with a kingdom that dates back several centuries before its incorporation into the Ethiopian Empire.",
      image: "https://images.unsplash.com/photo-1761844382959-08cadeb14f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjBsYW5kc2NhcGUlMjBtb3VudGFpbiUyMHZhbGxleXxlbnwxfHx8fDE3NzEzNjg1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" // Placeholder
    },
    {
      year: "13th - 19th Century",
      title: "The Golden Age of Kings",
      description: "Under the Kawo dynasty, Wolaita flourished with a sophisticated political structure, vibrant economy based on agriculture, and strong military organization.",
      image: "https://images.unsplash.com/photo-1708512935636-36a3dba7cfc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdHJpYmFsJTIwZHJ1bSUyMG11c2ljJTIwaW5zdHJ1bWVudHxlbnwxfHx8fDE3NzEzNjg1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      year: "1894",
      title: "Resistance Against Menelik II",
      description: "King Tona, the last independent king of Wolaita, led a fierce resistance against the expansionist forces of Emperor Menelik II before finally being incorporated.",
      image: "https://images.unsplash.com/photo-1764145162259-04eaf2b3d86a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjB0cmFkaXRpb25hbCUyMGRhbmNlJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzcxMzY4NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      year: "Modern Era",
      title: "Cultural Renaissance",
      description: "Today, Wolaita culture is celebrated for its unique music, dance, and agricultural innovation, contributing significantly to Ethiopia's diverse mosaic.",
      image: "https://images.unsplash.com/photo-1598122666068-59b41e0a3193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdGhpb3BpYW4lMjBwZW9wbGUlMjB0cmFkaXRpb25hbCUyMGNsb3RoaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxMzY4NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="relative border-l-2 border-stone-200 dark:border-stone-700 ml-4 md:ml-8 my-12 space-y-16">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="mb-12 pl-8 md:pl-12 relative"
        >
          {/* Dot */}
          <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-600 border-4 border-stone-50 dark:border-stone-900 shadow-sm" />
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <span className="text-sm font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-2 block">
                {event.year}
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
                {event.title}
              </h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-lg">
                {event.description}
              </p>
            </div>
            
            {/* Image */}
            <div className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden shadow-md">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
