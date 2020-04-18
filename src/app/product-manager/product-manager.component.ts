import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../services/products.service";
import { product } from "../model/product";
@Component({
  selector: "app-product-manager",
  templateUrl: "./product-manager.component.html",
  styleUrls: ["./product-manager.component.css"]
})
export class ProductManagerComponent implements OnInit {
  products: product[];
  page = 1;
  pageSize = 5;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
    // console.log(this.products);
  }

  removeItem(id) {
    this.products = this.productsService.removeItem(id);
  }
  getProducts() {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
