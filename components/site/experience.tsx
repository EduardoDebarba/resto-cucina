import { Sprout, UtensilsCrossed, Wine } from 'lucide-react';
import { SectionTitle } from './section-title';

const pillars = [
  {
    title: 'Cozinha artesanal',
    text: 'Massas feitas à mão e receitas tradicionais.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Ingredientes selecionados',
    text: 'Ingredientes frescos e cuidadosamente escolhidos.',
    icon: Sprout,
  },
  {
    title: 'Hospitalidade italiana',
    text: 'Acolhimento caloroso inspirado pela Itália.',
    icon: Wine,
  },
];

export function Experience() {
  return (
    <section className="section-shell bg-[var(--color-forest)] text-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="reveal">
          <SectionTitle
            label="Experiência"
            title={'Mais que jantar.\nUma experiência italiana.'}
            light
          />
          <div className="mt-12 grid gap-0 border-y border-[var(--color-cream)]/18 md:grid-cols-3 md:border-y-0">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="flex flex-col items-center border-t border-[var(--color-cream)]/18 px-6 py-8 text-center first:border-t-0 md:border-l md:border-t-0 md:first:border-l-0"
                >
                  <Icon className="h-11 w-11 stroke-[1.25] text-[var(--color-gold)]" />
                  <h3 className="mt-3 font-serif text-2xl leading-none text-[var(--color-gold)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 max-w-44 text-sm leading-5 text-[var(--color-cream)]/78">
                    {pillar.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
