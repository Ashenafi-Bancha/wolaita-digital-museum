import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full ${className}`}>
      {children}
    </section>
  );
};

export default Section;
