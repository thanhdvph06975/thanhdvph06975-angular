import { Component, OnInit } from '@angular/core';
import { data } from '../model/mockData';
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
    this.products = this.productsService.products;
  }
products:product[];

  removeItem(id) {
    this.productsService.removeItem(id);
  }
}