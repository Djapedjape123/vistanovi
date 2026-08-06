'use client';

import React, { useState, useEffect } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import { srLatn } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

interface DatePickerProps {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
}

export function DatePicker({ date, setDate }: DatePickerProps) {
  // Stanje u kom čuvamo zauzete datume sa Bookinga
  const [bookedDays, setBookedDays] = useState<{ from: Date; to: Date }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Povlačenje iCal podataka sa našeg servera čim se komponenta učita
  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const response = await fetch('/api/calendar');
        if (response.ok) {
          const data = await response.json();
          
          // API vraća datume kao običan tekst, moramo ih pretvoriti u JavaScript Date objekte
          const parsedRanges = data.disabledRanges.map((range: { from: string, to: string }) => ({
            from: new Date(range.from),
            to: new Date(range.to)
          }));
          
          setBookedDays(parsedRanges);
        }
      } catch (error) {
        console.error("Greška pri učitavanju kalendara:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookedDates();
  }, []);

  // Spajamo pravila: isključujemo prošlost + isključujemo datume sa Bookinga
  const disabledDays = [
    { before: new Date() },
    ...bookedDays
  ];

  return (
    <div className="flex flex-col items-center p-4 relative">
      
      {/* Indikator učitavanja dok kalendar proverava Booking */}
      {isLoading && (
        <div className="absolute top-2 right-4 flex items-center gap-2 text-xs text-[#C19A5B] font-bold animate-pulse">
          <div className="w-2 h-2 bg-[#C19A5B] rounded-full"></div>
          Sinhronizacija...
        </div>
      )}

      <style>{`
        .rdp {
          --rdp-cell-size: 45px;
          --rdp-accent-color: #C19A5B;
          --rdp-background-color: rgba(193, 154, 91, 0.2);
          --rdp-accent-color-dark: #d3ac6c;
          --rdp-background-color-dark: rgba(193, 154, 91, 0.3);
          --rdp-outline: 2px solid var(--rdp-accent-color);
          --rdp-outline-selected: 2px solid var(--rdp-accent-color);
          margin: 0;
        }
        .rdp-day_selected, 
        .rdp-day_selected:focus-visible, 
        .rdp-day_selected:hover {
          color: #1F3325;
          background-color: var(--rdp-accent-color);
        }
        .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
          background-color: var(--rdp-background-color);
          color: #F5EFE6;
        }
        .rdp-day_disabled {
          opacity: 0.25;
          text-decoration: line-through; /* Da bude jasnije da je zauzeto */
        }
        .rdp-caption_label {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
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
          color: rgba(245, 239, 230, 0.6);
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
        }
        .rdp-day {
          color: #F5EFE6;
          border-radius: 8px;
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
        locale={srLatn}
        disabled={disabledDays}
        numberOfMonths={1}
        pagedNavigation
        showOutsideDays={false}
        className="border border-white/10 bg-white/5 p-4 rounded-2xl backdrop-blur-md transition-opacity duration-300"
        style={{ opacity: isLoading ? 0.6 : 1 }}
      />
    </div>
  );
}