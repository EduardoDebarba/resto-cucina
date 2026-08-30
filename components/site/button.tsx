import { ArrowRight } from 'lucide-react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'light';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    'border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-ink)] hover:border-[var(--color-cream)] hover:bg-[var(--color-cream)]',
  secondary:
    'border-[var(--color-bordeaux)] bg-[var(--color-bordeaux)] text-[var(--color-cream)] hover:border-[var(--color-forest)] hover:bg-[var(--color-forest)]',
  outline: 'border-current bg-transparent text-current hover:bg-current/10',
  light:
    'border-[var(--color-cream)] bg-[var(--color-cream)] text-[var(--color-forest)] hover:bg-transparent hover:text-[var(--color-cream)]',
};

export function SiteButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <a
      className={`group inline-flex min-h-12 items-center justify-center gap-3 border px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)] ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}
