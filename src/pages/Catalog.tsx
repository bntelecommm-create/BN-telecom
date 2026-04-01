import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Search, Filter, Download, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Catalog() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for B2B catalog
  const products = [
    { id: 1, brand: 'Apple', model: 'iPhone 15 Pro Max', storage: '256GB', condition: 'New', region: 'EU Spec', color: 'Natural Titanium', stock: '500+' },
    { id: 2, brand: 'Apple', model: 'iPhone 15 Pro', storage: '128GB', condition: 'New', region: 'EU Spec', color: 'Blue Titanium', stock: '1000+' },
    { id: 3, brand: 'Apple', model: 'iPhone 14 Pro', storage: '128GB', condition: 'Grade A', region: 'US Spec', color: 'Deep Purple', stock: '250' },
    { id: 4, brand: 'Samsung', model: 'Galaxy S24 Ultra', storage: '512GB', condition: 'New', region: 'Global', color: 'Titanium Gray', stock: '300' },
    { id: 5, brand: 'Samsung', model: 'Galaxy S23', storage: '256GB', condition: 'Grade A', region: 'EU Spec', color: 'Phantom Black', stock: '150' },
    { id: 6, brand: 'Xiaomi', model: '14 Pro', storage: '256GB', condition: 'New', region: 'Global', color: 'Black', stock: '400' },
    { id: 7, brand: 'Apple', model: 'AirPods Pro 2', storage: '-', condition: 'New', region: 'EU Spec', color: 'White', stock: '2000+' },
    { id: 8, brand: 'Samsung', model: 'Galaxy Z Fold 5', storage: '512GB', condition: 'New', region: 'Global', color: 'Icy Blue', stock: '100' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t.catalog}</h1>
            <p className="text-slate-600 dark:text-slate-400">Stock actualizado en tiempo real.</p>
          </div>
          
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm">
            <Download className="w-4 h-4" />
            {t.downloadStockPdf}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-lg flex items-center gap-2 text-slate-900 dark:text-white">
                  <Filter className="w-5 h-5" />
                  {t.filters}
                </h2>
                <button className="text-sm text-blue-600 hover:underline">{t.clearFilters}</button>
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder={t.search}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
                    />
                  </div>
                </div>

                {/* Brand Filter */}
                <div>
                  <h3 className="font-semibold text-sm mb-3 text-slate-900 dark:text-white">{t.brand}</h3>
                  <div className="space-y-2">
                    {['Apple', 'Samsung', 'Xiaomi', 'Huawei'].map(brand => (
                      <label key={brand} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Condition Filter */}
                <div>
                  <h3 className="font-semibold text-sm mb-3 text-slate-900 dark:text-white">{t.condition}</h3>
                  <div className="space-y-2">
                    {[t.new, t.gradeA, t.gradeB].map(condition => (
                      <label key={condition} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{condition}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Region Filter */}
                <div>
                  <h3 className="font-semibold text-sm mb-3 text-slate-900 dark:text-white">{t.region}</h3>
                  <div className="space-y-2">
                    {[t.euSpec, t.usSpec, 'Global'].map(region => (
                      <label key={region} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{region}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product List */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                    <tr>
                      <th className="px-6 py-4 font-semibold">{t.brand} / Modelo</th>
                      <th className="px-6 py-4 font-semibold">{t.storage}</th>
                      <th className="px-6 py-4 font-semibold">{t.condition}</th>
                      <th className="px-6 py-4 font-semibold">{t.region}</th>
                      <th className="px-6 py-4 font-semibold text-right">Stock</th>
                      <th className="px-6 py-4 font-semibold text-right">Precio (MSRP)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {products.map((product) => (
                      <tr key={product.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium text-slate-900 dark:text-white">{product.model}</div>
                          <div className="text-xs text-slate-500">{product.brand} • {product.color}</div>
                        </td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{product.storage}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            product.condition === 'New' 
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          }`}>
                            {product.condition === 'New' ? t.new : product.condition}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{product.region}</td>
                        <td className="px-6 py-4 text-right font-medium text-slate-900 dark:text-white">{product.stock}</td>
                        <td className="px-6 py-4 text-right">
                          <Link to="/login" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-xs bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md">
                            <Lock className="w-3 h-3" />
                            Ver Precio
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
