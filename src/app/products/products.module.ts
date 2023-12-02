import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { AllProductsCartComponent } from './components/all-products-cart/all-products-cart.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [AllProductsComponent, ProductsDetailsComponent, AllProductsCartComponent, HeroSectionComponent, HomepageComponent],
  imports: [CommonModule],
  exports: [AllProductsComponent, ProductsDetailsComponent],
})
export class ProductsModule {}
