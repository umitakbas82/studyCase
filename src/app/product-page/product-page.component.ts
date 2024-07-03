import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { productModelDTO } from '../models/productModelDTO';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cartModelDto';
import { FavoritesService } from '../services/favorites.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SepetModel } from '../models/SepetMode';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  products: productModelDTO[] = [];
  items:CartItem[]=[]
  constructor(private service:DataService,private cartService:CartService,private wishlistService: FavoritesService, private router: Router,){}
 
 
  ngOnInit(): void{      
    
    
    this.getItems();
  }



  getItems(){
    this.service.getProducts().subscribe((resp:any)=>{
      this.products=resp
      console.log(resp)
    })
  }
  
  wishlistItem!:any;
  addToWishlist(product: productModelDTO) {
    console.log("Gelen ÜRÜN :" + product);
    if (product) {
       this.wishlistItem = {
        productId: product.productId,
        productName: product.productName,
        price: product.productPrice
      };
      this.wishlistService.addToWishlist(this.wishlistItem);
      alert(`${product.productName} favorilere eklendi!`);

      console.log("butona basıldı")
    }
  }


  viewProductDetails(productId: string){
    this.router.navigate(['/products', productId]);
  }
  addToCart(product: productModelDTO): void {
    var sepetler = this.cartService.sepetleriGetir();
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
          var randomid = this.cartService.generateRandomString(10)
          this.sepetOlustur(randomid);

          if (product) {

           // var mevcutSepetler= this.cartService.sepetleriGetir();
        
               const cartItem = { 
                 productId:product.productId.toString(),
                 productName: product.productName,
                 quantity: 1,
                 price: product.productPrice
               };
               this.cartService.addToCart(cartItem,randomid);
               alert(`${product.productName} sepete eklendi!`);
            
            
           }
        }
      else
      {
        if (product) {

          var mevcutSepetler= this.cartService.sepetleriGetir();
          console.log("Mevcut Sepetler ",mevcutSepetler);
          if(mevcutSepetler.length ==1)
           {
             const cartItem = { 
               productId:product.productId.toString(),
               productName: product.productName,
               quantity: 1,
               price: product.productPrice
             };
             this.cartService.addToCart(cartItem,mevcutSepetler[0].sepetId);
             alert(`${product.productName} sepete eklendi!`);
           }
          
         }
      }
   
  }

  product!:any
  getProduct(id: number) {
   this.product = this.products.find(p => p.productId === this.product);
   
  }
  visible: boolean = false;

    showDialog() {
        this.visible = true;
        console.log("Dialog geldi")
    }
  
    sepetOlustur(createdId:string)
    {
      let carttempList:CartItem[] =[];
      let sspModel:SepetModel = { sepetId:createdId, productsList:carttempList}
      // let spModel ={
      //   sepetId:"blabla",
      //   productsList:CartItem[]
      // }
      this.cartService.sepetYarat(sspModel);
      
    }
}


 
  

