
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  location: string;
  farmer: string;
  image: string;
  available: boolean;
}

export interface MarketInsight {
  commodity: string;
  currentPrice: string;
  trend: 'up' | 'down' | 'stable';
  source: string;
  link?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
