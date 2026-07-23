'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Users, Check, Dog, Loader2, CheckCircle2 } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { differenceInDays, format } from 'date-fns';
import { srLatn } from 'date-fns/locale';
import { DatePicker } from '@/components/DatePicker'; // Importujemo naš novi kalendar

export default function RezervacijaPage() {
  const [step, setStep] = useState(1);
  const [nights, setNights] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State za Kalendar (koristi Date objekte umesto stringova)
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  // Glavni State za ostale podatke
  const [formData, setFormData] = useState({
    guests: 2,
    hasPets: false,
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const PRICE_PER_NIGHT = 150;
  const totalPrice = nights * PRICE_PER_NIGHT;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Prava logika za računanje noćenja pomoću date-fns
  useEffect(() => {
    if (dateRange?.from && dateRange?.to) {
      // Razlika u danima između check-out i check-in
      const calculatedNights = differenceInDays(dateRange.to, dateRange.from);
      setNights(calculatedNights);
    } else {
      setNights(0); // Resetuj ako nije izabran ceo opseg
    }
  }, [dateRange]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Priprema podataka za slanje
    const dataToSend = {
      ...formData,
      // Formatiramo datume za slanje (npr. "15.08.2026")
      checkIn: dateRange?.from ? format(dateRange.from, 'dd.MM.yyyy') : '',
      checkOut: dateRange?.to ? format(dateRange.to, 'dd.MM.yyyy') : '',
      nights,
      totalPrice
    };

    console.log("Šaljemo ove podatke:", dataToSend);

    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#1F3325] text-[#F5EFE6] pt-24 pb-12 px-6">
      <div className="mx-auto max-w-3xl">
        
        {step < 4 && (
          <>
            <div className="mb-8 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 text-[#F5EFE6]/70 hover:text-[#C19A5B] transition-colors">
                <ArrowLeft size={20} />
                Nazad na početnu
              </Link>
              <div className="text-sm font-semibold tracking-wider text-[#C19A5B]">
                KORAK {step} OD 3
              </div>
            </div>

            <div className="mb-12 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <div 
                className="h-full bg-[#C19A5B] transition-all duration-500 ease-out"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </>
        )}

        {/* --- KORAK 1: KALENDAR I CENA --- */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="font-serif text-3xl sm:text-4xl mb-2">Kada planirate dolazak?</h1>
            <p className="text-[#F5EFE6]/70 mb-8">Izaberite slobodne datume (Cena: 150€ / noć)</p>
            
            {/* Ubacujemo našu DatePicker komponentu */}
            <div className="mb-8">
              <DatePicker date={dateRange} setDate={setDateRange} />
            </div>

            {/* Prikaz sume i dugme (pojavljuje se samo kad su izabrana minimum 1 noć) */}
            {nights > 0 ? (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#C19A5B]/10 border border-[#C19A5B]/30 mb-8 animate-in slide-in-from-bottom-2 fade-in">
                <div className="text-center sm:text-left">
                  <div className="text-[#F5EFE6]/80 text-sm">
                    {format(dateRange!.from!, 'd. MMM', { locale: srLatn })} - {format(dateRange!.to!, 'd. MMM yyyy', { locale: srLatn })}
                  </div>
                  <div className="text-[#F5EFE6]/80 text-sm mt-1">Ukupno za {nights} {nights === 1 ? 'noćenje' : 'noćenja'}</div>
                  <div className="font-serif text-2xl text-[#C19A5B]">{totalPrice} €</div>
                </div>
                <button onClick={nextStep} className="w-full sm:w-auto px-8 py-3 bg-[#C19A5B] text-[#1F3325] font-bold rounded-full hover:bg-[#d3ac6c] transition-colors">
                  Potvrdi datume
                </button>
              </div>
            ) : (
               <div className="text-center text-[#F5EFE6]/50 italic">
                 *Molimo izaberite datum dolaska i odlaska na kalendaru iznad.
               </div>
            )}
          </div>
        )}

        {/* --- KORAK 2: GOSTI I LJUBIMCI --- */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="font-serif text-3xl sm:text-4xl mb-8">Detalji boravka</h1>
            
            <div className="space-y-6">
              {/* Broj gostiju (Maksimum 6) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#C19A5B]/20 text-[#C19A5B] rounded-xl"><Users size={24} /></div>
                  <div>
                    <h3 className="font-semibold text-lg">Broj gostiju</h3>
                    <p className="text-sm text-[#F5EFE6]/60">Maksimalno 6 osoba</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 self-end sm:self-auto">
                  <button 
                    onClick={() => setFormData({...formData, guests: Math.max(1, formData.guests - 1)})}
                    className="w-10 h-10 rounded-full border border-[#C19A5B]/50 text-[#C19A5B] flex items-center justify-center hover:bg-[#C19A5B]/20 text-xl transition-colors"
                  >-</button>
                  <span className="text-xl font-bold w-4 text-center">{formData.guests}</span>
                  <button 
                    onClick={() => setFormData({...formData, guests: Math.min(6, formData.guests + 1)})}
                    className="w-10 h-10 rounded-full border border-[#C19A5B]/50 text-[#C19A5B] flex items-center justify-center hover:bg-[#C19A5B]/20 text-xl transition-colors"
                  >+</button>
                </div>
              </div>

              {/* Kućni ljubimci Toggle */}
              <div 
                onClick={() => setFormData({...formData, hasPets: !formData.hasPets})}
                className={`cursor-pointer flex items-center justify-between rounded-2xl border p-6 transition-all duration-300 ${formData.hasPets ? 'border-[#C19A5B] bg-[#C19A5B]/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl transition-colors ${formData.hasPets ? 'bg-[#C19A5B] text-[#1F3325]' : 'bg-white/10 text-[#F5EFE6]/60'}`}>
                    <Dog size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Dolazim sa kućnim ljubimcem</h3>
                    <p className="text-sm text-[#F5EFE6]/60">Vaši krzneni prijatelji su dobrodošli</p>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${formData.hasPets ? 'border-[#C19A5B] bg-[#C19A5B]' : 'border-white/30'}`}>
                  {formData.hasPets && <Check size={16} className="text-[#1F3325]" />}
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <button onClick={prevStep} className="px-8 py-3 rounded-full border border-white/20 text-[#F5EFE6] hover:bg-white/5 transition-colors">Nazad</button>
              <button onClick={nextStep} className="flex-1 px-8 py-3 bg-[#C19A5B] text-[#1F3325] font-bold rounded-full hover:bg-[#d3ac6c] transition-colors">Dalje</button>
            </div>
          </div>
        )}

        {/* --- KORAK 3: KONTAKT I SLANJE --- */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="font-serif text-3xl sm:text-4xl mb-8">Vaši podaci</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Leva kolona: Forma */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#F5EFE6]/70 mb-1.5">Ime i prezime</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#F5EFE6] outline-none transition-colors focus:border-[#C19A5B] focus:bg-white/10"
                    placeholder="Unesite vaše ime"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F5EFE6]/70 mb-1.5">Email adresa</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#F5EFE6] outline-none transition-colors focus:border-[#C19A5B] focus:bg-white/10"
                    placeholder="primer@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F5EFE6]/70 mb-1.5">Broj telefona</label>
                  <input 
                    required
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#F5EFE6] outline-none transition-colors focus:border-[#C19A5B] focus:bg-white/10"
                    placeholder="+381 60 123 4567"
                  />
                </div>
              </div>

              {/* Desna kolona: Račun (Summary) */}
              <div className="rounded-2xl border border-[#C19A5B]/30 bg-[#C19A5B]/10 p-6 h-fit">
                <h3 className="font-serif text-xl text-[#C19A5B] mb-4">Pregled rezervacije</h3>
                
                <div className="space-y-3 text-sm text-[#F5EFE6]/80 mb-6">
                  <div className="flex justify-between">
                    <span>Noćenja:</span>
                    <span className="font-medium text-[#F5EFE6]">{nights} noći</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gosti:</span>
                    <span className="font-medium text-[#F5EFE6]">{formData.guests} osobe</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ljubimci:</span>
                    <span className="font-medium text-[#F5EFE6]">{formData.hasPets ? 'Da' : 'Ne'}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-[#C19A5B]/20 flex justify-between items-center">
                  <span className="text-[#F5EFE6]">Ukupno:</span>
                  <span className="font-serif text-2xl font-bold text-[#C19A5B]">{totalPrice} €</span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <button type="button" onClick={prevStep} disabled={isSubmitting} className="px-8 py-3 rounded-full border border-white/20 text-[#F5EFE6] hover:bg-white/5 transition-colors disabled:opacity-50">
                Nazad
              </button>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 flex items-center justify-center gap-2 px-8 py-3 bg-[#C19A5B] text-[#1F3325] font-bold rounded-full hover:bg-[#d3ac6c] transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <><Loader2 size={20} className="animate-spin" /> Šaljemo...</>
                ) : (
                  'Pošalji zahtev'
                )}
              </button>
            </div>
          </form>
        )}

        {/* --- KORAK 4: USPEŠNO POSLATO --- */}
        {step === 4 && (
          <div className="animate-in zoom-in-95 fade-in duration-500 text-center pt-12">
            <div className="w-24 h-24 rounded-full bg-[#C19A5B]/20 mx-auto flex items-center justify-center mb-6">
              <CheckCircle2 size={48} className="text-[#C19A5B]" />
            </div>
            <h1 className="font-serif text-4xl mb-4">Zahtev je uspešno poslat!</h1>
            <p className="text-[#F5EFE6]/70 max-w-md mx-auto mb-10 text-lg">
              Hvala vam na interesovanju, {formData.name}. Vlasnik će vas kontaktirati na ostavljeni email ili telefon u najkraćem roku kako bi potvrdio rezervaciju.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="px-8 py-3 rounded-full border border-white/20 text-[#F5EFE6] hover:bg-white/5 transition-colors">
                Vrati se na početnu
              </Link>
              <a href="https://wa.me/381600000000" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-colors">
                Pišite nam na WhatsApp
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}