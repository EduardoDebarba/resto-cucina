'use client';

import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { galleryItems } from '@/lib/site-content';
import { SectionTitle } from './section-title';

const tileClasses = [
  'md:col-start-1 md:row-start-1 md:row-span-2',
  'md:col-start-3 md:row-start-1 md:row-span-2',
  'md:col-start-4 md:row-start-1',
  'md:col-start-4 md:row-start-2',
  'md:col-start-2 md:row-start-1',
  'md:col-start-2 md:row-start-2',
];

export function Gallery() {
  const [active, setActive] = useState<(typeof galleryItems)[number] | null>(null);

  useEffect(() => {
    if (!active) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActive(null);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [active]);

  return (
    <section id="gallery" className="section-shell bg-[var(--color-warm)]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <SectionTitle label="Galeria" title="Momentos Cucina" align="center" />
        <div className="mt-16 grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[230px] md:grid-cols-4 md:gap-5">
          {galleryItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(item)}
              className={`group reveal relative overflow-hidden bg-[var(--color-forest)] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)] ${tileClasses[index] ?? ''}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-[linear-gradient(0deg,rgba(31,52,40,0.68),transparent_56%)] opacity-70 transition group-hover:opacity-95" />
              <span className="absolute bottom-4 left-4 font-serif text-2xl text-[var(--color-cream)]">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <dialog
          open
          aria-label={active.title}
          className="fixed inset-0 z-[80] grid h-full w-full max-w-none place-items-center bg-[var(--color-ink)]/88 p-4 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              aria-label="Fechar imagem da galeria"
              onClick={() => setActive(null)}
              className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center border border-[var(--color-cream)]/40 text-[var(--color-cream)] transition hover:bg-[var(--color-cream)] hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={active.image}
              alt={active.alt}
              className="max-h-[82vh] w-full object-contain"
            />
          </div>
        </dialog>
      ) : null}
    </section>
  );
}
