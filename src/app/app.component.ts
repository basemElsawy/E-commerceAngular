import { Component, OnInit } from '@angular/core';
import { ProductService } from './products/service/product.service';
import { SharedService } from './shared/service/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private service: ProductService,
    public sharedService: SharedService
  ) {}

  ngOnInit() {}
  sideCloseHandler() {
    this.sharedService.isCartButton = false;
    this.sharedService.isFavButton = false;
  }
  flagHandler() {
    if (this.service.mainImageFlag) {
      this.service.mainImageFlag = false;
    } else {
      this.service.choicenProductImage.next(this.service.mainProductImage);
    }
  }
}
