import { Component, OnInit } from '@angular/core';
import { product } from "../model/product";
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product: product;
  constructor(private productsService : ProductsService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
     this.getProduct();
  }

  getProduct(){
    this.activatedRoute.params.subscribe(param => {
      this.product = this.productsService.getProduct(param.id);
    });
  }

}