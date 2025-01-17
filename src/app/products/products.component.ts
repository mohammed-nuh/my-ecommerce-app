import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  title: string = "List of products";
  productList: Product[];

  constructor(private productService: ProductsService) {
    this.productList = this.productService.getProducts();
  }
}
