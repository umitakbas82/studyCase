import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  {path:"",component:ProductPageComponent},
  {path:"cart",component:CartComponent},
  {path: 'products/:id', component: ProductDetailsComponent },
  {path:"favoriler",component:FavoritesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
