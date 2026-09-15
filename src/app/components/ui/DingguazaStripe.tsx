import React from 'react';

type StripeColor = 'black' | 'yellow' | 'red';

interface DingguazaStripeProps {
  className?: string;
  height?: string;
  /** Fixed width per segment in px — enables compact tiled mode */
  segmentWidth?: number;
  /** How many color segments to render in default (non-compact) mode */
  repeatCount?: number;
}

const COLOR_SEQUENCE: StripeColor[] = ['black', 'yellow', 'red'];

const DingguazaStripe: React.FC<DingguazaStripeProps> = ({
  className = '',
  height = 'h-2',
  segmentWidth,
  repeatCount = 60,
}) => {
  const compact = segmentWidth != null;
  const unitWidth = segmentWidth ?? 6;

  if (compact) {
    const tileWidth = unitWidth * 3;

    return (
      <div
        aria-hidden="true"
        className={`dingguza-stripe dingguza-stripe-compact dingguza-stripe-tiled relative w-full overflow-hidden ${height} ${className}`}
        role="presentation"
        style={
          {
            '--stripe-unit': `${unitWidth}px`,
            '--stripe-tile': `${tileWidth}px`,
          } as React.CSSProperties
        }
      >
        <div className="dingguza-stripe-glow dingguza-stripe-glow-black pointer-events-none absolute inset-0" />
        <div className="dingguza-stripe-glow dingguza-stripe-glow-yellow pointer-events-none absolute inset-0" />
        <div className="dingguza-stripe-glow dingguza-stripe-glow-red pointer-events-none absolute inset-0" />
        <div className="dingguza-stripe-sheen pointer-events-none absolute inset-0" />
      </div>
    );
  }

  const pattern: StripeColor[] = Array.from({ length: repeatCount }, (_, index) => (
    COLOR_SEQUENCE[index % COLOR_SEQUENCE.length]
  ));

  return (
    <div
      aria-hidden="true"
      className={`dingguza-stripe relative w-full overflow-hidden ${height} ${className}`}
      role="presentation"
    >
      <div className="dingguza-stripe-track flex h-full w-full">
        {pattern.map((color, index) => (
          <div
            key={index}
            className={`dingguza-stripe-cell dingguza-stripe-cell-${color} h-full min-w-[5px] flex-1`}
            style={{
              transform: `translateY(${index % 2 === 0 ? '-0.35px' : '0.35px'})`,
              animationDelay: `${(index % 3) * 0.55}s`,
            }}
          />
        ))}
      </div>
      <div className="dingguza-stripe-sheen pointer-events-none absolute inset-0" />
    </div>
  );
};

export default DingguazaStripe;
