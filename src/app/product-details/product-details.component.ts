import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  constructor(
    private route: ActivatedRoute,
    private productService: DataService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(productId).subscribe(product => {
      
    });
  }
}
