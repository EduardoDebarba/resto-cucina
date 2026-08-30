import { images } from '@/lib/site-content';
import { SiteButton } from './button';

export function About() {
  return (
    <section id="about" className="section-shell bg-[var(--color-cream)]">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 md:py-32 lg:grid-cols-[0.92fr_1fr] lg:items-center lg:px-10">
        <div className="reveal relative min-h-[560px] sm:min-h-[680px]">
          <img
            src={images.aboutChef}
            alt="Chef preparando massa fresca em uma cozinha italiana acolhedora"
            className="h-[560px] w-[78%] object-cover sm:h-[680px]"
            loading="lazy"
          />
          <img
            src={images.aboutPasta}
            alt="Massa artesanal fresca sobre uma mesa enfarinhada"
            className="absolute bottom-8 right-0 h-56 w-52 border-[10px] border-[var(--color-cream)] object-cover shadow-[0_24px_60px_rgba(37,35,31,0.18)] sm:h-72 sm:w-64"
            loading="lazy"
          />
          <span className="absolute left-[74%] top-7 hidden h-32 w-px bg-[var(--color-gold)]/70 sm:block" />
          <span className="absolute left-[calc(74%+14px)] top-7 hidden origin-top-left rotate-90 text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-muted)] sm:block">
            Massa feita à mão
          </span>
        </div>

        <div className="reveal">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-serif text-5xl italic text-[var(--color-gold)]">01</span>
            <span className="h-px flex-1 bg-[var(--color-gold)]/40" />
          </div>
          <p className="eyebrow text-[var(--color-bordeaux)]">Nossa Filosofia</p>
          <h2 className="mt-5 max-w-3xl font-serif text-[clamp(2.35rem,4.4vw,4.6rem)] leading-[0.98] text-[var(--color-forest)]">
            Tradição italiana, servida com paixão.
          </h2>
          <div className="mt-8 grid gap-5 text-base leading-8 text-[var(--color-muted)] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <p>
              No Resto Cucina, cada prato nasce da paciência de uma mesa
              italiana: farinha sobre o mármore, tomates aquecidos pelo sol e
              receitas cuidadas de geração em geração.
            </p>
            <p>
              Nossa cozinha combina ingredientes mediterrâneos selecionados com
              técnica contemporânea, criando um ambiente onde massas
              artesanais, vinho e hospitalidade se tornam memoráveis.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-center">
            <SiteButton href="#story" variant="secondary">
              Conheça nossa história
            </SiteButton>
            <span className="font-serif text-3xl italic text-[var(--color-forest)]">
              Matteo Cucina
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
