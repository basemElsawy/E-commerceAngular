import { Component } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import {
  CartProducts,
  Products,
} from 'src/app/products/models/ProductsInterface';
@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css'],
})
export class CartsComponent {
  cartsMenu!: Products[];
  constructor(public sharedService: SharedService) {}

  ngOnInit() {}

  sideCloseHandler() {
    this.sharedService.isCartButton = false;
  }
  sideOpenHandler() {
    this.sharedService.isCartButton = true;
    // console.log(this.isCartButton);
  }
  closeSideMenu() {
    this.sharedService.isCartButton = false;
  }
}
