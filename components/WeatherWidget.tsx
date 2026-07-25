'use client';

import React, { useEffect, useState } from 'react';
import { Sunset } from 'lucide-react';
import { getWeatherInfo } from '@/lib/weatherCodes';

interface WeatherData {
  temperature: number;
  weatherCode: number;
  sunset: string;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/weather')
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data: WeatherData) => {
        setWeather(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) return null; // tih fallback - ne rušimo hero ako API padne

  const sunsetTime = weather
    ? new Date(weather.sunset).toLocaleTimeString('sr-RS', {
        hour: '2-digit',
        minute: '2-digit',
      })
    : null;

  const weatherInfo = weather ? getWeatherInfo(weather.weatherCode) : null;
  const WeatherIcon = weatherInfo?.icon;

  return (
    <div className="absolute top-24 right-4 sm:top-28 sm:right-8 z-20 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-md">
      {loading ? (
        <div className="flex items-center gap-3 animate-pulse">
          <div className="h-7 w-7 rounded-full bg-white/10" />
          <div className="h-5 w-14 rounded bg-white/10" />
        </div>
      ) : (
        <div className="flex flex-col gap-2 min-w-[140px]">
          <div className="flex items-center gap-2.5">
            {WeatherIcon && <WeatherIcon size={24} className="text-[#C19A5B]" />}
            <span className="font-serif text-2xl text-[#F5EFE6]">
              {weather?.temperature}°C
            </span>
          </div>
          <p className="text-xs text-[#F5EFE6]/60">{weatherInfo?.label} · Fruška gora</p>
          <div className="mt-1 flex items-center gap-1.5 border-t border-white/10 pt-2">
            <Sunset size={14} className="text-[#C19A5B]" />
            <span className="text-xs text-[#F5EFE6]/80">Zalazak {sunsetTime}</span>
          </div>
        </div>
      )}
    </div>
  );
}