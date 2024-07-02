import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductPageComponent } from './product-page/product-page.component';
import { CardModule } from 'primeng/card';
import {  ButtonModule } from 'primeng/button';
import { CartComponent } from './cart/cart.component';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MenubarComponent } from './menubar/menubar.component';
import { DialogModule } from 'primeng/dialog';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    CartComponent,
    ProductDetailsComponent,
    MenubarComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    DialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
