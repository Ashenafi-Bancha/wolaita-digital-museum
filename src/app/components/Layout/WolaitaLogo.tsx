import React from 'react';

interface WolaitaLogoProps {
  className?: string;
  variant?: 'full' | 'compact';
}

const WolaitaLogo: React.FC<WolaitaLogoProps> = ({ className = "h-12 md:h-14", variant = 'full' }) => {
  // Generate unique IDs for gradients to avoid conflicts when logo appears multiple times
  const uniqueId = React.useId();
  
  if (variant === 'compact') {
    // Compact circular icon version - perfect for mobile or small spaces
    return (
      <svg
        viewBox="0 0 80 80"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Wolaita Museum"
      >
        <defs>
          {/* Radial gradient for modern look */}
          <radialGradient id={`bgGradient-${uniqueId}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#FEF3C7', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#EAB308', stopOpacity: 1 }} />
          </radialGradient>
          
          {/* Color gradient */}
          <linearGradient id={`houseGradient-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#DC2626', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#EAB308', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1C1917', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Background circle */}
        <circle cx="40" cy="40" r="38" fill={`url(#bgGradient-${uniqueId})`} stroke="#EAB308" strokeWidth="2" />
        
        {/* Traditional Tukul house simplified */}
        <g transform="translate(40, 40)">
          {/* Roof - conical shape */}
          <path
            d="M 0,-28 L 20,-8 L 20,8 L -20,8 L -20,-8 Z"
            fill="#DC2626"
            opacity="0.95"
          />
          
          {/* Roof decoration lines */}
          <path d="M -15,-12 L 15,-12" stroke="#EAB308" strokeWidth="1.5" opacity="0.8" />
          <path d="M -12,-16 L 12,-16" stroke="#EAB308" strokeWidth="1.5" opacity="0.8" />
          <path d="M -8,-20 L 8,-20" stroke="#EAB308" strokeWidth="1.5" opacity="0.8" />
          
          {/* House body */}
          <rect x="-18" y="8" width="36" height="20" fill="#F59E0B" rx="1" />
          
          {/* Door */}
          <rect x="-6" y="14" width="12" height="14" fill="#1C1917" opacity="0.7" rx="1" />
          
          {/* Windows */}
          <circle cx="-10" cy="16" r="2.5" fill="#1C1917" opacity="0.4" />
          <circle cx="10" cy="16" r="2.5" fill="#1C1917" opacity="0.4" />
          
          {/* Flag colors at top */}
          <circle cx="0" cy="-26" r="3" fill="#1C1917" />
          <circle cx="0" cy="-26" r="2" fill="#EAB308" />
          <circle cx="0" cy="-26" r="1" fill="#DC2626" />
        </g>
      </svg>
    );
  }
  
  // Full horizontal logo with text
  return (
    <svg
      viewBox="0 0 280 70"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Wolaita Digital Heritage Museum"
    >
      <defs>
        {/* Modern gradient - Wolaita colors */}
        <linearGradient id={`modernGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#DC2626', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#EAB308', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1C1917', stopOpacity: 1 }} />
        </linearGradient>
        
        {/* Background gradient for icon */}
        <linearGradient id={`iconBg-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FBBF24', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 0.1 }} />
        </linearGradient>
        
        {/* House gradient */}
        <linearGradient id={`houseColor-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#DC2626', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#EF4444', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Icon container - Modern card style */}
      <g>
        {/* Background rounded rectangle */}
        <rect x="4" y="8" width="60" height="54" rx="12" fill={`url(#iconBg-${uniqueId})`} />
        <rect x="4" y="8" width="60" height="54" rx="12" fill="none" stroke={`url(#modernGradient-${uniqueId})`} strokeWidth="2" />
        
        {/* Traditional Tukul house - Modern style */}
        <g transform="translate(34, 35)">
          {/* Roof - conical/triangular */}
          <path
            d="M 0,-18 L 16,-2 L 16,10 L -16,10 L -16,-2 Z"
            fill={`url(#houseColor-${uniqueId})`}
          />
          
          {/* Roof stripes - Dingguza pattern inspired */}
          <path d="M -12,-6 L 12,-6" stroke="#FDE68A" strokeWidth="1.5" opacity="0.9" />
          <path d="M -10,-10 L 10,-10" stroke="#FDE68A" strokeWidth="1.5" opacity="0.9" />
          <path d="M -6,-14 L 6,-14" stroke="#FDE68A" strokeWidth="1.5" opacity="0.9" />
          
          {/* House body - warm yellow */}
          <rect x="-14" y="10" width="28" height="16" fill="#FBBF24" rx="1" />
          
          {/* Door - traditional style */}
          <rect x="-5" y="14" width="10" height="12" fill="#1C1917" opacity="0.8" rx="1" />
          <circle cx="2" cy="20" r="0.8" fill="#EAB308" />
          
          {/* Decorative windows */}
          <rect x="-10" y="16" width="3" height="3" fill="#1C1917" opacity="0.5" rx="0.5" />
          <rect x="7" y="16" width="3" height="3" fill="#1C1917" opacity="0.5" rx="0.5" />
          
          {/* Top decoration - flag colors */}
          <circle cx="0" cy="-16" r="2.5" fill="#1C1917" />
          <circle cx="-4" cy="-14" r="1.5" fill="#EAB308" />
          <circle cx="4" cy="-14" r="1.5" fill="#DC2626" />
        </g>
        
        {/* Decorative corner elements */}
        <circle cx="14" cy="18" r="2" fill="#EAB308" opacity="0.3" />
        <circle cx="54" cy="52" r="2" fill="#DC2626" opacity="0.3" />
      </g>
      
      {/* Text section */}
      <g>
        {/* Main title - WOLAITA */}
        <text
          x="76"
          y="30"
          fontFamily="'Playfair Display', serif"
          fontSize="18"
          fontWeight="700"
          fill={`url(#modernGradient-${uniqueId})`}
          letterSpacing="1"
        >
          WOLAITA
        </text>
        
        {/* Subtitle - MUSEUM */}
        <text
          x="76"
          y="48"
          fontFamily="Inter, sans-serif"
          fontSize="10"
          fontWeight="600"
          fill="currentColor"
          className="fill-stone-600 dark:fill-stone-400"
          letterSpacing="3"
        >
          DIGITAL HERITAGE
        </text>
        
        {/* Decorative flag stripe */}
        <g transform="translate(76, 54)">
          <rect x="0" y="0" width="40" height="2" fill="#1C1917" rx="1" />
          <rect x="40" y="0" width="40" height="2" fill="#EAB308" rx="1" />
          <rect x="80" y="0" width="40" height="2" fill="#DC2626" rx="1" />
        </g>
      </g>
      
      {/* Decorative pattern - Dingguza inspired dots */}
      <g opacity="0.15">
        <circle cx="200" cy="15" r="1.5" fill="#EAB308" />
        <circle cx="206" cy="15" r="1.5" fill="#DC2626" />
        <circle cx="212" cy="15" r="1.5" fill="#1C1917" />
        <circle cx="200" cy="55" r="1.5" fill="#DC2626" />
        <circle cx="206" cy="55" r="1.5" fill="#1C1917" />
        <circle cx="212" cy="55" r="1.5" fill="#EAB308" />
      </g>
    </svg>
  );
};

export default WolaitaLogo;