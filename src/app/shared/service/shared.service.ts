import { Injectable, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import {
  CartProducts,
  FavProducts,
} from 'src/app/products/models/ProductsInterface';
import { Products } from 'src/app/products/models/ProductsInterface';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isCartButton: boolean = false;
  isFavButton: boolean = false;
  favAndCartToggle = false;
  cartsMenuSubject: Subject<CartProducts[]> = new Subject<CartProducts[]>();
  uiFavoritesDisplay: FavProducts[] = [];
  favoritesSubject: Subject<FavProducts[]> = new Subject<FavProducts[]>();
  favoriteRemoveSubj: Subject<boolean> = new Subject<boolean>();
  // cartMenu!: CartProducts[];
  constructor() {}
  getFavoriteProds() {
    return this.favoritesSubject.asObservable();
  }
  getCartItems() {
    return this.cartsMenuSubject.asObservable();
  }
}
