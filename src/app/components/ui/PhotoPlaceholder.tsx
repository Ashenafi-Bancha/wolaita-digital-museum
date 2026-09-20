import { Camera } from 'lucide-react';
import DingguazaStripe from './DingguazaStripe';

interface PhotoPlaceholderProps {
  /** What photograph belongs here, e.g. "Mount Damota". */
  label?: string;
  className?: string;
}

// Stands in where a stock photograph of somewhere else used to be, until a real
// Wolaita photograph is supplied. Never claims to show what it describes.
const PhotoPlaceholder = ({ label, className = '' }: PhotoPlaceholderProps) => (
  <div
    role="img"
    aria-label={label ? `Photograph coming soon: ${label}` : 'Photograph coming soon'}
    className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-stone-100 p-4 text-center dark:bg-stone-800 ${className}`}
  >
    <Camera size={22} className="text-stone-400 dark:text-stone-500" aria-hidden="true" />
    <span className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
      Photograph coming soon
    </span>
    {label && <span className="max-w-[28ch] text-xs text-stone-500 dark:text-stone-500">{label}</span>}
    <DingguazaStripe segmentWidth={5} height="h-1" className="absolute bottom-0 left-0 right-0 opacity-70" />
  </div>
);

export default PhotoPlaceholder;
