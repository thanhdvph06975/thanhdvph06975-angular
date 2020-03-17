import { Component, OnInit } from '@angular/core';
import { product } from "../model/product";
import { data } from '../model/mockData';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
products = data;

  selected: product;
  showDetail(product) {
    this.selected = product;
  }

  removeItem(id) {
    return this.products = this.products.filter(p => p.id != id);
  }
}