import { NextResponse } from 'next/server';

const LATITUDE = 45.16;
const LONGITUDE = 19.85;

export async function GET() {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunset&timezone=Europe/Belgrade&forecast_days=5`;

    const res = await fetch(url, {
      next: { revalidate: 1800 },
    });

    if (!res.ok) throw new Error('Open-Meteo fetch nije uspeo');

    const data = await res.json();

    // Spajamo daily nizove u niz objekata, po jedan po danu
    const forecast = data.daily.time.map((date: string, i: number) => ({
      date,
      weatherCode: data.daily.weather_code[i],
      tempMax: Math.round(data.daily.temperature_2m_max[i]),
      tempMin: Math.round(data.daily.temperature_2m_min[i]),
    }));

    return NextResponse.json({
      temperature: Math.round(data.current.temperature_2m),
      weatherCode: data.current.weather_code,
      sunset: data.daily.sunset[0],
      forecast, // novi deo - niz od 5 dana, forecast[0] je danas
    });
  } catch (error) {
    console.error('Weather API greška:', error);
    return NextResponse.json({ error: 'Ne mogu da učitam vreme' }, { status: 500 });
  }
}