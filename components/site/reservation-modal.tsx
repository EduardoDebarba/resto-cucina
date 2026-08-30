'use client';

import { CalendarDays, Clock, Mail, Phone, Users, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export const RESERVATION_MODAL_EVENT = 'resto-cucina:open-reservation-modal';

type ReservationForm = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
};

const initialReservation: ReservationForm = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '20:00',
  guests: '2',
  notes: '',
};

const timeOptions = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];

export function openReservationModal() {
  window.dispatchEvent(new Event(RESERVATION_MODAL_EVENT));
}

export function ReservationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [reservation, setReservation] = useState<ReservationForm>(initialReservation);

  const closeModal = useCallback(() => {
    setIsOpen(false);

    if (isConfirmed) {
      setReservation(initialReservation);
      setIsConfirmed(false);
    }
  }, [isConfirmed]);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsConfirmed(false);
    };

    window.addEventListener(RESERVATION_MODAL_EVENT, handleOpen);
    return () => window.removeEventListener(RESERVATION_MODAL_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal, isOpen]);

  if (!isOpen) {
    return null;
  }

  const minDate = new Date().toISOString().split('T')[0];

  const updateField = (field: keyof ReservationForm, value: string) => {
    setReservation((current) => ({ ...current, [field]: value }));
    setIsConfirmed(false);
  };

  return (
    <dialog
      open
      aria-labelledby="reservation-modal-title"
      aria-modal="true"
      className="fixed inset-0 z-[100] m-0 flex h-full max-h-none w-full max-w-none items-center justify-center border-0 bg-[rgba(18,18,16,0.74)] px-4 py-6 backdrop-blur-sm"
    >
      <div className="reservation-modal-scroll max-h-[92svh] w-full max-w-3xl overflow-y-auto bg-[#fbf7ef] p-5 text-[var(--color-ink)] shadow-[0_28px_90px_rgba(0,0,0,0.34)] sm:p-7">
        <div className="flex items-start justify-between gap-5 border-b border-[var(--color-forest)]/12 pb-5">
          <div>
            <p className="eyebrow text-[var(--color-bordeaux)]">Reserva</p>
            <h2
              id="reservation-modal-title"
              className="mt-3 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-none text-[var(--color-forest)]"
            >
              Reserve sua mesa
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              Preencha os dados abaixo para simular uma reserva no Resto Cucina.
              Nossa equipe confirmaria os detalhes por telefone ou e-mail.
            </p>
          </div>
          <button
            type="button"
            aria-label="Fechar reserva"
            onClick={closeModal}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--color-forest)]/20 text-[var(--color-forest)] transition hover:border-[var(--color-bordeaux)] hover:bg-[var(--color-bordeaux)] hover:text-[var(--color-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setIsConfirmed(true);
          }}
          className="mt-6 grid gap-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-[var(--color-forest)]">
              Nome completo
              <input
                required
                type="text"
                value={reservation.name}
                onChange={(event) => updateField('name', event.target.value)}
                placeholder="Seu nome"
                className="min-h-12 border border-[var(--color-forest)]/16 bg-white/70 px-4 text-sm font-medium text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)]/55 focus:border-[var(--color-gold)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[var(--color-forest)]">
              Telefone
              <span className="relative">
                <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-gold)]" />
                <input
                  required
                  type="tel"
                  value={reservation.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                  placeholder="(54) 00000-0000"
                  className="min-h-12 w-full border border-[var(--color-forest)]/16 bg-white/70 px-4 pl-11 text-sm font-medium text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)]/55 focus:border-[var(--color-gold)]"
                />
              </span>
            </label>
          </div>

          <label className="grid gap-2 text-sm font-bold text-[var(--color-forest)]">
            E-mail
            <span className="relative">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-gold)]" />
              <input
                required
                type="email"
                value={reservation.email}
                onChange={(event) => updateField('email', event.target.value)}
                placeholder="voce@email.com"
                className="min-h-12 w-full border border-[var(--color-forest)]/16 bg-white/70 px-4 pl-11 text-sm font-medium text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)]/55 focus:border-[var(--color-gold)]"
              />
            </span>
          </label>

          <div className="grid gap-5 md:grid-cols-3">
            <label className="grid gap-2 text-sm font-bold text-[var(--color-forest)]">
              Data
              <span className="relative">
                <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-gold)]" />
                <input
                  required
                  min={minDate}
                  type="date"
                  value={reservation.date}
                  onChange={(event) => updateField('date', event.target.value)}
                  className="min-h-12 w-full border border-[var(--color-forest)]/16 bg-white/70 px-4 pl-11 text-sm font-medium text-[var(--color-ink)] outline-none transition focus:border-[var(--color-gold)]"
                />
              </span>
            </label>
            <label className="grid gap-2 text-sm font-bold text-[var(--color-forest)]">
              Horário
              <span className="relative">
                <Clock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-gold)]" />
                <select
                  required
                  value={reservation.time}
                  onChange={(event) => updateField('time', event.target.value)}
                  className="min-h-12 w-full appearance-none border border-[var(--color-forest)]/16 bg-white/70 px-4 pl-11 text-sm font-medium text-[var(--color-ink)] outline-none transition focus:border-[var(--color-gold)]"
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </span>
            </label>
            <label className="grid gap-2 text-sm font-bold text-[var(--color-forest)]">
              Pessoas
              <span className="relative">
                <Users className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-gold)]" />
                <select
                  required
                  value={reservation.guests}
                  onChange={(event) => updateField('guests', event.target.value)}
                  className="min-h-12 w-full appearance-none border border-[var(--color-forest)]/16 bg-white/70 px-4 pl-11 text-sm font-medium text-[var(--color-ink)] outline-none transition focus:border-[var(--color-gold)]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((amount) => (
                    <option key={amount} value={amount}>
                      {amount} {amount === 1 ? 'pessoa' : 'pessoas'}
                    </option>
                  ))}
                </select>
              </span>
            </label>
          </div>

          <label className="grid gap-2 text-sm font-bold text-[var(--color-forest)]">
            Observações
            <textarea
              rows={4}
              value={reservation.notes}
              onChange={(event) => updateField('notes', event.target.value)}
              placeholder="Preferência de mesa, ocasião especial ou restrição alimentar"
              className="resize-none border border-[var(--color-forest)]/16 bg-white/70 px-4 py-3 text-sm font-medium leading-7 text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)]/55 focus:border-[var(--color-gold)]"
            />
          </label>

          {isConfirmed ? (
            <div className="border border-[var(--color-gold)]/45 bg-[var(--color-forest)] px-5 py-4 text-[var(--color-cream)]">
              <p className="font-serif text-2xl leading-tight">Reserva simulada com sucesso.</p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-cream)]/78">
                {reservation.name}, sua mesa para {reservation.guests}{' '}
                {reservation.guests === '1' ? 'pessoa' : 'pessoas'} ficou
                pré-reservada para {reservation.date} às {reservation.time}.
              </p>
            </div>
          ) : null}

          <div className="flex flex-col-reverse gap-3 border-t border-[var(--color-forest)]/12 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="inline-flex min-h-12 items-center justify-center border border-[var(--color-forest)]/25 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-forest)] transition hover:bg-[var(--color-forest)] hover:text-[var(--color-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
            >
              Fechar
            </button>
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-ink)] transition hover:border-[var(--color-forest)] hover:bg-[var(--color-forest)] hover:text-[var(--color-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
            >
              Confirmar reserva
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
