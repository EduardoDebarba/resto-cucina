import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const socialLinks = ['Instagram', 'Facebook', 'TripAdvisor'];

export function Location() {
  return (
    <section id="contact" className="section-shell bg-[var(--color-cream)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div className="reveal">
          <p className="eyebrow text-[var(--color-bordeaux)]">Contact</p>
          <h2 className="mt-5 font-serif text-[clamp(3.8rem,7vw,7rem)] leading-[0.88] text-[var(--color-forest)]">
            Come trovarci
          </h2>
          <div className="mt-10 grid gap-7 text-base leading-7 text-[var(--color-muted)]">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--color-bordeaux)]" />
              <p>
                <strong className="font-bold text-[var(--color-ink)]">
                  Casa Bellini
                </strong>
                <br />
                Via Toscana, 24
                <br />
                Milano, Italia
              </p>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-[var(--color-bordeaux)]" />
              <a href="tel:+39025550123" className="transition hover:text-[var(--color-bordeaux)]">
                +39 02 555 0123
              </a>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-[var(--color-bordeaux)]" />
              <a
                href="mailto:ciao@casabellini.it"
                className="transition hover:text-[var(--color-bordeaux)]"
              >
                ciao@casabellini.it
              </a>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-[var(--color-bordeaux)]" />
              <p>
                Tuesday - Sunday
                <br />
                18:00 - 23:30
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {socialLinks.map((link) => (
              <a
                key={link}
                href="#home"
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-forest)] transition hover:text-[var(--color-bordeaux)]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="reveal relative min-h-[500px] overflow-hidden bg-[var(--color-forest)] p-6 text-[var(--color-cream)] sm:p-10">
          <div className="absolute inset-0 opacity-55">
            <div className="absolute left-[12%] top-0 h-full w-px bg-[var(--color-gold)]/28" />
            <div className="absolute left-[37%] top-0 h-full w-px bg-[var(--color-gold)]/20" />
            <div className="absolute left-[64%] top-0 h-full w-px bg-[var(--color-gold)]/24" />
            <div className="absolute left-0 top-[18%] h-px w-full bg-[var(--color-gold)]/20" />
            <div className="absolute left-0 top-[47%] h-px w-full bg-[var(--color-gold)]/25" />
            <div className="absolute left-0 top-[76%] h-px w-full bg-[var(--color-gold)]/18" />
          </div>
          <div className="absolute left-[56%] top-[42%] h-5 w-5 -translate-x-1/2 -translate-y-1/2 border-2 border-[var(--color-cream)] bg-[var(--color-bordeaux)] shadow-[0_0_0_12px_rgba(184,155,102,0.18)]" />
          <div className="relative z-10 flex h-full min-h-[452px] flex-col justify-between border border-[var(--color-cream)]/18 p-6 sm:p-8">
            <div>
              <p className="eyebrow text-[var(--color-gold)]">Milano Centro</p>
              <p className="mt-4 max-w-sm font-serif text-4xl leading-none">
                A quiet corner for candlelight, pasta and Barolo.
              </p>
            </div>
            <div className="max-w-sm bg-[var(--color-cream)] p-5 text-[var(--color-ink)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-bordeaux)]">
                Casa Bellini
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                Static map concept prepared for replacement with a real map
                integration when credentials are available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
