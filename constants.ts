import { Product, ProductCategory, FeatureItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '医用级高分子冷凝袋',
    category: ProductCategory.COLD,
    description: '采用航天级相变材料，持续低温释放，专门针对运动损伤与术后消肿。柔软贴合，不结冰硬化。',
    price: '¥89.00',
    features: ['持续降温45分钟', '柔软亲肤材质', '防漏双层封边'],
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800', 
    isBestSeller: true
  },
  {
    id: 'p2',
    name: '智能恒温热敷垫 Pro',
    category: ProductCategory.HEAT,
    description: '石墨烯发热技术，3秒速热。具有三档智能温控，自动断电保护，缓解腰背酸痛的理想选择。',
    price: '¥199.00',
    features: ['石墨烯远红外', '3档温控', '60分钟自动关机'],
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
    isNew: true
  },
  {
    id: 'p3',
    name: 'TENS/EMS 低频脉冲治疗仪',
    category: ProductCategory.PULSE,
    description: '双通道输出，模拟针灸、推拿、敲击等多种手法。有效阻断痛觉信号，促进肌肉放松。',
    price: '¥359.00',
    features: ['12种按摩模式', '20档强度调节', 'Type-C充电'],
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p4',
    name: '专业红光理疗灯',
    category: ProductCategory.LIGHT,
    description: '660nm红光与850nm近红外光组合，深入皮下组织，促进细胞再生，加速伤口愈合与炎症消退。',
    price: '¥599.00',
    features: ['双波段光谱', '可调节支架', '高辐照度'],
    imageUrl: 'https://images.unsplash.com/photo-1618939304348-256f0b4d4b1a?auto=format&fit=crop&q=80&w=800',
    isBestSeller: true
  },
  {
    id: 'p5',
    name: '全包裹空气波压力按摩器',
    category: ProductCategory.MASSAGE,
    description: '360度全包裹气囊，通过周期性充气放气，促进血液循环，预防静脉曲张，缓解腿部水肿。',
    price: '¥899.00',
    features: ['3种气压模式', '静音气泵', '腿部全覆盖'],
    imageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
    isNew: true
  },
  {
    id: 'p6',
    name: '肩颈专用热敷冷凝组合',
    category: ProductCategory.HEAT,
    description: '冷热双效合一设计，专为肩颈轮廓打造。配备加长绑带，解放双手，办公居家两不误。',
    price: '¥129.00',
    features: ['人体工学设计', '冷热两用', '加长固定带'],
    imageUrl: 'https://images.unsplash.com/photo-1606260275522-79352e424268?auto=format&fit=crop&q=80&w=800',
  }
];

export const NAV_ITEMS = [
  { label: '首页', href: '#' },
  { label: '全系产品', href: '#products' },
  { label: '核心技术', href: '#tech' },
  { label: '关于我们', href: '#about' },
];

export const FEATURES: FeatureItem[] = [
  {
    title: '医疗级认证',
    description: '所有产品均通过严格的医疗器械质量体系认证。',
    iconName: 'shield'
  },
  {
    title: '科技创新',
    description: '融合石墨烯、TENS脉冲等前沿康复科技。',
    iconName: 'chip'
  },
  {
    title: '贴心售后',
    description: '30天无理由退换，3年超长质保服务。',
    iconName: 'heart'
  }
];