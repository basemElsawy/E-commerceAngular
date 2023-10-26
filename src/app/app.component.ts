import { Component, OnInit } from '@angular/core';
import { ProductService } from './products/service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private service: ProductService) {}

  ngOnInit() {}

  flagHandler() {
    console.log(this.service.mainImageFlag, 3);
    if (this.service.mainImageFlag) {
      this.service.mainImageFlag = false;
    } else {
      this.service.choicenProductImage.next(this.service.mainProductImage);
    }
  }
}
