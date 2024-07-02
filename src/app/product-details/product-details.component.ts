import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';
import { productModelDTO } from '../models/productModelDTO';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  products: productModelDTO[] = [];
  constructor(
    private route: Router,
    private productService: DataService,
    
  ) { }

  productId:any
  ngOnInit(): void {
   
   
      
    
  }

  
}
