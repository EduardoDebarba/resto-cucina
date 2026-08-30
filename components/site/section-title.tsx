type SectionTitleProps = {
  label: string;
  title: string;
  kicker?: string;
  align?: 'left' | 'center';
  light?: boolean;
};

export function SectionTitle({
  label,
  title,
  kicker,
  align = 'left',
  light = false,
}: SectionTitleProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-4xl'}>
      <p className={`eyebrow ${light ? 'text-[var(--color-gold)]' : 'text-[var(--color-bordeaux)]'}`}>
        {label}
      </p>
      <h2
        className={`mt-5 font-serif text-[clamp(2.35rem,4.4vw,4.5rem)] leading-[0.98] tracking-normal ${
          light ? 'text-[var(--color-cream)]' : 'text-[var(--color-forest)]'
        } whitespace-pre-line`}
      >
        {title}
      </h2>
      {kicker ? (
        <p
          className={`mt-5 text-sm font-bold uppercase tracking-[0.18em] ${
            light ? 'text-[var(--color-cream)]/62' : 'text-[var(--color-muted)]'
          }`}
        >
          {kicker}
        </p>
      ) : null}
    </div>
  );
}
