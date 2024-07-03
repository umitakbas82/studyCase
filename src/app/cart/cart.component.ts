import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cartModelDto';
import { SepetModel } from '../models/SepetMode';

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

  sepetOlustur()
  {
    let carttempList:CartItem[] =[];
    let sspModel:SepetModel = { sepetId:this.cartService.generateRandomString(10), productsList:carttempList}
    // let spModel ={
    //   sepetId:"blabla",
    //   productsList:CartItem[]
    // }
    this.cartService.sepetYarat(sspModel);
    
  }
}
