import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartsComponent } from './shared/component/carts/carts.component';
import { AllProductsCartComponent } from './products/components/all-products-cart/all-products-cart.component';
import { HomepageComponent } from './products/components/homepage/homepage.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'carts', component: AllProductsCartComponent },
  { path: 'details/:id', component: ProductsDetailsComponent },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
