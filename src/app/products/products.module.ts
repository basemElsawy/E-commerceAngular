import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { AllProductsCartComponent } from './components/all-products-cart/all-products-cart.component';

@NgModule({
  declarations: [AllProductsComponent, ProductsDetailsComponent, AllProductsCartComponent],
  imports: [CommonModule],
  exports: [AllProductsComponent, ProductsDetailsComponent],
})
export class ProductsModule {}
