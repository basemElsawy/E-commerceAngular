import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartsComponent } from './shared/component/carts/carts.component';
import { AllProductsCartComponent } from './products/components/all-products-cart/all-products-cart.component';
const routes: Routes = [
  { path: 'products', component: AllProductsComponent },
  { path: 'carts', component: AllProductsCartComponent },
  { path: 'details/:id', component: ProductsDetailsComponent },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
