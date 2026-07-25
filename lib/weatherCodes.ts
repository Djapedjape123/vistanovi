import {
  Sun,
  CloudSun,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  CloudLightning,
  LucideIcon,
} from 'lucide-react';

export function getWeatherInfo(code: number): { icon: LucideIcon; label: string } {
  if (code === 0) return { icon: Sun, label: 'Vedro' };
  if (code === 1) return { icon: Sun, label: 'Pretežno vedro' };
  if (code === 2) return { icon: CloudSun, label: 'Delimično oblačno' };
  if (code === 3) return { icon: Cloud, label: 'Oblačno' };
  if ([45, 48].includes(code)) return { icon: CloudFog, label: 'Magla' };
  if ([51, 53, 55, 56, 57].includes(code)) return { icon: CloudDrizzle, label: 'Rominjanje' };
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { icon: CloudRain, label: 'Kiša' };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { icon: CloudSnow, label: 'Sneg' };
  if ([95, 96, 99].includes(code)) return { icon: CloudLightning, label: 'Grmljavina' };
  return { icon: Cloud, label: 'Oblačno' };
}