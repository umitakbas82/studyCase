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
  sepetitem:SepetModel[]=[]
productsList: any;

  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
    this.sepetitem=this.cartService.sepetleriGetir()
    console.log("gelen sepet item",this.sepetitem)
    console.log("gelmesi gereken",this.items)
   
    
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
    console.log("butona basıldı")
  }


  increaseQuantity(productId: string): void {
    this.cartService.increaseQuantity(productId);
    this.total = this.cartService.getTotal();
  }

  decreaseQuantity(productId: string): void {
    this.cartService.decreaseQuantity(productId);
    this.total = this.cartService.getTotal();
  }
  // sepetgelen(){
  //   this.
  // }

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

