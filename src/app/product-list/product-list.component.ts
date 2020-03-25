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
    this.products = this.productsService.products;
  }
products: product[];

  selected: product;
  showDetail(product) {
    this.selected = product;
  }

  removeItem(id) {
    this.productsService.removeItem(id);
  }
}