import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service'
import { product } from '../model/product';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  constructor(private productsService:ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }
products:product[];

  removeItem(id) {
    this.products=this.productsService.removeItem(id);
  }
    getProducts(){
    this.productsService.getProducts().subscribe(data => {this.products=data});
  }
}