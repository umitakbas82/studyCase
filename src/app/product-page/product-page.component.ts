import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { productModelDTO } from '../models/productModelDTO';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  constructor(private service:DataService){}
  ngOnInit(): void{

    this.getItems();
  }

  products: productModelDTO[] = [];

  getItems(){
    this.service.getProducts().subscribe((resp:any)=>{
      this.products=resp
      console.log(resp)
    })
  }
    
  
}
