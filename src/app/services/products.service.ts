import { Injectable } from "@angular/core";
import { product } from "../model/product";
import { data } from "../model/mockData";
@Injectable()
export class ProductsService {
  products = data;
  constructor() {}

  getProducts(){
     return this.products;
  }

  addProduct(product) {
    let newObj = { id: 6, ...product };
    console.log(newObj);

    this.products.push(newObj);
    console.log(this.products);
  }
}
