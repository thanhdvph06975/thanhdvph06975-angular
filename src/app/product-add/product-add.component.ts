import { Component, OnInit } from '@angular/core';
import { product } from "../model/product";
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

product: product = new product();
addProduct(){
  console.log(this.product);
}
}