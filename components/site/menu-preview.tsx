'use client';

import { useMemo, useState } from 'react';
import { menuCategories } from '@/lib/site-content';
import { SiteButton } from './button';
import { SectionTitle } from './section-title';

export function MenuPreview() {
  const [active, setActive] = useState(menuCategories[0].name);
  const activeCategory = useMemo(
    () => menuCategories.find((category) => category.name === active) ?? menuCategories[0],
    [active],
  );

  return (
    <section id="menu" className="section-shell bg-[#fbf7ef]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            label="Il Nostro Menu"
            title="Made with simplicity, served with soul."
          />
          <div
            className="flex overflow-x-auto border-b border-[var(--color-forest)]/15 pb-2 lg:max-w-xl"
            role="tablist"
            aria-label="Menu categories"
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
                <h3 className="font-serif text-3xl leading-none text-[var(--color-forest)]">
                  {name}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-[var(--color-muted)]">
                  {description}
                </p>
              </div>
              <p className="font-serif text-2xl text-[var(--color-bordeaux)]">
                {price}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <SiteButton href="#reservations" variant="secondary">
            View Full Menu
          </SiteButton>
        </div>
      </div>
    </section>
  );
}
