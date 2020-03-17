import { Component, OnInit } from '@angular/core';
import { data } from '../model/mockData';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
products=data;

  removeItem(id) {
    return this.products = this.products.filter(p => p.id != id);
  }
}