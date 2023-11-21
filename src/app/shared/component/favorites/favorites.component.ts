import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import {
  FavProducts,
  Products,
} from 'src/app/products/models/ProductsInterface';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  // favoritesMenuToggle: boolean = true;
  favoritesMenu: FavProducts[] = [];
  favoriteSubscription!: Subscription;
  choosenFavorite!: FavProducts;
  // favoritesBackup: FavProducts[] = localStorage.getItem('favoraitsProducts');
  constructor(public sharedService: SharedService, private router: Router) {
    this.sharedService.favoritesSubject.subscribe((value: FavProducts[]) => {
      this.favoritesMenu = value;
    });
  }

  ngOnInit(): void {
    this.favoritesMenu = JSON.parse(
      localStorage.getItem('favoraitsProducts') || '[]'
    );
  }

  sideCloseHandler() {
    this.sharedService.isFavButton = false;
  }
  sideOpenHandler() {
    this.sharedService.isFavButton = true;
  }
  navigateToProd(product: any) {
    this.router.navigate(['details/', product.id]);
    this.sharedService.isFavButton = false;
    this.sharedService.isCartButton = false;
  }
  removeFavorite(index: number, selectedFavProduct: FavProducts) {
    selectedFavProduct.isFavorite = false;
    this.favoritesMenu.splice(index, 1);

    localStorage.setItem(
      'favoraitsProducts',
      JSON.stringify(this.favoritesMenu)
    );
  }
  closeModal() {
    this.sharedService.isFavButton = false;
  }
}

// this.favoriteSubscription = this.sharedService
//   .getFavoriteProds()
//   .subscribe((value) => {
//     console.log(value);
//   });
