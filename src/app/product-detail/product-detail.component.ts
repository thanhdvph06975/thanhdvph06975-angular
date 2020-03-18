import { Component, OnInit,Input } from '@angular/core';
import { product } from "../model/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
@Input("data") product: product;
  constructor() { }

  ngOnInit() {
  }

}