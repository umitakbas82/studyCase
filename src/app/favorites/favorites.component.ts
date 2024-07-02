import { Component } from '@angular/core';
import { favoriteItem } from '../models/favoriteModelDTO';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})


export class FavoritesComponent {
  items: favoriteItem[] = [];

  constructor(private favoriteService: FavoritesService) { }

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
}
