import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartModelDto';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];
  constructor() { }

  addToCart(product: CartItem): void {
    const existingItem = this.items.find(item => item.productId === product.productId);
    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      this.items.push(product);
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  removeFromCart(productId: number): void {
    this.items = this.items.filter(item => item.productId !== productId);
  }

  clearCart(): void {
    this.items = [];
  }
}
