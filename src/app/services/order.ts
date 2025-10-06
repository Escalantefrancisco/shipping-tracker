import { Injectable } from '@angular/core';
import { Order, OrderStatus } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private orders: Order[] = [];
  private nextId = 1;

  create(order: Omit<Order, 'packageNumber' | 'status' | 'updates'>): Order {
    const newOrder: Order = {
      ...order,
      packageNumber: this.generatePackageNumber(),
      status: 'Creado',
      updates: []
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  getByPackageNumber(packageNumber: string): Order | undefined {
    return this.orders.find(o => o.packageNumber === packageNumber);
  }

  updateStatus(packageNumber: string, status: OrderStatus, comment: string, responsible: string): Order | undefined {
    const order = this.getByPackageNumber(packageNumber);
    if (!order) return undefined;
    order.status = status;
    order.updates.push({ status, comment, responsible, date: new Date().toISOString() });
    return order;
  }

  private generatePackageNumber(): string {
    return 'PKG-' + (this.nextId++).toString().padStart(6, '0');
  }
}
