import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  constructor(private service:DataService){}
  ngOnInit(): void{

    this.getProducts();
  }

  getProducts(){
    this.service.getAllProducts().subscribe((resp:any)=>{
      console.log(resp)
    })
  }
  
}
