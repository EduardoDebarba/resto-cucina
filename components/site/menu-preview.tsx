'use client';

import { ArrowRight, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { menuCategories } from '@/lib/site-content';
import { SectionTitle } from './section-title';

export function MenuPreview() {
  const [active, setActive] = useState(menuCategories[0].name);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeCategory = useMemo(
    () => menuCategories.find((category) => category.name === active) ?? menuCategories[0],
    [active],
  );

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <section id="menu" className="section-shell bg-[#fbf7ef]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            label="Nosso Menu"
            title="Feito com simplicidade, servido com alma."
          />
          <div className="menu-tabs-frame lg:max-w-xl">
            <div
              className="menu-tabs-scroll flex overflow-x-auto border-b border-[var(--color-forest)]/15"
              role="tablist"
              aria-label="Categorias do menu"
            >
              {menuCategories.map((category) => (
                <button
                  key={category.name}
                  type="button"
                  role="tab"
                  aria-selected={category.name === active}
                  onClick={() => setActive(category.name)}
                  className={`shrink-0 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)] ${
                    category.name === active
                      ? 'text-[var(--color-bordeaux)]'
                      : 'text-[var(--color-muted)] hover:text-[var(--color-forest)]'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          key={activeCategory.name}
          className="reveal mt-16 grid gap-x-14 gap-y-0 md:grid-cols-2"
          role="tabpanel"
        >
          {activeCategory.dishes.map(([name, description, price]) => (
            <article
              key={name}
              className="grid grid-cols-[1fr_auto] gap-5 border-b border-[var(--color-forest)]/13 py-7"
            >
              <div>
                <h3 className="font-serif text-2xl leading-none text-[var(--color-forest)]">
                  {name}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-[var(--color-muted)]">
                  {description}
                </p>
              </div>
              <p className="font-serif text-xl text-[var(--color-bordeaux)]">
                {price}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="group inline-flex min-h-12 items-center justify-center gap-3 border border-[var(--color-bordeaux)] bg-[var(--color-bordeaux)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-cream)] transition duration-300 hover:border-[var(--color-forest)] hover:bg-[var(--color-forest)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
          >
            <span>
            Ver menu completo
            </span>
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <dialog
          open
          aria-labelledby="full-menu-title"
          className="fixed inset-0 z-[90] m-0 grid h-dvh w-dvw max-h-none max-w-none place-items-center bg-[var(--color-ink)]/82 p-4 backdrop-blur-sm"
        >
          <div className="relative max-h-[88vh] w-full max-w-5xl overflow-hidden bg-[#fbf7ef] text-[var(--color-ink)] shadow-[0_30px_90px_rgba(18,18,16,0.42)]">
            <div className="flex items-start justify-between gap-6 border-b border-[var(--color-forest)]/12 px-6 py-6 sm:px-8">
              <div>
                <p className="eyebrow text-[var(--color-bordeaux)]">Menu completo</p>
                <h2
                  id="full-menu-title"
                  className="mt-3 font-serif text-[clamp(2rem,3.6vw,3.5rem)] leading-none text-[var(--color-forest)]"
                >
                  Resto Cucina
                </h2>
              </div>
              <button
                type="button"
                aria-label="Fechar menu completo"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--color-forest)]/20 text-[var(--color-forest)] transition hover:bg-[var(--color-forest)] hover:text-[var(--color-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="full-menu-scroll max-h-[calc(88vh-122px)] overflow-y-auto px-6 py-7 sm:px-8">
              <div className="grid gap-x-12 gap-y-10 lg:grid-cols-2">
                {menuCategories.map((category) => (
                  <section key={category.name}>
                    <h3 className="border-b border-[var(--color-gold)]/55 pb-3 font-serif text-3xl leading-none text-[var(--color-bordeaux)]">
                      {category.name}
                    </h3>
                    <div className="mt-2">
                      {category.dishes.map(([name, description, price]) => (
                        <article
                          key={`${category.name}-${name}`}
                          className="grid grid-cols-[1fr_auto] gap-5 border-b border-[var(--color-forest)]/10 py-4"
                        >
                          <div>
                            <h4 className="font-serif text-xl leading-tight text-[var(--color-forest)]">
                              {name}
                            </h4>
                            <p className="mt-1 max-w-md text-sm leading-6 text-[var(--color-muted)]">
                              {description}
                            </p>
                          </div>
                          <p className="pt-1 font-serif text-lg text-[var(--color-bordeaux)]">
                            {price}
                          </p>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </dialog>
      ) : null}
    </section>
  );
}
