import { ChefHat, HandHeart, Sprout } from 'lucide-react';
import { SectionTitle } from './section-title';

const pillars = [
  {
    title: 'Cozinha Artesanal',
    text: 'Massas artesanais e receitas tradicionais.',
    icon: ChefHat,
  },
  {
    title: 'Ingredientes Selecionados',
    text: 'Ingredientes frescos e cuidadosamente selecionados.',
    icon: Sprout,
  },
  {
    title: 'Hospitalidade Italiana',
    text: 'Hospitalidade calorosa inspirada na Itália.',
    icon: HandHeart,
  },
];

export function Experience() {
  return (
    <section className="section-shell bg-[var(--color-forest)] text-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <SectionTitle
          label="Experiência"
          title={'Mais que jantar.\nUma experiência italiana.'}
          light
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="reveal border-t border-[var(--color-cream)]/18 pt-8"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <Icon className="h-9 w-9 stroke-[1.35] text-[var(--color-gold)]" />
                <p className="mt-14 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-serif text-3xl text-[var(--color-cream)]">
                  {pillar.title}
                </h3>
                <p className="mt-3 max-w-xs text-base leading-7 text-[var(--color-cream)]/68">
                  {pillar.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
