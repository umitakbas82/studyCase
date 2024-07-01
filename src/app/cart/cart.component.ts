import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cartModelDto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {

  items: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.items = [];
    this.total = 0;
  }
}
