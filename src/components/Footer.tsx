import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">BN</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">Telecom</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {t.heroSubtitle}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">{t.catalog}</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/catalog?brand=apple" className="hover:text-blue-600 dark:hover:text-blue-400">{t.apple}</Link></li>
              <li><Link to="/catalog?brand=samsung" className="hover:text-blue-600 dark:hover:text-blue-400">{t.samsung}</Link></li>
              <li><Link to="/catalog?brand=xiaomi" className="hover:text-blue-600 dark:hover:text-blue-400">{t.xiaomi}</Link></li>
              <li><Link to="/catalog?brand=own" className="hover:text-blue-600 dark:hover:text-blue-400">{t.ownBrands}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">{t.services}</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400">{t.logistics}</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400">{t.warranty}</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400">{t.refurbished}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">{t.contact}</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>info@bntelecom.com</li>
              <li>+34 900 000 000</li>
              <li>Madrid, Spain</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} BN Telecom. {t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
}
