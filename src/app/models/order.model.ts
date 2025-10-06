export type OrderStatus = 'Creado' | 'en preparación' | 'en transito' | 'entregado' | 'no entregado';

export interface OrderUpdate {
  status: OrderStatus;
  comment: string;
  responsible: string;
  date: string;
}

export interface Order {
  packageNumber: string;
  senderName: string;
  deliveryAddress: string;
  email: string;
  description: string;
  status: OrderStatus;
  updates: OrderUpdate[];
}
