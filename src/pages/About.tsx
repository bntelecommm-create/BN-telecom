import { useLanguage } from '../contexts/LanguageContext';
import { Users, Target, Award, Building2 } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 lg:py-24">
      <div className="container mx-auto px-4">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Conectando el Mundo a través de la Tecnología
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Desde nuestra fundación, BN Telecom se ha establecido como un pilar fundamental en la distribución mayorista de dispositivos móviles, sirviendo a clientes en Europa, África y Medio Oriente.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-8 text-blue-600 dark:text-blue-400">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Nuestra Misión</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Proporcionar a nuestros socios comerciales acceso inmediato a la mejor tecnología móvil con precios competitivos, garantizando una logística impecable y un servicio de atención al cliente excepcional en múltiples idiomas.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-8 text-blue-600 dark:text-blue-400">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Nuestra Visión</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Ser el distribuidor B2B líder a nivel global, reconocido por nuestra transparencia, fiabilidad y capacidad para adaptarnos a las dinámicas cambiantes del mercado tecnológico internacional.
            </p>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8 text-blue-400">
                <Building2 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Infraestructura Global</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Operamos desde almacenes estratégicamente ubicados para garantizar tiempos de entrega mínimos. Nuestro equipo multicultural nos permite entender y atender las necesidades específicas de cada mercado local.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Sede central en Madrid, España
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Hubs logísticos en puntos clave europeos
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Soporte nativo en Español, Inglés, Francés y Árabe
                </li>
              </ul>
            </div>
            <div className="bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center min-h-[400px]">
              <div className="w-full h-full bg-slate-900/20 backdrop-blur-[2px]"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
