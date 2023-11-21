import { Injectable, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { FavProducts } from 'src/app/products/models/ProductsInterface';
import { Products } from 'src/app/products/models/ProductsInterface';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isCartButton: boolean = false;
  isFavButton: boolean = false;
  favAndCartToggle = false;
  uiFavoritesDisplay: FavProducts[] = [];
  favoritesSubject: Subject<FavProducts[]> = new Subject<FavProducts[]>();
  favoriteRemoveSubj: Subject<boolean> = new Subject<boolean>();
  constructor() {}
  getFavoriteProds() {
    return this.favoritesSubject.asObservable();
  }
}
