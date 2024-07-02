import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { productModelDTO } from '../models/productModelDTO';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cartModelDto';
import { FavoritesService } from '../services/favorites.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  products: productModelDTO[] = [];
  items:CartItem[]=[]
  constructor(private service:DataService,private cartService:CartService,private wishlistService: FavoritesService, private route: ActivatedRoute,){}
 
 
  ngOnInit(): void{   

    this.getItems();
  }

  addFavorites(){   
    this.service.getProduct(productId).subscribe(product => {
      this.products = product;

  }
 

  getItems(){
    this.service.getProducts().subscribe((resp:any)=>{
      this.products=resp
      console.log(resp)
    })
  }
  

  // addToCart(product: productModelDTO): void {
  //   if (product) {
  //     const cartItem = {
  //       productId:items.id,
  //       productName: product.name,
  //       quantity: 1,
  //       price: product.price
  //     };
  //     this.cartService.addToCart(cartItem);
  //     alert(`${product.name} sepete eklendi!`);
  //   }
  // }
  visible: boolean = false;

    showDialog() {
        this.visible = true;
        console.log("Dialog geldi")
    }
  
}
