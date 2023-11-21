import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
// import { async } from '@angular/core/testing';
import { Products } from '../../models/ProductsInterface';
import { Router } from '@angular/router';
import { FavProducts } from '../../models/ProductsInterface';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: Products[] = [];

  constructor(private service: ProductService, private router: Router) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.service.getAllProducts().subscribe((response: any) => {
      // this.products = response;
      this.products = response.map(
        ({
          id,
          title: newTitle,
          description: newDescription,
          price,
          image,
          isFavorite,
        }: FavProducts) => {
          newTitle = newTitle.split(' ').slice(0, 5).join(' ');
          newDescription = newDescription.split(' ').slice(0, 12).join(' ');

          return {
            id,
            newTitle,
            newDescription,
            price,
            image,
            isFavorite: false,
          };
        }
      );
    });
  }

  productDetails(product: any) {
    // console.log(product.id);

    this.router.navigate(['/details/', product.id]);
    // this.router.navigate(['/details/'],);
  }
}
