'use client';

import React, { useEffect, useState } from 'react';
import { getWeatherInfo } from '@/lib/weatherCodes';

interface ForecastDay {
  date: string;
  weatherCode: number;
  tempMax: number;
  tempMin: number;
}

export default function ForecastSection() {
  const [forecast, setForecast] = useState<ForecastDay[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/weather')
      .then((res) => res.json())
      .then((data) => {
        setForecast(data.forecast ?? null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const formatDayLabel = (dateStr: string, index: number) => {
    if (index === 0) return 'Danas';
    if (index === 1) return 'Sutra';
    const date = new Date(dateStr);
    return date.toLocaleDateString('sr-RS', { weekday: 'short' });
  };

  return (
    <section className="bg-[#152219] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#C19A5B]">
            Planiraj svoju posetu
          </p>
          <h2 className="font-serif text-3xl text-[#F5EFE6] md:text-4xl">
            Vreme na Fruškoj gori
          </h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-5 sm:overflow-visible">
          {loading || !forecast
            ? Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="min-w-[110px] flex-1 animate-pulse rounded-2xl border border-white/10 bg-black/20 px-4 py-6"
                >
                  <div className="mx-auto h-4 w-12 rounded bg-white/10" />
                  <div className="mx-auto mt-4 h-7 w-7 rounded-full bg-white/10" />
                  <div className="mx-auto mt-4 h-4 w-16 rounded bg-white/10" />
                </div>
              ))
            : forecast.map((day, index) => {
                const info = getWeatherInfo(day.weatherCode);
                const Icon = info.icon;
                const isToday = index === 0;

                return (
                  <div
                    key={day.date}
                    className={`min-w-[110px] flex-1 rounded-2xl border px-4 py-6 text-center transition-colors ${
                      isToday
                        ? 'border-[#C19A5B]/50 bg-[#C19A5B]/10'
                        : 'border-white/10 bg-black/20'
                    }`}
                  >
                    <p
                      className={`text-sm font-semibold uppercase tracking-wide ${
                        isToday ? 'text-[#C19A5B]' : 'text-[#F5EFE6]/70'
                      }`}
                    >
                      {formatDayLabel(day.date, index)}
                    </p>

                    <Icon
                      size={28}
                      className={`mx-auto my-4 ${isToday ? 'text-[#C19A5B]' : 'text-[#F5EFE6]/80'}`}
                    />

                    <p className="text-xs text-[#F5EFE6]/50 mb-1">{info.label}</p>

                    <div className="flex items-center justify-center gap-2 text-sm">
                      <span className="font-semibold text-[#F5EFE6]">{day.tempMax}°</span>
                      <span className="text-[#F5EFE6]/40">{day.tempMin}°</span>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
}