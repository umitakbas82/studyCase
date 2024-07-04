import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartModelDto';
import { SepetModel } from '../models/SepetMode';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private items: CartItem[] = [];
  private sepetler :SepetModel[]=[];
  constructor() { }

  addToCart(product: any,sepetId:string): void {
    
    //gönderilen speti al
    var eklenecekSepet =this.sepetler.find(item => item.sepetId === sepetId);
    if(eklenecekSepet ==null)
      {
        console.error("Sepet bulunamadı!");
        return;
      }


      eklenecekSepet.productsList.push(product);
      
    
      localStorage.setItem(sepetId,JSON.stringify(this.sepetler));
      
  }


  sepetYarat(sepo :SepetModel)
  {
    //Bi bak bakalım sepet var mı ?

    //sepet oluştur
    console.log("Sepet Yarat Çalıştı",sepo);
    // let bosSpetModel:SepetModel[] = []
    // let ttm={productId:0,productName:"-",quantity:0,price:0};
    // sepo.productsList.push(ttm);
    // bosSpetModel.push(sepo)
    this.sepetler.push(sepo);
  //   localStorage.setItem(sepo.sepetId,JSON.stringify(sepo.productsList));
  //   // Object.keys(localStorage).forEach((key) => {
  //   //   const value = localStorage.getItem(key);
  //   //   console.log("Mevcut storage listeleri :",`${key}: ${value}`);
  //   //    });

    
  //   let sepetlerListesi:SepetModel[]=[];
  //   Object.keys(localStorage).forEach((key) => {
  //     const value = localStorage.getItem(key);
  //     if (value) {
  //         try {
  //             // JSON.parse işlemiyle elde edilen değerin SepetModel formatında olup olmadığını kontrol edin
  //             const parsedValue:SepetModel = JSON.parse(value);
  //            if(parsedValue.productsList ===null)
  //             {
  //               console.log("BOŞ GELDİ HAJIM!");
  //             }
  //             console.log("parsedvalue :" + value);
              
  //             const sepetModel: SepetModel = {sepetId:key, productsList:parsedValue};
  //             sepetlerListesi.push(sepetModel);
  //             console.log("Eklendi!!!!!!");
             
  //         } catch (error) {
  //             console.error(`Error parsing key "${key}":`, error);
  //         }
  //     }
  // });
      // console.log("Mevcut storage listeleri :",sepetlerListesi);

  }

  

  sepetleriGetir():SepetModel[]
  {
  //  let sepetlerListesi = Object.keys(localStorage).forEach((key) => {
  //     const value = localStorage.getItem(key);
  //    // console.log("Mevcut storage listeleri :",`${key}: ${value}`);
  //      });
  //      console.log("Mevcut storage listeleri :",sepetlerListesi);
    
    return this.sepetler;
  }
  getItems(): CartItem[] {
    //sepetid
    
    //spetid ifle kontrol et localstorage den bul arraya ekle

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

    generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
     return result;
    }

    increaseQuantity(productId: string): void {
      const item = this.items.find(item => item.productId === productId);
      if (item) {
        item.quantity++;
      }
    }
  
    decreaseQuantity(productId: string): void {
      const item = this.items.find(item => item.productId === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    }
}
