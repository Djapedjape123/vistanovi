// components/DatePicker.tsx
'use client';

import React from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import { srLatn } from 'date-fns/locale'; // Za srpski jezik
import 'react-day-picker/dist/style.css'; // Osnovni stilovi koje ćemo pregaziti

interface DatePickerProps {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
}

export function DatePicker({ date, setDate }: DatePickerProps) {
  // Ovde ćemo kasnije ubaciti logiku za povlačenje zauzetih datuma sa Bookinga
  // Za sada stavljamo primer: isključujemo datume pre današnjeg
  const disabledDays = { before: new Date() };

  return (
    <div className="flex justify-center p-4">
      {/* 
        Koristimo Tailwind klase da pregazimo defaultne stilove react-day-picker-a.
        Stilizujemo ga u tamnu temu sa zlatnim akcentima.
      */}
      <style>{`
        .rdp {
          --rdp-cell-size: 45px;
          --rdp-accent-color: #C19A5B; /* Tvoja zlatna */
          --rdp-background-color: rgba(193, 154, 91, 0.2); /* Zlatna sa providnošću za hover/selected */
          --rdp-accent-color-dark: #d3ac6c;
          --rdp-background-color-dark: rgba(193, 154, 91, 0.3);
          --rdp-outline: 2px solid var(--rdp-accent-color);
          --rdp-outline-selected: 2px solid var(--rdp-accent-color);
          margin: 0;
        }
        .rdp-day_selected, 
        .rdp-day_selected:focus-visible, 
        .rdp-day_selected:hover {
          color: #1F3325; /* Tamno zelena za tekst na izabranim datumima */
          background-color: var(--rdp-accent-color);
        }
        .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
          background-color: var(--rdp-background-color);
          color: #F5EFE6;
        }
        .rdp-day_disabled {
          opacity: 0.3;
        }
        .rdp-caption_label {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; /* Da se slaže sa naslovima */
          font-size: 1.25rem;
          color: #C19A5B;
        }
        .rdp-nav_button {
          color: #C19A5B;
        }
        .rdp-nav_button:hover {
          background-color: var(--rdp-background-color);
        }
        .rdp-head_cell {
          color: rgba(245, 239, 230, 0.6); /* Prigušena bela za dane u nedelji */
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
        }
        .rdp-day {
          color: #F5EFE6;
          border-radius: 8px; /* Malo kockastiji/moderniji izgled */
        }
        .rdp-day_range_middle {
          background-color: var(--rdp-background-color) !important;
          color: #F5EFE6 !important;
          border-radius: 0;
        }
        .rdp-day_range_start {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .rdp-day_range_end {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      `}</style>

      <DayPicker
        mode="range"
        selected={date}
        onSelect={setDate}
        locale={srLatn} // Prevod na srpski (latinica)
        disabled={disabledDays}
        numberOfMonths={1} // Na mobilnom 1, možeš staviti 2 za desktop kasnije
        pagedNavigation
        showOutsideDays={false}
        className="border border-white/10 bg-white/5 p-4 rounded-2xl backdrop-blur-md"
      />
    </div>
  );
}