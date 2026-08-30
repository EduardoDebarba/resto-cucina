'use client';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';
import { testimonials } from '@/lib/site-content';

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  const goTo = (index: number) => {
    setActive((index + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-shell bg-[#efe6d8]">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="reveal relative mx-auto max-w-4xl text-center">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-2.75rem] -translate-x-1/2 font-serif text-[6.5rem] leading-none text-[var(--color-gold)]/24"
          >
            &ldquo;
          </span>
          <div className="relative pt-8" aria-live="polite">
            <div className="mb-8 flex justify-center gap-1 text-[var(--color-gold)]" aria-label="Avaliacao de cinco estrelas">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <blockquote className="font-serif text-[clamp(1.75rem,3.1vw,3.15rem)] leading-[1.1] text-[var(--color-forest)]">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-bordeaux)]">
              {current.author}
            </p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{current.role}</p>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Depoimento anterior"
            onClick={() => goTo(active - 1)}
            className="inline-flex h-11 w-11 items-center justify-center border border-[var(--color-forest)]/20 text-[var(--color-forest)] transition hover:bg-[var(--color-forest)] hover:text-[var(--color-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.author}
                type="button"
                aria-label={`Mostrar depoimento de ${testimonial.author}`}
                aria-current={index === active}
                onClick={() => goTo(index)}
                className={`h-2.5 transition-all ${
                  index === active
                    ? 'w-8 bg-[var(--color-bordeaux)]'
                    : 'w-2.5 bg-[var(--color-forest)]/25 hover:bg-[var(--color-forest)]/50'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Proximo depoimento"
            onClick={() => goTo(active + 1)}
            className="inline-flex h-11 w-11 items-center justify-center border border-[var(--color-forest)]/20 text-[var(--color-forest)] transition hover:bg-[var(--color-forest)] hover:text-[var(--color-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
