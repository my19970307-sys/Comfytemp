import React, { useState } from 'react';
import { PRODUCTS, NAV_ITEMS, FEATURES } from './constants';
import { ProductCategory, Product } from './types';

// --- Icons Components ---
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const ShoppingBagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
);
const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

// Feature Icons
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);
const CpuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
);
const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
);

// --- Helper Functions ---
const getIconByName = (name: string) => {
  switch (name) {
    case 'shield': return <ShieldIcon />;
    case 'chip': return <CpuIcon />;
    case 'heart': return <HeartIcon />;
    default: return <ShieldIcon />;
  }
};

const getCategoryLabel = (cat: ProductCategory) => {
  switch (cat) {
    case ProductCategory.COLD: return '冰敷冷疗';
    case ProductCategory.HEAT: return '热敷理疗';
    case ProductCategory.PULSE: return '脉冲按摩';
    case ProductCategory.LIGHT: return '光疗修复';
    case ProductCategory.MASSAGE: return '气压按摩';
    default: return cat;
  }
};

// --- Components ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">PhysioCare</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="text-slate-500 hover:text-slate-900"><SearchIcon /></button>
          <button className="text-slate-500 hover:text-slate-900 relative">
            <ShoppingBagIcon />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full">0</span>
          </button>
          <button className="md:hidden text-slate-900">
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <div className="relative overflow-hidden bg-slate-50 pt-16 pb-32 lg:pt-24 lg:pb-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-800 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2"></span>
            全新一代智能理疗系列现已上市
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            专业康复理疗 <br />
            <span className="text-brand-600">触手可及</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
            PhysioCare 致力于将医院级康复技术带入家庭。无论是运动恢复、慢痛管理还是日常放松，我们为您提供科学、安全、高效的解决方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="inline-flex justify-center items-center px-8 py-3.5 text-base font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200">
              探索产品
            </a>
            <a href="#tech" className="inline-flex justify-center items-center px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              了解技术
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-100 to-slate-200 overflow-hidden shadow-2xl relative">
             <img 
               src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200" 
               alt="Professional Physiotherapy"
               className="object-cover w-full h-full mix-blend-overlay opacity-80"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
             <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-semibold text-lg">科技赋能健康</p>
                <p className="text-sm opacity-90">Science-backed Recovery</p>
             </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-500/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  </div>
);

const CategoryFilter = ({ 
  currentCategory, 
  onCategoryChange 
}: { 
  currentCategory: ProductCategory | 'ALL', 
  onCategoryChange: (c: ProductCategory | 'ALL') => void 
}) => {
  const categories = [
    { id: 'ALL', label: '全部产品' },
    ...Object.values(ProductCategory).map(cat => ({ id: cat, label: getCategoryLabel(cat) }))
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-12">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id as ProductCategory | 'ALL')}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
            currentCategory === cat.id
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
    <div className="relative aspect-square overflow-hidden bg-slate-100">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
      {product.isNew && (
        <span className="absolute top-3 left-3 bg-brand-500 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
          NEW
        </span>
      )}
      {product.isBestSeller && (
        <span className="absolute top-3 left-3 bg-warm-500 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
          HOT
        </span>
      )}
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="text-xs font-semibold text-brand-600 mb-2 uppercase tracking-wide">
        {getCategoryLabel(product.category)}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
      <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.description}</p>
      
      <div className="space-y-2 mb-6">
        {product.features.slice(0, 2).map((feat, idx) => (
          <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
            <CheckCircleIcon />
            <span>{feat}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between">
        <span className="text-xl font-bold text-slate-900">{product.price}</span>
        <button className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors">
          查看详情
        </button>
      </div>
    </div>
  </div>
);

const FeaturesSection = () => (
  <section id="tech" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">为什么选择 PhysioCare</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">我们坚持以医学标准研发每一款民用产品，确保安全与疗效。</p>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {FEATURES.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-100 transition-colors">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-600 shadow-sm mb-6 border border-slate-100">
              {getIconByName(feature.iconName)}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4 text-white">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center font-bold">P</div>
            <span className="text-xl font-bold">PhysioCare</span>
          </div>
          <p className="text-sm text-slate-400 max-w-sm mb-6">
            专注于家庭康复理疗设备研发，为数百万家庭带来专业的健康护理体验。
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">产品系列</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-brand-400">冷敷系列</a></li>
            <li><a href="#" className="hover:text-brand-400">热敷系列</a></li>
            <li><a href="#" className="hover:text-brand-400">低频脉冲</a></li>
            <li><a href="#" className="hover:text-brand-400">红光理疗</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">联系我们</h4>
          <ul className="space-y-2 text-sm">
            <li>客服热线: 400-123-4567</li>
            <li>邮箱: support@physiocare.com</li>
            <li>工作时间: 周一至周日 9:00-21:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2024 PhysioCare Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-300">隐私政策</a>
          <a href="#" className="hover:text-slate-300">服务条款</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'ALL'>('ALL');

  const filteredProducts = activeCategory === 'ALL' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <main id="products" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">精选产品</h2>
          <p className="text-slate-600">针对不同部位与症状的专业解决方案</p>
        </div>

        <CategoryFilter 
          currentCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            该分类下暂无产品
          </div>
        )}
      </main>

      <FeaturesSection />
      <Footer />
    </div>
  );
}