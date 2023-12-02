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
  cartsMenu: CartProducts[] = [];
  constructor(public sharedService: SharedService) {
    this.sharedService.cartsMenuSubject.subscribe((value) => {
      this.cartsMenu = value;
    });
  }

  ngOnInit() {
    // this.cartsMenu = JSON.parse(localStorage.getItem('cartItem') || '[]');
    this.sharedService.cartsMenuSubject.subscribe((value) => {
      this.cartsMenu = value;
    });
    this.cartsMenu = JSON.parse(localStorage.getItem('cartItem') || '[]');
  }

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
  decreaseProdQty(product: CartProducts) {
    if (product.itemQuantity < 1) return;
    product.itemQuantity--;
    let productIndexCartMenu = this.cartsMenu.findIndex(
      (item: CartProducts) => {
        return product.product.id === item.product.id;
      }
    );
    this.cartsMenu[productIndexCartMenu].itemQuantity = product.itemQuantity;

    localStorage.setItem('cartItem', JSON.stringify(this.cartsMenu));
  }
  increaseProdQty(product: CartProducts) {
    // debugger;
    if (product.itemQuantity > 29) return;
    product.itemQuantity++;
    console.log(product.itemQuantity);
    let productIndexCartMenu = this.cartsMenu.findIndex(
      (item: CartProducts) => {
        return product.product.id === item.product.id;
      }
    );
    this.cartsMenu[productIndexCartMenu].itemQuantity = product.itemQuantity;

    localStorage.setItem('cartItem', JSON.stringify(this.cartsMenu));
  }
  deleteFromCart(idx: number) {
    this.cartsMenu.splice(idx, 1);
    localStorage.setItem('cartItem', JSON.stringify(this.cartsMenu));
  }
}
