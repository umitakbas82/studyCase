import { Component } from '@angular/core';
import { favoriteItem } from '../models/favoriteModelDTO';
import { FavoritesService } from '../services/favorites.service';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cartModelDto';
import { SepetModel } from '../models/SepetMode';
import { productModelDTO } from '../models/productModelDTO';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})


export class FavoritesComponent {
  items: favoriteItem[] = [];

  constructor(private favoriteService: FavoritesService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.items = this.favoriteService.getItems();
  }
 

  removeFromList(productId: number) {
    this.favoriteService.removeFromWishlist(productId);
    this.items = this.favoriteService.getItems();
  }

  clearList() {
    this.favoriteService.clearWishlist();
    this.items = [];
  }

  addToCart(product: productModelDTO): void {
    var sepetler = this.cartservice.sepetleriGetir();
    if(sepetler.length >1)
      {
        console.log("Aha bukadar sepet buldum :" + sepetler.length.toString())
        //burada modalı çıkar
        //sepeti seçtir!!!!

        // const cartItem = { 
        //   productId:product.productId.toString(),
        //   productName: product.productName,
        //   quantity: 1,
        //   price: product.productPrice
        // };
     //   this.cartService.addToCart(cartItem,modaldanGelenSseçilenSepetid);
      
     
     
     //sepet seçimi tamam sepetid ye productsListe puush et!!!
      }
       else if(sepetler.length ===0)
        {
          //sepet yok yeni sepet yarat!!
          var randomid = this.cartservice.generateRandomString(10)
          this.sepetOlustur(randomid);

          if (product) {

           // var mevcutSepetler= this.cartService.sepetleriGetir();
        
               const cartItem = { 
                 productId:product.productId.toString(),
                 productName: product.productName,
                 quantity: 1,
                 price: product.productPrice
               };
               this.cartservice.addToCart(cartItem,randomid);
               alert(`${product.productName} sepete eklendi!`);
            
            
           }
        }
      else
      {
        if (product) {

          var mevcutSepetler= this.cartservice.sepetleriGetir();
          console.log("Mevcut Sepetler ",mevcutSepetler);
          if(mevcutSepetler.length ==1)
           {
             const cartItem = { 
               productId:product.productId.toString(),
               productName: product.productName,
               quantity: 1,
               price: product.productPrice
             };
             this.cartservice.addToCart(cartItem,mevcutSepetler[0].sepetId);
             alert(`${product.productName} sepete eklendi!`);
           }
          
         }
      }
   
  }

  sepetOlustur(createdId:string)
    {
      let carttempList:CartItem[] =[];
      let sspModel:SepetModel = { sepetId:createdId, productsList:carttempList}
      // let spModel ={
      //   sepetId:"blabla",
      //   productsList:CartItem[]
      // }
      this.cartservice.sepetYarat(sspModel);
      
    }
}
