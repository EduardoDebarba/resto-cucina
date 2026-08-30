import { ChefHat, HandHeart, Sprout } from 'lucide-react';
import { SectionTitle } from './section-title';

const pillars = [
  {
    title: 'Cozinha artesanal',
    text: 'Massas artesanais e receitas tradicionais.',
    icon: ChefHat,
  },
  {
    title: 'Ingredientes selecionados',
    text: 'Ingredientes frescos e cuidadosamente selecionados.',
    icon: Sprout,
  },
  {
    title: 'Hospitalidade italiana',
    text: 'Hospitalidade calorosa inspirada na Itália.',
    icon: HandHeart,
  },
];

export function Experience() {
  return (
    <section className="section-shell bg-[var(--color-forest)] text-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="reveal grid items-start gap-12 lg:grid-cols-[0.9fr_1.55fr] lg:gap-16">
          <SectionTitle
            label="Experiência"
            title={'Mais que jantar.\nUma experiência italiana.'}
            light
          />
          <div className="grid gap-0 border-y border-[var(--color-cream)]/16 md:grid-cols-3 md:border-y-0">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex flex-col items-center border-t border-[var(--color-cream)]/16 px-6 py-8 text-center first:border-t-0 md:border-l md:border-t-0 md:first:border-l-0 lg:min-h-44"
              >
                <Icon className="h-10 w-10 stroke-[1.25] text-[var(--color-gold)]" />
                <h3 className="mt-4 font-serif text-2xl leading-none text-[var(--color-gold)]">
                  {pillar.title}
                </h3>
                <p className="mt-2 max-w-40 text-sm leading-5 text-[var(--color-cream)]/76">
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
