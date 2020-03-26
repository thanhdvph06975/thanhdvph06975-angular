import { Component, OnInit } from '@angular/core';
import { product } from "../model/product";
import { data } from '../model/mockData';
import {ProductsService} from '../services/products.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productsService:ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }
products: product[];

  selected: product;
  showDetail(product) {
    this.selected = product;
  }

  removeItem(id) {
    this.products = this.productsService.removeItem(id);
  }

  getProducts(){
    this.productsService.getProducts().subscribe(data => {this.products=data});
  }
}