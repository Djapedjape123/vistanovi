'use client';

import React, { useState } from 'react';
import { Phone, Mail, User, CheckCircle2, Loader2, Send, MapPin, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function KontaktPage() {
  const { activeLang, t } = useLanguage();
  
  // State za običnu kontakt formu
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      // Šaljemo podatke na naš backend api ruter
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        setErrorMessage(data.error || 'Došlo je do greške. Pokušajte ponovo.');
      }
    } catch (err) {
      setErrorMessage('Mrežna greška. Proverite internet konekciju.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#1F3325] pt-24 pb-20 text-[#F5EFE6]">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER STRANICE */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block rounded-full bg-[#C19A5B]/20 border border-[#C19A5B]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#C19A5B] backdrop-blur-md mb-4">
            {t.nav?.contact || 'Kontakt'}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F5EFE6] mb-6">
            {activeLang === 'SRB' ? 'Stupite u kontakt sa nama' : 'Get in Touch'}
          </h1>
          <p className="text-[#F5EFE6]/70 max-w-2xl mx-auto text-lg leading-relaxed">
            {activeLang === 'SRB' 
              ? 'Imate pitanje o smeštaju, lokaciji ili slobodnim terminima? Pošaljite nam poruku, tu smo za vas.'
              : 'Have a question about accommodation, location, or availability? Send us a message, we are here for you.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEVA STRANA: INFO KARTICE */}
          <div className="lg:col-span-5 space-y-6 animate-in fade-in slide-in-from-left-8 duration-700 delay-100">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
              <h3 className="font-serif text-2xl text-[#C19A5B] mb-6">
                {activeLang === 'SRB' ? 'Informacije' : 'Information'}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C19A5B]/20 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#C19A5B]" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-[#F5EFE6]/50 uppercase tracking-widest mb-1">
                      {t.contactSection?.address || 'Lokacija'}
                    </p>
                    <p className="text-[#F5EFE6] font-medium">{t.contactSection?.addressVal}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C19A5B]/20 flex items-center justify-center shrink-0">
                    <Phone className="text-[#C19A5B]" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-[#F5EFE6]/50 uppercase tracking-widest mb-1">
                      {t.contactSection?.phone || 'Telefon'}
                    </p>
                    <a href={`tel:${t.contactSection?.phoneVal.replace(/\s/g, '')}`} className="text-[#F5EFE6] font-medium hover:text-[#C19A5B] transition-colors">
                      {t.contactSection?.phoneVal}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C19A5B]/20 flex items-center justify-center shrink-0">
                    <Mail className="text-[#C19A5B]" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-[#F5EFE6]/50 uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a href={`mailto:${t.contactSection?.emailVal}`} className="text-[#F5EFE6] font-medium hover:text-[#C19A5B] transition-colors">
                      {t.contactSection?.emailVal}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Slika ispod info sekcije */}
            <div className="hidden lg:block relative h-64 w-full rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://res.cloudinary.com/duomot4hp/image/upload/v1784991847/WhatsApp_Image_2026-07-20_at_12.23.04_2_odplsd.jpg" 
                alt="Vista Nova" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>

          {/* DESNA STRANA: KLASIČNA KONTAKT FORMA */}
          <div className="lg:col-span-7 bg-[#1F3325]/90 border border-[#C19A5B]/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            
            {success ? (
              <div className="text-center py-12">
                <CheckCircle2 size={64} className="text-[#C19A5B] mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-[#F5EFE6] mb-2">
                  {activeLang === 'SRB' ? 'Poruka uspešno poslata!' : 'Message Sent Successfully!'}
                </h3>
                <p className="text-[#F5EFE6]/70 max-w-md mx-auto mb-6">
                  {activeLang === 'SRB' 
                    ? 'Hvala vam na interesovanju. Odgovorićemo vam u najkraćem mogućem roku.'
                    : 'Thank you for your interest. We will get back to you as soon as possible.'}
                </p>
                <button
                  onClick={() => { setSuccess(false); setFormData({ fullName: '', email: '', phone: '', message: '' }); }}
                  className="px-6 py-2.5 rounded-full border border-[#C19A5B] text-[#C19A5B] hover:bg-[#C19A5B] hover:text-[#1F3325] font-bold transition-all"
                >
                  {activeLang === 'SRB' ? 'Pošalji novu poruku' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Ime i Prezime */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#C19A5B] mb-2">
                      {activeLang === 'SRB' ? 'Ime i Prezime *' : 'Full Name *'}
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C19A5B]" />
                      <input 
                        type="text" 
                        required 
                        placeholder={activeLang === 'SRB' ? 'Vaše ime' : 'Your name'} 
                        value={formData.fullName} 
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#C19A5B] transition-colors" 
                      />
                    </div>
                  </div>

                  {/* Telefon */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#C19A5B] mb-2">
                      {activeLang === 'SRB' ? 'Broj Telefona' : 'Phone Number'}
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C19A5B]" />
                      <input 
                        type="tel" 
                        placeholder="+381 6X XXX XXXX" 
                        value={formData.phone} 
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#C19A5B] transition-colors" 
                      />
                    </div>
                  </div>
                </div>

                {/* Email (Puna širina) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C19A5B] mb-2">
                    {activeLang === 'SRB' ? 'E-mail Adresa *' : 'Email Address *'}
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C19A5B]" />
                    <input 
                      type="email" 
                      required 
                      placeholder="petar@gmail.com" 
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#C19A5B] transition-colors" 
                    />
                  </div>
                </div>

                {/* Poruka */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C19A5B] mb-2">
                    {activeLang === 'SRB' ? 'Vaša Poruka *' : 'Your Message *'}
                  </label>
                  <div className="relative">
                    <MessageSquare size={18} className="absolute left-4 top-4 text-[#C19A5B]" />
                    <textarea 
                      required
                      rows={5} 
                      placeholder={activeLang === 'SRB' ? 'Kako vam možemo pomoći?' : 'How can we help you?'} 
                      value={formData.message} 
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm text-white focus:outline-none focus:border-[#C19A5B] transition-colors resize-none" 
                    />
                  </div>
                </div>

                {errorMessage && (
                  <div className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/30 p-3 rounded-xl">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Dugme */}
                <button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full bg-[#C19A5B] hover:bg-[#d3ac6c] text-[#1F3325] font-bold py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#C19A5B]/20 flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      {activeLang === 'SRB' ? 'Šaljem poruku...' : 'Sending message...'}
                    </>
                  ) : (
                    <span>
                      <Send size={18} className="inline-block mr-2" />
                      {activeLang === 'SRB' ? 'Pošalji Poruku' : 'Send Message'}
                    </span>
                  )}
                </button>

              </form>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}