import { Component, inject } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
private productService = inject(ProductService);
products = this.productService.products;
}
