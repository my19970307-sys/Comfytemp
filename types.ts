export enum ProductCategory {
  COLD = 'COLD',
  HEAT = 'HEAT',
  PULSE = 'PULSE',
  LIGHT = 'LIGHT',
  MASSAGE = 'MASSAGE'
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: string;
  features: string[];
  imageUrl: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}