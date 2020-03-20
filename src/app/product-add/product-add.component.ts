import { Component, OnInit, Output } from '@angular/core';
import { product } from "../model/product";
import { ProductsService } from '../services/products.service'
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(
    private productsService: ProductsService
    ) { 
     
  }

  ngOnInit() {
  }

product: product = new product();
addProduct(){
  this.productsService.addProduct(this.product);
}
}