import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'TripAdvisor', href: 'https://www.tripadvisor.com.br/' },
];

export function Location() {
  return (
    <section id="contact" className="section-shell bg-[var(--color-cream)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div className="reveal">
          <p className="eyebrow text-[var(--color-bordeaux)]">Contato</p>
          <h2 className="mt-5 font-serif text-[clamp(2.3rem,4vw,4.2rem)] leading-[0.98] text-[var(--color-forest)]">
            Como chegar
          </h2>
          <div className="mt-10 grid gap-7 text-base leading-7 text-[var(--color-muted)]">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--color-bordeaux)]" />
              <p>
                <strong className="font-bold text-[var(--color-ink)]">
                  Resto Cucina
                </strong>
                <br />
                Av. Borges de Medeiros, 0000
                <br />
                Gramado, RS
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
                href="mailto:ciao@restocucina.it"
                className="transition hover:text-[var(--color-bordeaux)]"
              >
                ciao@restocucina.it
              </a>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-[var(--color-bordeaux)]" />
              <p>
                Terça - Domingo
                <br />
                18:00 - 23:30
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-forest)] transition hover:text-[var(--color-bordeaux)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="reveal relative min-h-[500px] overflow-hidden bg-[var(--color-forest)] p-3 text-[var(--color-cream)] sm:p-4">
          <iframe
            title="Mapa do centro de Gramado, RS"
            src="https://www.google.com/maps?q=Centro%20de%20Gramado%20RS&output=embed"
            className="h-[500px] w-full border-0 grayscale-[18%] sepia-[10%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-3 border border-[var(--color-cream)]/18 sm:inset-4" />
          <div className="absolute bottom-7 left-7 max-w-sm bg-[var(--color-cream)] p-5 text-[var(--color-ink)] shadow-[0_20px_50px_rgba(18,18,16,0.24)] sm:bottom-8 sm:left-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-bordeaux)]">
              Centro de Gramado
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              Av. Borges de Medeiros, 0000
              <br />
              Gramado, RS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
