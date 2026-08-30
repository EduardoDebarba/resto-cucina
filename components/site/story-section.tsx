import { images } from '@/lib/site-content';

export function StorySection() {
  return (
    <section id="story" className="relative min-h-[680px] overflow-hidden bg-[var(--color-forest)] text-[var(--color-cream)]">
      <img
        src={images.story}
        alt="Chef preparing handmade pasta in an Italian kitchen"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,52,40,0.88),rgba(31,52,40,0.54)_48%,rgba(31,52,40,0.18)),linear-gradient(0deg,rgba(31,52,40,0.7),rgba(31,52,40,0.1))]" />
      <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
        <div className="reveal max-w-xl border-l border-[var(--color-gold)]/70 pl-7 md:pl-10">
          <p className="eyebrow text-[var(--color-gold)]">Dal 1987</p>
          <h2 className="mt-5 font-serif text-[clamp(3.5rem,7vw,7.6rem)] leading-[0.86]">
            Recipes passed from generation to generation.
          </h2>
          <p className="mt-8 text-lg leading-8 text-[var(--color-cream)]/78">
            What began as a family table became a Milano dining room shaped by
            Sunday sauces, fresh pasta and the generous rhythm of Italian
            hospitality.
          </p>
        </div>
      </div>
    </section>
  );
}
