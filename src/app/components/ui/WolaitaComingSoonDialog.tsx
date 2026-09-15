import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ArrowRight, Languages, X } from 'lucide-react';
import DingguazaStripe from './DingguazaStripe';

type ExploreLanguage = 'en' | 'am';

interface WolaitaComingSoonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onChooseLanguage: (lang: ExploreLanguage) => void;
}

// Shown when a visitor picks Wolaitigna before the hand-written translation is published.
const WolaitaComingSoonDialog = ({ open, onOpenChange, onChooseLanguage }: WolaitaComingSoonDialogProps) => (
  <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-[200] bg-stone-950/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
      <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-[201] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl outline-none dark:border-stone-700 dark:bg-stone-900 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
        <DingguazaStripe segmentWidth={6} height="h-2" />

        <DialogPrimitive.Close
          className="absolute right-4 top-5 rounded-full p-1.5 text-stone-400 transition-colors hover:bg-stone-100 hover:text-stone-700 dark:hover:bg-stone-800 dark:hover:text-stone-200"
          aria-label="Close"
        >
          <X size={18} />
        </DialogPrimitive.Close>

        <div className="max-h-[80vh] overflow-y-auto px-6 pb-6 pt-7 sm:px-8 sm:pb-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/15 text-yellow-600 dark:text-yellow-400">
            <Languages size={24} />
          </div>

          <p className="mb-1 font-serif text-lg italic text-yellow-600 dark:text-yellow-400">Halaale!</p>
          <DialogPrimitive.Title className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-50 sm:text-3xl">
            Wolayitigna — Coming Soon
          </DialogPrimitive.Title>

          <DialogPrimitive.Description asChild>
            <div className="mt-4 space-y-4 text-stone-600 dark:text-stone-300">
              <p className="leading-relaxed">
                The full site is under translation. The complete Wolayitigna version is coming soon.
              </p>
              <p className="leading-relaxed">
                Until then, please use <strong className="text-stone-900 dark:text-stone-100">English</strong> or{' '}
                <strong className="text-stone-900 dark:text-stone-100">Amharic</strong> to explore Wolaita and learn
                more about Wolaita.
              </p>
              <p lang="am" className="border-l-2 border-yellow-400 pl-4 text-sm leading-relaxed">
                ድረ-ገጹ ሙሉ በሙሉ ወደ ወላይትኛ በመተርጎም ላይ ነው። የተሟላው የወላይትኛ ገጽ በቅርቡ ይደርሳል። እስከዚያው ድረስ
                ወላይታን ለመጎብኘትና ስለ ወላይታ የበለጠ ለማወቅ እባክዎ እንግሊዝኛ ወይም አማርኛ ይጠቀሙ።
              </p>
            </div>
          </DialogPrimitive.Description>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => onChooseLanguage('en')}
              className="group flex items-center justify-between gap-2 rounded-xl bg-orange-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-900"
            >
              Explore in English
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              lang="am"
              onClick={() => onChooseLanguage('am')}
              className="group flex items-center justify-between gap-2 rounded-xl border-2 border-green-600 px-5 py-3 text-sm font-semibold text-green-700 transition-colors hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/20"
            >
              በአማርኛ ያስሱ
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);

export default WolaitaComingSoonDialog;
