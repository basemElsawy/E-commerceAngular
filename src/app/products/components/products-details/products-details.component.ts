import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Products } from '../all-products/ProductsInterface';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent {
  productDetailUrl: string = '';
  productId = this.route.snapshot.params['id'];
  favoritesToggle: boolean = false;
  detailedProduct!: Products;
  mainImage!: string;
  imagePaths: string[] = [
    '../../../../assets/pic1.webp',
    '../../../../assets/pic2.webp',
    '../../../../assets/pic3.jpg',
  ];
  constructor(private route: ActivatedRoute, private service: ProductService) {}

  ngOnInit() {
    this.service.choicenProductImage.subscribe((data: string) => {
      this.mainImage = data;
    });
    this.service
      .getProductDetails(this.productId)
      .subscribe((response: any) => {
        this.detailedProduct = response;
        console.log(this.detailedProduct);
        this.service.mainProductImage = this.detailedProduct.image;
        this.service.choicenProductImage.next(this.detailedProduct.image);
      });

    this.service.mainProductImage = this.detailedProduct.image;
  }
  favoritesHandler() {
    this.favoritesToggle = !this.favoritesToggle;
  }
  imageHandler(image: string) {
    console.log(this.service.mainImageFlag, 1);

    this.service.mainImageFlag = true;
    this.service.choicenProductImage.next(image);
    console.log(this.service.mainImageFlag, 2);
  }
}
