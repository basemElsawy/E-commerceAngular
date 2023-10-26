import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Params } from '@angular/router';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = environment.baseUrl;
  mainImageFlag: boolean = false;
  mainProductImage: string = '';
  choicenProductImage: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(this.url);
  }

  getProductDetails(id: Params) {
    return this.http.get(this.url + id);
  }
}
