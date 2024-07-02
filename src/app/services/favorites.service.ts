import { Injectable } from '@angular/core';
import { favoriteItem } from '../models/favoriteModelDTO';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private items: favoriteItem[] = [];

  constructor() { }

  addToWishlist(product: favoriteItem): void {
    if (!this.items.find(item => item.productId === product.productId)) {
      this.items.push(product);
    }
  }

  removeFromWishlist(productId: number): void {
    this.items = this.items.filter(item => item.productId !== productId);
  }

  clearWishlist(): void {
    this.items = [];
  }

  getItems(): favoriteItem[] {
    return this.items;
  }
}
