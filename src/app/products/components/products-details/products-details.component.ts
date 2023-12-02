import {
  Component,
  SimpleChange,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { CartProducts, Products } from '../../models/ProductsInterface';
import { SharedService } from 'src/app/shared/service/shared.service';
import { FavProducts } from '../../models/ProductsInterface';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent {
  itemQuantity: number = 0;
  productDetailUrl: string = '';
  productId = this.route.snapshot.params['id'];
  favoritesToggle!: boolean;
  detailedProduct!: FavProducts;
  activeFavorite!: boolean;
  favoriteBtnToggle: boolean = false;
  mainImage!: string;
  imagePaths: string[] = [
    '../../../../assets/pic1.webp',
    '../../../../assets/pic2.webp',
    '../../../../assets/pic3.jpg',
  ];
  constructor(
    private favsService: SharedService,
    private route: ActivatedRoute,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    const hasFavList = localStorage.getItem('favoraitsProducts') ? true : false;
    let favoritesList;

    this.service.choicenProductImage.subscribe((data: string) => {
      this.mainImage = data;
    });
    this.service
      .getProductDetails(this.productId)
      .subscribe((response: any) => {
        response.isFavorite = false;
        this.detailedProduct = response;

        if (hasFavList) {
          favoritesList = JSON.parse(
            localStorage.getItem('favoraitsProducts') || '[]'
          )?.find(
            (product: any) => product.id === this.detailedProduct?.id
          )?.isFavorite;
          this.favoriteBtnToggle = favoritesList;
        }
        this.service.mainProductImage = this.detailedProduct?.image;
        this.service.choicenProductImage.next(this.detailedProduct?.image);
      });
    this.service.mainProductImage = this.detailedProduct?.image;
  }
  ngDoCheck() {
    this.favoriteBtnToggle = JSON.parse(
      localStorage.getItem('favoraitsProducts') || '[]'
    )?.find(
      (product: any) => product.id === this.detailedProduct?.id
    )?.isFavorite;
  }

  ngAfterViewInit(): void {
    this.detailedProduct;
  }

  favoritesHandler(choosedProduct: FavProducts): void {
    const hasFavTest = localStorage.getItem('favoraitsProducts') ? true : false;
    console.log(hasFavTest);
    // this.detailedProduct.isFavorite = true;
    if (hasFavTest) {
      //some code goes here

      let favoritesCollection: Products[] = JSON.parse(
        localStorage.getItem('favoraitsProducts') || '[]'
      );
      let FoundReapetedItem = favoritesCollection?.find((element: any) => {
        return element.id === this.detailedProduct.id;
      });
      if (FoundReapetedItem) {
        FoundReapetedItem = undefined;
        return;
      } else {
        this.detailedProduct.isFavorite = true;

        this.detailedProduct.isFavorite = true;
        favoritesCollection?.push(this.detailedProduct);
        localStorage.setItem(
          'favoraitsProducts',
          JSON.stringify(favoritesCollection)
        );
        this.favsService.favoritesSubject.next(
          JSON.parse(localStorage.getItem('favoraitsProducts') || '[]')
        );
      }
    } else {
      let favoritesCollection: Products[] = [];
      this.detailedProduct.isFavorite = true;

      this.detailedProduct.isFavorite = true;
      favoritesCollection?.push(this.detailedProduct);
      localStorage.setItem(
        'favoraitsProducts',
        JSON.stringify(favoritesCollection)
      );

      this.favsService.favoritesSubject.next(
        JSON.parse(localStorage.getItem('favoraitsProducts') || '[]')
      );
    }

    this.detailedProduct.isFavorite = true;
    this.favoriteBtnToggle = this.detailedProduct.isFavorite;
  }

  imageHandler(image: string) {
    this.service.mainImageFlag = true;
    this.service.choicenProductImage.next(image);
  }
  addProduct() {
    this.itemQuantity++;
    if (this.itemQuantity >= 31) this.itemQuantity = 0;
  }
  subtractProduct() {
    if (this.itemQuantity <= 1) this.itemQuantity = 31;
    this.itemQuantity--;
  }
  addToCart(product: Products) {
    let hasCartItems: boolean = localStorage.getItem('cartItem') ? true : false;

    let productRef: CartProducts = {
      product,
      itemQuantity: this.itemQuantity,
    };

    let cartItems: CartProducts[];
    if (hasCartItems) {
      let repeatedItem: CartProducts = JSON.parse(
        localStorage.getItem('cartItem') || '[]'
      ).find(
        (item: CartProducts) => item.product.id === this.detailedProduct?.id
      );
      if (repeatedItem) {
        cartItems = JSON.parse(localStorage.getItem('cartItem') || '[]');

        let repeatedIndex = cartItems.findIndex(
          (cartItem) => cartItem.product.id === repeatedItem.product.id
        );

        cartItems[repeatedIndex].itemQuantity += this.itemQuantity;
        localStorage.setItem('cartItem', JSON.stringify(cartItems));
        let storedData = JSON.parse(localStorage.getItem('cartItem') || '[]');
        this.favsService.cartsMenuSubject.next(storedData);
        this.itemQuantity = 0;
      } else {
        cartItems = JSON.parse(localStorage.getItem('cartItem') || '[]');

        cartItems.push(productRef);
        localStorage.setItem('cartItem', JSON.stringify(cartItems));
        let storedData = JSON.parse(localStorage.getItem('cartItem') || '[]');
        this.favsService.cartsMenuSubject.next(storedData);
      }
    } else {
      cartItems = [];
      let productRef: CartProducts = {
        product,
        itemQuantity: this.itemQuantity,
      };

      cartItems.push(productRef);
      localStorage.setItem('cartItem', JSON.stringify(cartItems));
      let storedData = JSON.parse(localStorage.getItem('cartItem') || '[]');
      this.favsService.cartsMenuSubject.next(storedData);
      this.itemQuantity = 0;
    }
    this.itemQuantity = 0;
  }
}

/*



        // let itemIndexQuantity =
        //   this.itemQuantity - cartItems[repeatedIndex].itemQuantity;

    // let storedCartItems: Products[] = JSON.parse(
    //   localStorage.getItem('cartItem') || '[]'
    // );
    // let hasCartItem = storedCartItems ? true : false;
    // if (hasCartItem) {
    //   let repeatedItem = storedCartItems.find(
    //     (value: Products) => value.id === product.id
    //   );
    //   if (repeatedItem) {
    //     repeatedItem = undefined;
    //     return;
    //   } else {
    //     storedCartItems.push(product);
    //     localStorage.setItem('cartItem', JSON.stringify(storedCartItems));
    //   }
    // } else {
    //   storedCartItems = [];
    //   storedCartItems.push(product);
    //   localStorage.setItem('cartItem', JSON.stringify(storedCartItems));
    // }















































*/
