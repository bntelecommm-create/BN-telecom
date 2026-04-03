import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">BN</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">Telecom</span>
            </div>
            <p className="text-sm text-slate-500">
              {t.heroSubtitle}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">{t.services}</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link to="/services" className="hover:text-blue-600">{t.logistics}</Link></li>
              <li><Link to="/services" className="hover:text-blue-600">{t.warranty}</Link></li>
              <li><Link to="/services" className="hover:text-blue-600">{t.refurbished}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">{t.contact}</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>bntelecom@gmail.com</li>
              <li>+34 900 000 000</li>
              <li>Madrid, Spain</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 mt-8 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} BN Telecom. {t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
}
