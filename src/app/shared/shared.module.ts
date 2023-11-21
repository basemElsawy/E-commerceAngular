import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from '../products/products.module';
// import { CartsModule } from '../carts/carts.module';

import { CartsComponent } from './component/carts/carts.component';
import { FavoritesComponent } from './component/favorites/favorites.component';
import { SharedService } from './service/shared.service';
import { TogglebuttonsComponent } from './component/togglebuttons/togglebuttons.component';
import { ProductsListComponent } from './component/products-list/products-list.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FavoritesComponent,
    CartsComponent,
    TogglebuttonsComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ProductsModule,
  ],
  exports: [
    HeaderComponent,
    ProductsModule,
    FavoritesComponent,
    CartsComponent,
  ],
  providers: [SharedService],
})
export class SharedModule {}
