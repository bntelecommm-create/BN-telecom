import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Globe, ShieldCheck, TrendingUp, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-40 lg:py-56">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
              >
                {t.requestPriceList}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Brand Logos */}
            <img src="https://cdn.builder.io/api/v1/image/assets%2F3554714344224f479c956e442302085c%2F4ec03d0d725746d197208dc4c829dad1?format=webp&width=800&height=1200" alt="Apple" className="h-14 md:h-16 object-contain" />
            <img src="https://cdn.builder.io/api/v1/image/assets%2F3554714344224f479c956e442302085c%2F072577e8bbc842e7965d817abc45f025?format=webp&width=800&height=1200" alt="Samsung" className="h-14 md:h-16 object-contain" />
            <img src="https://cdn.builder.io/api/v1/image/assets%2F3554714344224f479c956e442302085c%2F30f31311525a41458680a2bf8f5163c1?format=webp&width=800&height=1200" alt="Xiaomi" className="h-14 md:h-16 object-contain" />
            <img src="https://cdn.builder.io/api/v1/image/assets%2F3554714344224f479c956e442302085c%2Fdcd95ece7ff14122be19dcaccf6f1344?format=webp&width=800&height=1200" alt="Huawei" className="h-14 md:h-16 object-contain" />
            <img src="https://cdn.builder.io/api/v1/image/assets%2F3554714344224f479c956e442302085c%2F3d5696493eb342218faa136c463ceccc?format=webp&width=800&height=1200" alt="Oppo" className="h-14 md:h-16 object-contain" />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{t.globalShipping}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.globalShippingDesc}
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{t.certifiedWarranty}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.certifiedWarrantyDesc}
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{t.dynamicPricing}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.dynamicPricingDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Multilingual Welcome */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">BN Telecom</h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            {t.welcomeMessage}
          </p>
          <a 
            href="/assets/stock-list.pdf" 
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition-colors"
          >
            <Download className="w-5 h-5" />
            {t.downloadStockPdf}
          </a>
        </div>
      </section>
    </div>
  );
}
