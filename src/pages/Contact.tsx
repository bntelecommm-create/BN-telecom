import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    companyName: '',
    vatNumber: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const getWhatsAppLink = () => {
    const base = "https://wa.me/34900000000";
    const messages = {
      es: "?text=Hola,%20me%20gustaría%20solicitar%20el%20catálogo%20de%20precios%20para%20mayoristas.",
      en: "?text=Hello,%20I%20would%20like%20to%20request%20the%20wholesale%20price%20catalog.",
      fr: "?text=Bonjour,%20je%20souhaite%20demander%20le%20catalogue%20de%20prix%20de%20gros.",
      ar: "?text=مرحباً،%20أود%20طلب%20كتالوج%20أسعار%20الجملة."
    };
    return `${base}${messages[language]}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.contact}</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t.companyRegistration} - Únete a nuestra red global de distribuidores y accede a precios exclusivos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Información de Contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Sede Central</h3>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">Av. de la Innovación 123<br/>28001 Madrid, España</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Teléfono (B2B Sales)</h3>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">+34 900 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">sales@bntelecom.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                  <a 
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-xl font-bold transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-6 h-6" />
                    {t.chatWithSales}
                  </a>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Solicitud de Alta</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.companyName} *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                      placeholder="Ej: Tech Solutions S.L."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.vatNumber} *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.vatNumber}
                      onChange={(e) => setFormData({...formData, vatNumber: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                      placeholder="Ej: B12345678"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.email} *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                      placeholder="compras@empresa.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.phone} *</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Mensaje Adicional</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none"
                    placeholder="Volumen de compra estimado, marcas de interés..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold transition-colors shadow-sm"
                >
                  {t.register}
                </button>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-4">
                  Al registrarse, verificaremos su CIF/VAT para confirmar que es un distribuidor B2B autorizado.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
