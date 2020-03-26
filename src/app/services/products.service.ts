import { Injectable } from "@angular/core";
import { product } from "../model/product";
import { data } from "../model/mockData";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ProductsService {
  products = data;
  api = 'https://5e7b1af40e04630016332b23.mockapi.io/product'
  constructor(private http: HttpClient) {}

  getProducts(): Observable<product[]>{
      return this.http.get<product[]>(this.api);
  }

  getProduct(id): Observable<product>{
    // console.log(this.api+"/"+id);
    return this.http.get<product>(this.api+"/"+id);
  }

  addProduct(product) {
    let newObj = { id: 6, ...product };
    console.log(newObj);

    this.products.push(newObj);
    console.log(this.products);
  }

  removeItem(id){
    return this.products = this.products.filter(p => p.id != id);
  }
}
