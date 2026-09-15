// Full-screen loader shown while the first code-split page downloads.
const PageLoader = () => (
  <div
    role="status"
    aria-live="polite"
    className="flex min-h-screen flex-col items-center justify-center gap-5 bg-stone-950 text-white"
  >
    <div className="flex gap-1.5" aria-hidden="true">
      {["bg-stone-900 ring-1 ring-white/20", "bg-[rgb(var(--wolaita-gold))]", "bg-[rgb(var(--wolaita-clay))]"].map(
        (color, i) => (
          <span
            key={color}
            className={`h-3 w-3 animate-bounce rounded-full ${color}`}
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ),
      )}
    </div>
    <span className="font-serif text-sm uppercase tracking-[0.3em] text-white/60">Wolaita</span>
  </div>
);

export default PageLoader;
