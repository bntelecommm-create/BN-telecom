import { useLanguage } from '../contexts/LanguageContext';
import { Truck, Shield, RefreshCw, Clock, Globe2, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">{t.services}</h1>
          <p className="text-lg text-slate-600">
            Soluciones integrales diseñadas para optimizar la cadena de suministro de su negocio de telefonía móvil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logistics */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <Truck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">{t.logistics} Global Exprés</h3>
            <p className="text-slate-600 mb-6">
              Envíos asegurados y rápidos. Gestión aduanera simplificada.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Tracking en tiempo real
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Seguro a todo riesgo incluido
              </li>
            </ul>
          </div>

          {/* Warranty */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <Shield className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">{t.warranty} Extendida</h3>
            <p className="text-slate-600 mb-6">
              Todos nuestros dispositivos cuentan con garantía directa para su tranquilidad y la de sus clientes.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> 6 meses - 1 año según fabricante
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> RMA simplificado online
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Reemplazo rápido
              </li>
            </ul>
          </div>

          {/* Refurbished */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <RefreshCw className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Equipos {t.refurbished}</h3>
            <p className="text-slate-600 mb-6">
              Dispositivos Grado A/B testeados con software certificado (PhoneCheck/Blancco).
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-2 gap-8 border-t border-slate-200 pt-16 justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
            <div className="text-sm text-slate-600">Satisfacción B2B</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10k+</div>
            <div className="text-sm text-slate-600">Dispositivos en stock</div>
          </div>
        </div>
      </div>
    </div>
  );
}
