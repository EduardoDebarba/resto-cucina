import { signatureDishes } from '@/lib/site-content';
import { SectionTitle } from './section-title';

export function SignatureDishes() {
  return (
    <section id="signature" className="section-shell bg-[var(--color-warm)]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle
            label="Dal Nostro Menu"
            title="Sapori della Casa"
            kicker="Our signature dishes"
          />
          <p className="max-w-sm text-base leading-7 text-[var(--color-muted)]">
            Three signatures that speak in a soft Italian accent: handmade,
            seasonal and finished with restraint.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:items-start">
          {signatureDishes.map((dish, index) => (
            <article
              key={dish.name}
              className={`group reveal ${index === 1 ? 'md:mt-16' : ''}`}
            >
              <div className="overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  loading="lazy"
                  className={`w-full object-cover transition duration-700 group-hover:scale-[1.035] ${
                    index === 1 ? 'aspect-[4/5]' : 'aspect-[5/6]'
                  }`}
                />
              </div>
              <div className="mt-7 flex flex-col gap-4 border-t border-[var(--color-forest)]/18 pt-5 transition duration-300 group-hover:-translate-y-1 xl:flex-row xl:items-start xl:justify-between">
                <div>
                  <h3 className="font-serif text-4xl leading-none text-[var(--color-forest)]">
                    {dish.name}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--color-muted)]">
                    {dish.description}
                  </p>
                </div>
                <p className="shrink-0 font-serif text-3xl text-[var(--color-bordeaux)]">
                  {dish.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
